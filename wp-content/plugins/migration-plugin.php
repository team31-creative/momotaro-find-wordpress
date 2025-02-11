<?php
/**
 * Plugin Name: Migration Plugin
 * Description: WordPress でマイグレーションファイルを作成するカスタムコマンド
 * Version: 1.0
 * Author: MJ UNIQUE
 * License: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// WP-CLI が利用可能かチェック
if ( defined( 'WP_CLI' ) && WP_CLI ) {
    // 'make-migration' コマンドを追加
    WP_CLI::add_command( 'make-migration', 'make_migration' );
}

/**
 * マイグレーションファイルを作成する関数
 */
function make_migration( $args, $assoc_args ) {
    // マイグレーション名を取得
    $name = isset($args[0]) ? $args[0] : null;

    // 名前が無い場合はエラー
    if ( !$name ) {
        WP_CLI::error( 'マイグレーション名を指定してください。' );
        return;
    }

    // マイグレーションファイルを保存するディレクトリ
    $migration_dir = wp_upload_dir()['basedir'] . '/migrations';

    // ディレクトリがない場合は作成
    if ( ! file_exists( $migration_dir ) ) {
        mkdir( $migration_dir, 0777, true );
    }

    // タイムスタンプ付きでファイル名を生成
    $timestamp = date( 'Y_m_d_His' );
    $file_name = $migration_dir . "/{$timestamp}_{$name}.php";

    // マイグレーションテンプレート
    $migration_template = "<?php\n\nuse Illuminate\Database\Schema\Blueprint;\nuse Illuminate\Database\Migrations\Migration;\n\nclass {$name} extends Migration {\n    public function up() {\n        // マイグレーションの内容をここに書いてください\n    }\n\n    public function down() {\n        // ロールバックの内容をここに書いてください\n    }\n}\n";

    // マイグレーションファイルを作成
    file_put_contents( $file_name, $migration_template );

    // 成功メッセージ
    WP_CLI::success( "マイグレーションファイルが作成されました: {$file_name}" );
}
