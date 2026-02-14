<?php
add_action( 'wp_enqueue_scripts', 'astra_child_style' );
function astra_child_style() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style') );
}

// Enqueue CV Builder assets
add_action( 'wp_enqueue_scripts', 'astra_child_cv_builder_assets' );
function astra_child_cv_builder_assets() {
    wp_enqueue_style(
        'cv-builder-css',
        get_stylesheet_directory_uri() . '/assets/css/cv-builder.css',
        array(),
        '1.0'
    );

    wp_enqueue_script(
        'cv-builder-js',
        get_stylesheet_directory_uri() . '/assets/js/cv-builder.js',
        array(),
        '1.0',
        true
    );

    // html2pdf library
    wp_enqueue_script(
        'html2pdf-js',
        'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js',
        array(),
        '0.10.1',
        true
    );
}

// Shortcode
add_shortcode( 'cv_builder', 'render_cv_builder' );
function render_cv_builder() {
    ob_start();
    get_template_part( 'template-parts/cv-builder' );
    return ob_get_clean();
}
