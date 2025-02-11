<?php

function enqueue_vite_assets() {
    $theme_dir = get_template_directory_uri();
    $manifest_path = get_template_directory() . '/js/.vite/manifest.json';

    if (file_exists($manifest_path)) {
        $manifest = json_decode(file_get_contents($manifest_path), true);

        // JavaScript ファイルを取得
        $js_entry = array_key_exists('src/index.tsx', $manifest) ? $manifest['src/index.tsx']['file'] : 'main.js';

        // JavaScript を読み込む
        wp_enqueue_script(
            'vite-react-app',
            $theme_dir . '/js/' . $js_entry,
            array(),
            null,
            true
        );

        // CSS ファイルを取得
        if (array_key_exists('css', $manifest['src/index.tsx'])) {
            foreach ($manifest['src/index.tsx']['css'] as $css_file) {
                // CSS を読み込む
                wp_enqueue_style(
                    'vite-app-style-' . md5($css_file), // ユニークなハンドル名
                    $theme_dir . '/js/' . $css_file,
                    array(),
                    null
                );
            }
        }

        wp_localize_script('react-app-js', 'reactAppData', array(
            'imageUrl' => get_template_directory_uri() . '/build/static/media/'
        ));

        // アイコン (favicon.ico) を登録
        echo '<link rel="icon" type="image/x-icon" href="' . $theme_dir . '/js/assets/favicon.ico">';
        echo '<link rel="apple-touch-icon" href="' . $theme_dir . '/js/assets/logo192.png">';
    }
}
add_action('wp_enqueue_scripts', 'enqueue_vite_assets');
