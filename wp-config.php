<?php
require_once __DIR__ . '/vendor/autoload.php';
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */



 use Illuminate\Database\Capsule\Manager as Capsule;

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'momotaro_wp' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'ApeX017JaaM19' );

/** Database hostname */
define( 'DB_HOST', 'momotaro-db.c3yasm6mkpv9.ap-southeast-2.rds.amazonaws.com' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

$capsule = new Capsule;
$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => DB_HOST,
    'database'  => DB_NAME,
    'username'  => DB_USER,
    'password'  => DB_PASSWORD,
    'charset'   => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix'    => '',
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );
define('JWT_AUTH_SECRET_KEY', 'z1dfevezzchyyx6b30pabq9aartbqv36hgyh8ztw');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define('WP_DEBUG', true);  // デバッグモードON
define('WP_DEBUG_LOG', true);  // エラーログをファイルに記録
define('WP_DEBUG_DISPLAY', false);  // 画面にはエラーを表示しない
@ini_set('log_errors', 1);
@ini_set('error_log', '/var/www/wordpress/wp-content/debug.log');  // ログファイルのパス指定

define('WP_HOME', 'https://find-momotaro.team31.jp');  // ローカルのサイトURL
define('WP_SITEURL', 'https://find-momotaro.team31.jp');  // ローカルのサイトURL
define('WP_ENV','https://find-momotaro.team31.jp');



define('S3_UPLOADS_BUCKET', getenv('S3_UPLOADS_BUCKET'));
define('S3_UPLOADS_REGION', getenv('S3_UPLOADS_REGION'));
define('S3_UPLOADS_KEY', getenv('S3_UPLOADS_KEY'));
define('S3_UPLOADS_SECRET', getenv('S3_UPLOADS_SECRET'));
define('S3_UPLOADS_USE_INSTANCE_PROFILE', getenv('S3_UPLOADS_USE_INSTANCE_PROFILE'));

if (!isset($_SERVER['HTTP_HOST']) || empty($_SERVER['HTTP_HOST'])) {
    $_SERVER['HTTP_HOST'] = 'find-momotaro.team31.jp';
}


if (WP_ENV === 'production') {
    define('AS3CF_SETTINGS', serialize(array(
        'provider' => 'aws',
        'bucket' => S3_UPLOADS_BUCKET,
        'region' => S3_UPLOADS_REGION,
        'key' => S3_UPLOADS_KEY,
        'secret' => S3_UPLOADS_SECRET,
    )));
}

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
