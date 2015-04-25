<?php
// let's load WordPress
$absolute_path = __FILE__;
$path_to_file = explode( 'wp-content', $absolute_path );
$path_to_wp = $path_to_file[0];

require_once( $path_to_wp . '/wp-load.php' );

if ( !is_user_logged_in() || !current_user_can('edit_posts') ) 
	wp_die(__("You are not allowed to be here", 'virtue'));
?>
<!DOCTYPE html>
<head>
<title>Insert Accordion or Tabs</title>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.js"></script>
<script language="javascript" type="text/javascript" src="<?php echo get_option('siteurl') ?>/wp-includes/js/tinymce/tiny_mce_popup.js"></script>
<script type="text/javascript">
 
var ButtonDialog = {
	local_ed : 'ed',
	init : function(ed) {
		ButtonDialog.local_ed = ed;
		tinyMCEPopup.resizeToInnerSize();
	},
	insert : function insertButton(ed) {
	 
		// Try and remove existing style / blockquote
		tinyMCEPopup.execCommand('mceRemoveNode', false, null);
		 
		// set up variables to contain our input values
		var type = jQuery('#icon-dialog select#tabs').val(); 		 
		 
		var output = '';
		
		// setup the output of our shortcode
		if( type == 'accordion')
				output += '[accordion]<br />[pane title="title1" start=open]<br />Put content here<br />[/pane]<br />[pane title="title2"]<br />Put content here<br />[/pane]<br />[pane title="title3"]<br />Copy and paste to create more<br />[/pane]<br />[/accordion]<br />';
		  else {
				output += '[tabs]<br />[tab title="title1" start=open]<br />Put content here<br />[/tab]<br />[tab title="title2"]<br />Put content here<br />[/tab]<br />[tab title="title3"]<br />Copy and paste to create more<br />[/tab]<br />[/tabs]<br />';
		  }
			
		tinyMCEPopup.execCommand('mceInsertContent', false, output);
		 
		// Return
		tinyMCEPopup.close();
	}
};
tinyMCEPopup.onInit.add(ButtonDialog.init, ButtonDialog);
 
</script>
<style type="text/css" media="screen"> #icon-dialog label {font-size:14px; display:block; padding:4px;}  #icon-dialog select {display:block; height:28px; width:200px; font-size:12px;} #icon-dialog a#insert {margin-top:10px;}

</style>

</head>
<body>
	<div id="icon-dialog">
		<form action="/" method="get" accept-charset="utf-8">
			<div>
				<label for="tabs">Accordion or Tabs</label>
				<select name="tabs" id="tabs">
                	<option value="accordion">Accordion</option>
					<option value="tabs">Tabs</option>
                 </select>
			</div>
			<div>	
				<a href="javascript:ButtonDialog.insert(ButtonDialog.local_ed)" id="insert" style="display: block; line-height: 24px; text-align:center">Insert</a>
			</div>
		</form>
	</div>
</body>
</html>