<?php
/*
Plugin Name: Modeler
Description: This plugin allows users to create and manage matching requests for the Kibidango platform.
Version: 1.0
Author: MAJIMUN STUDIO / Itsuki 
*/

// プラグイン有効化時にテーブルを作成
function modeler_activate() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'matching_requests'; // テーブル名
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE IF NOT EXISTS $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
        preferred_kibidango INT,
        status VARCHAR(20) CHECK (status IN ('pending', 'matched', 'cancelled')) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        PRIMARY KEY (id)
    ) $charset_collate;";

    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
}
register_activation_hook(__FILE__, 'kibidango_bank_activate');