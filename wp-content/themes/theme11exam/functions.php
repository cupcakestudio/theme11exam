<?php
add_action( 'wp_enqueue_scripts', 'enqueue_important_files' );
function enqueue_important_files() {
/*hent parent stylesheet i parenttemaets mappe*/
wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}
?>
<?php add_action('wp_enqueue_scripts', 'load_customjs_files');
function load_customjs_files() {
  wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/functionality.js', array('jquery'), filemtime(get_stylesheet_directory() . '/functionality.js'), true);
} 
?>