<?php
if (defined('UPPSITE_AJAX')) {
    ob_start(); 
    the_post();
    $single = uppsite_process_post(true);
    global $this_comments;
    comments_template();
    $single['comments'] = $this_comments;
    ob_end_clean(); 
    print json_encode(array($single));
} else {
    include(dirname(__FILE__) . "/router.php");
}
