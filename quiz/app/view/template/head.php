<meta charset="UTF-8">
<title><?php echo self::TITLE ?></title>
<meta name="description" content="<?php echo self::DESCRIPTION; ?>">
<meta property="og:locale" content="pt_PT">
<meta property="og:site_name" content="<?php echo self::TITLE; ?>">
<meta property="og:type" content="website">
<meta property="og:title" content="<?php echo self::TITLE; ?>">
<meta property="og:description" content="<?php echo self::DESCRIPTION; ?>">
<meta property="og:image" content="<?php $this->assets('img/'.self::IMAGE_SHARE); ?>">
<meta property="og:url" content="<?php echo URL . self::IMAGE_SHARE ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="icon" type="image/png" href="<?php $this->assets('img/favicon.png') ?>"/>

<!-- LIB -->
<link rel="stylesheet" href="<?php $this->assets('lib/bootstrap-4.1.3/css/bootstrap.min.css') ?>">

<!-- FORMATAÇÃO -->
<link rel="stylesheet" href="<?php $this->assets('css/micro-style.css') ?>">
<link rel="stylesheet" href="<?php $this->assets('css/style.css') ?>">

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                                     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
         })(window,document,'script','dataLayer','GTM-P9S6QB9');</script>
<!-- End Google Tag Manager -->

