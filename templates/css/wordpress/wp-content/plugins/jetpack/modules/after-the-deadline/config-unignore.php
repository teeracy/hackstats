<?php
/*
 *  Called by the TinyMCE plugin when Ignore Always is clicked (setup as an action through admin-ajax.php)
 */
function AtD_ignore_call() {

	if ( ! AtD_is_allowed() )
		return;

	$user = wp_get_current_user();

	if ( ! $user || $user->ID == 0 )
		return;

	$ignores = explode( ',', AtD_get_setting( $user->ID, 'AtD_ignored_phrases') );
	array_push( $ignores, $_GET['phrase'] );

	$ignores = array_filter( array_map( 'strip_tags', $ignores ) );

	AtD_update_setting( $user->ID, 'AtD_ignored_phrases', implode( ',', $ignores ) );

	header( 'Content-Type: text/xml' );
	echo '<success></success>';
	die();
}

/*
 *  Called when a POST occurs, used to save AtD ignored phrases
 */
function AtD_process_unignore_update() {

	if ( ! AtD_is_allowed() )
		return;

	if ( ! isset( $_POST['AtD_ignored_phrases'] ) )
		return;

        $user = wp_get_current_user();

        if ( ! $user || $user->ID == 0 )
                return;

	$ignores = array_filter( array_map( 'strip_tags', explode( ',', $_POST['AtD_ignored_phrases'] ) ) );
        AtD_update_setting( $user->ID, 'AtD_ignored_phrases', join( ',', $ignores ) );
}

/*
 *  Display the AtD unignore form on a page
 */
function AtD_display_unignore_form() {

	if ( ! AtD_is_allowed() )
		return;

	$user = wp_get_current_user();

	if ( ! $user || $user->ID == 0 )
		return;

	$ignores = AtD_get_setting( $user->ID, 'AtD_ignored_phra