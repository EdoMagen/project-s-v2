<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_swanscreen');

/** MySQL database username */
define('DB_USER', 'sw_admin');

/** MySQL database password */
define('DB_PASSWORD', '2RtUyK4M3vy4PqPV');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         '8&D{&19[A&vVB;YOb!w,,n6J-p.gR^2-t2Y=CG^L-s Fo%l,dp4g$q Sp|# 3?Ew');
define('SECURE_AUTH_KEY',  '@+s-K,TX[}`}K[FJu*cQbV Ky5x$d.KcWX9RRe6y>q%`b]`}2_[zE? 0K wMy6Oi');
define('LOGGED_IN_KEY',    'm%gjb` OI25dbF(%&u%dA|~,ZBs}$jmV0z)G;-F&-}&Zw{Y(&/8K+PNaz]N5x[ {');
define('NONCE_KEY',        '+C[qa#9!,OjP#gh,c{{{PfBv/KHk0}|{,swFwkt$[Cbm;mA&VFS WA{z?^4;tgl!');
define('AUTH_SALT',        '7t- `oE&Y=D.JbXn[[E>kN^.D4U~kb(|(GvuFGFkDFs{pY|t{Xt&w/7w4IssFVHz');
define('SECURE_AUTH_SALT', 'cEY~/jA&yj/w_|s!]0Zov=%8?3YVEbp*JD !b~o%> lL8C4f|s=~>le&vT f3t|Q');
define('LOGGED_IN_SALT',   '`9%,PJCasXCN+vk%DJDL$[SJ`oCaf)G*7ix+vXS5.Mr03a6-YC/Uomnx+v!l:^wg');
define('NONCE_SALT',       '`cKs+4f/KI4][T6@>(oBQi^!`>g>-]Lv9@|*6D|=!P^(rb7iVtW6@DL}er/.)|?=');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
