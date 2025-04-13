<?php
/*
Plugin Name: きびだんご銀行
Description: さる・きじユーザーが桃太郎ユーザーにきびだんごを申請できるプラグイン。
Version: 1.0
Author: MAJIMUN STUDIO / Itsuki 
*/

// プラグイン有効化時にテーブルを作成
function kibidango_bank_activate() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'kibidango_requests'; // テーブル名
    $contact_table_name = $wpdb->prefix . 'monkeydog_contacts'; // テーブル名
    $charset_collate = $wpdb->get_charset_collate();

    // SQL作成
    $sql = "CREATE TABLE $table_name (
        id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        user_id BIGINT UNSIGNED NOT NULL,
        requested_to BIGINT UNSIGNED NOT NULL,
        request_amount INT NOT NULL,
        monkeydog_contact_id BIGINT UNSIGNED NOT NULL,
        status ENUM('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending',
        approved_by BIGINT UNSIGNED NULL,
        approval_date DATETIME NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        FOREIGN KEY (user_id) REFERENCES {$wpdb->prefix}users(ID) ON DELETE CASCADE,
        FOREIGN KEY (requested_to) REFERENCES {$wpdb->prefix}users(ID) ON DELETE CASCADE,
        FOREIGN KEY (approved_by) REFERENCES {$wpdb->prefix}users(ID) ON DELETE SET NULL
    ) $charset_collate;";

    // $contact_table_name の SQL作成
    $contact_sql = "CREATE TABLE $contact_table_name (
        id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone_number VARCHAR(20) NOT NULL,
        line_id VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) $charset_collate;";

    // dbDelta を使用してテーブルを作成

    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    dbDelta($sql);
    dbDelta($contact_sql);
}
register_activation_hook(__FILE__, 'kibidango_bank_activate');

// 管理画面メニュー追加
function kibidango_bank_admin_menu() {
    add_menu_page('きびだんご申請管理', 'きびだんごBank', 'manage_options', 'kibidango_bank', 'kibidango_bank_admin_page');
}
add_action('admin_menu', 'kibidango_bank_admin_menu');

// 桃太郎ユーザー一覧を取得
function kibidango_get_momotaro_users() {
    $args = [
        'role'    => 'momotaro',
        'orderby' => 'display_name',
        'order'   => 'ASC'
    ];
    $users = get_users($args);
    return $users;
}

// 桃太郎ユーザーが所持しているきびだんごを表示
function kibidango_bank_admin_page() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'kibidango_requests';
    $requests = $wpdb->get_results("SELECT * FROM $table_name WHERE status = 'pending'");
    
    echo '<div class="wrap">';
    echo '<h1>きびだんごBank</h1>';
    
    // 桃太郎ユーザー一覧を表示
    echo '<h2>きびだんご所持一覧</h2>';
    echo '<table class="widefat fixed" cellspacing="0">';
    echo '<thead>';
    echo '<tr>';
    echo '<th>名前</th>';
    echo '<th>メールアドレス</th>';
    echo '<th>きびだんご所持数</th>';
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';
    foreach (kibidango_get_momotaro_users() as $user) {
        $kibidango_balance = get_user_meta($user->ID, 'kibidango_balance', true) ?: 0;
        echo '<tr>';
        echo '<td>' . esc_html($user->display_name) . '</td>';
        echo '<td>' . esc_html($user->user_email) . '</td>';
        echo '<td>' . esc_html($kibidango_balance) . '</td>';
        echo '</tr>';
    }
    echo '</tbody>';
    echo '</table>';
}

// WP REST API エンドポイント登録
function kibidango_register_api_routes() {
    register_rest_route('wp/v2/kibidango', '/now_requests/', array(
        'methods' => 'GET',
        'callback' => 'kibidango_get_requests',
        'permission_callback' => '__return_true',
    ));

    register_rest_route('wp/v2/kibidango', '/now_request/', array(
        'methods' => 'GET',
        'callback' => 'kibidango_get_request',
        'permission_callback' => '__return_true',
    ));

    register_rest_route('wp/v2/kibidango', '/grant/', array(
        'methods' => 'POST',
        'callback' => 'kibidango_grant_kibidango',
        'permission_callback' => function() {
            return current_user_can('manage_options'); // 桃太郎のみ
        },
    ));
    register_rest_route('wp/v2/kibidango', '/kibi_request/', array(
        'methods' => 'POST',
        'callback' => 'kibidango_add_request',
        'permission_callback' => function() {
            return is_user_logged_in();
        },
    ));

    register_rest_route('wp/v2/kibidango', '/kibi_request/aproove/', array(
        'methods' => 'POST',
        'callback' => 'kibidango_aproove',
        'permission_callback' => function() {
            return is_user_logged_in();
        },
    ));

    register_rest_route('wp/v2/kibidango', '/kibi_request/reject/', array(
        'methods' => 'POST',
        'callback' => 'kibidango_reject',
        'permission_callback' => function() {
            return is_user_logged_in();
        },
    ));
    
}
add_action('rest_api_init', 'kibidango_register_api_routes');

// きびだんご申請を追加
function kibidango_add_request(WP_REST_Request $request) {
    global $wpdb;
    $params = $request->get_json_params();
    $requested_to = intval($params['requested_to']);
    $request_amount = intval($params['request_amount']);
    $name = sanitize_text_field($params['name']);
    $email = sanitize_email($params['email']);
    $phone_number = sanitize_text_field($params['phone_number']);
    $line_id = sanitize_text_field($params['line_id']);
    $message = sanitize_textarea_field($params['message']);
    $current_user_id = get_current_user_id();

    if ($requested_to <= 0 || $request_amount <= 0) {
        return new WP_Error('invalid_data', '無効なデータです', ['status' => 400]);
    }

    // Check roles of current user and requested_to user
    $current_user_roles = wp_get_current_user()->roles;
    $requested_to_user = get_userdata($requested_to);
    $requested_to_roles = $requested_to_user ? $requested_to_user->roles : [];

    if (array_intersect($current_user_roles, $requested_to_roles)) {
        return new WP_Error('invalid_request', '同じ権限を持つユーザーには申請できません', ['status' => 403]);
    }

    $table_name = $wpdb->prefix . 'kibidango_requests';
    $contact_table_name = $wpdb->prefix . 'monkeydog_contacts';

    $insert_result = $wpdb->insert($contact_table_name, [
        'name' => $name,
        'email' => $email,
        'phone_number' => $phone_number,
        'line_id' => $line_id,
        'message' => $message,
        'created_at' => current_time('mysql'),
    ]);

    if ($insert_result === false) {
        return new WP_Error('db_insert_error', '連絡先の保存に失敗しました: ' . $wpdb->last_error, ['status' => 500]);
    }

    $monkeydog_contact_id = $wpdb->insert_id;

    if (!$monkeydog_contact_id) {
        return new WP_Error('db_insert_error', '連絡先の保存に失敗しました (IDが取得できません)', ['status' => 500]);
    }

    $wpdb->insert($table_name, [
        'user_id' => $current_user_id,
        'requested_to' => $requested_to,
        'request_amount' => $request_amount,
        'monkeydog_contact_id' => $monkeydog_contact_id,
        'status' => 'pending',
        'created_at' => current_time('mysql'),
    ]);

    return rest_ensure_response(['message' => 'きびだんご申請を追加しました']);
}

function kibidango_aproove(WP_REST_Request $request) {
    global $wpdb;
    $id = $request->get_param('id');
    $current_user_id = get_current_user_id();

    $table_name = $wpdb->prefix . 'kibidango_requests';

    // Ensure $id is a valid integer
    $id = intval($id);

    // Perform the update
    $update_result = $wpdb->update(
        $table_name,
        [
            'status' => 'approved',
            'approved_by' => $current_user_id,
            'approval_date' => current_time('mysql'),
        ],
        ["id" => $id],
        ['%s', '%d', '%s'],
        ['%d']
    );

    // Debugging: Log the last query and errors if the update fails
    if ($update_result === false) {
        error_log('DB Update Error: ' . $wpdb->last_error);
        error_log('Last Query: ' . $wpdb->last_query);
    }

    if ($update_result === false) {
        return new WP_Error('db_update_error', '更新に失敗しました: ' . $wpdb->last_error, ['status' => 500]);
    } elseif ($update_result === 0) {
        return new WP_Error('db_update_error', '更新対象が見つかりませんでした', ['status' => 404]);
    }

    return rest_ensure_response(['message' => '申請を承認しました', 'query' => $wpdb->last_query]);
}

function kibidango_reject(WP_REST_Request $request) {
    global $wpdb;
    $id = $request->get_param('id');
    $current_user_id = get_current_user_id();

    $table_name = $wpdb->prefix . 'kibidango_requests';

    // Ensure $id is a valid integer
    $id = intval($id);

    // Perform the update
    $update_result = $wpdb->update(
        $table_name,
        [
            'status' => 'rejected',
        ],
        ["id" => $id],
        ['%s', '%d', '%s'],
        ['%d']
    );

    // Debugging: Log the last query and errors if the update fails
    if ($update_result === false) {
        error_log('DB Update Error: ' . $wpdb->last_error);
        error_log('Last Query: ' . $wpdb->last_query);
    }

    if ($update_result === false) {
        return new WP_Error('db_update_error', '更新に失敗しました: ' . $wpdb->last_error, ['status' => 500]);
    } elseif ($update_result === 0) {
        return new WP_Error('db_update_error', '更新対象が見つかりませんでした', ['status' => 404]);
    }

    return rest_ensure_response(['message' => '申請を承認しました', 'query' => $wpdb->last_query]);
}

// 申請一覧を取得
function kibidango_get_requests(WP_REST_Request $request) {
    global $wpdb;
    $table_name = $wpdb->prefix . 'kibidango_requests';
    $contact_table_name = $wpdb->prefix . 'monkeydog_contacts';
    $current_user_id = get_current_user_id();
    $user_role = wp_get_current_user()->roles;
    $sql = "SELECT * FROM $table_name INNER JOIN $contact_table_name ON $table_name.monkeydog_contact_id = $contact_table_name.id WHERE $table_name.status = 'pending' AND $table_name.requested_to = %d";
    $results = $wpdb->get_results($wpdb->prepare(
        $sql,
        $current_user_id
    ));
    return rest_ensure_response($results);
}

// idで個人情報などを取得する
function kibidango_get_request(WP_REST_Request $request) {
    global $wpdb;
    $table_name = $wpdb->prefix . 'kibidango_requests';
    $contact_table_name = $wpdb->prefix . 'monkeydog_contacts';
    $id = intval($request->get_param('id'));
    $user_role = wp_get_current_user()->roles;
    $sql = "SELECT * FROM $table_name INNER JOIN $contact_table_name ON $table_name.monkeydog_contact_id = $contact_table_name.id WHERE $table_name.id = %d";

    $results = $wpdb->get_results($wpdb->prepare(
        $sql,
        $id
    ));

    if (empty($results)) {
        return new WP_Error('not_found', '指定されたIDのデータが見つかりません', ['status' => 404]);
    }

    // Check if the current user has permission to view this data
    $current_user_id = get_current_user_id();
    if (!in_array('administrator', $user_role) && $results[0]->requested_to != $current_user_id) {
        return new WP_Error('forbidden', 'このデータを表示する権限がありません', ['status' => 403]);
    }

    
    return rest_ensure_response($results[0]);
}

// きびだんごを付与
function kibidango_grant_kibidango(WP_REST_Request $request) {
    $params = $request->get_json_params();
    $recipient_id = intval($params['user_id']);
    $amount = intval($params['amount']);
    
    if ($recipient_id <= 0 || $amount <= 0) {
        return new WP_Error('invalid_data', '無効なデータです', ['status' => 400]);
    }
    
    // きびだんご残高更新
    $current_balance = get_user_meta($recipient_id, 'kibidango_balance', true) ?: 0;
    update_user_meta($recipient_id, 'kibidango_balance', $current_balance + $amount);
    
    return rest_ensure_response(['message' => 'きびだんごを付与しました', 'new_balance' => $current_balance + $amount]);
}

