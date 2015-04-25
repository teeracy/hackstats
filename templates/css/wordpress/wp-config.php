<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wrd_c61feiliol');

/** MySQL database username */
define('DB_USER', 'wrdN7ufk2hj');

/** MySQL database password */
define('DB_PASSWORD', 'ngmI6KcQp7');

/** MySQL hostname */
define('DB_HOST', 'sariro.fatcowmysql.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'brN9C9OHblgpWBFbNzSeNFhH1IUiufTjxiFt3QwNwY9T4Eeg3DJDwLNZTAJ0cXLD');
define('SECURE_AUTH_KEY',  'BkZ945jsg4TEj5m0uCXfkplUwxONVCtCO62arclhUogSZlkzrA6DgQCz51M1Kl2E');
define('LOGGED_IN_KEY',    'fPcR0gh0NOFYZK8UlmcuAwP4hxlmeGotjvpVZosv6ldazcp3t7m2q1qMFlXY7GJk');
define('NONCE_KEY',        '6kJEJEMPpCpOretvwNAD8J2ODQCm7bVAEgbZVOgn9nwGBd3LtHS5fnhJYcC3GxhW');
define('AUTH_SALT',        'lvg0XshBTbJmrLRinoNwDOY1etdVZP3NLVgN0K4Sh4SLsiw9VtfFewkhrIRdkM0P');
define('SECURE_AUTH_SALT', 'nPIuYKdmRwFyS9DRh4Q3HaoAaSGVyIyyB0W6Ev0roLAO46zPLXOip0rrt0IH3xP2');
define('LOGGED_IN_SALT',   '7AFud6INqnHSjiXRE3FSeukRr8YChJXH0pIvIEnDA0sGJDrnzMOuVapSCBDFbdCR');
define('NONCE_SALT',       'BXHdvTVjLdXULmilkqDATE36HZSBXtsl0hhjhYfcPDNsHCKOu0MZii0yhHkpcDIR');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
