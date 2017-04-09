<!DOCTYPE html>
<html lang="en">
<head>
    <title><?php wp_title() ?> </title>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
    <link rel="stylesheet" href="<?php bloginfo('template_directory')?>/font-awesome/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
    <script src="<?php bloginfo('template_directory')?>js/SOYC.js" type="text/javascript"></script>
    <?php wp_head(); ?>
</head>
<body>
  <div class="background_header">
    <header class="top">
        <nav>
        <?php
    			wp_nav_menu( [
            'theme_location' => 'main_menu'
          ]);  ?>
          </nav>
			</header>
		</div>
