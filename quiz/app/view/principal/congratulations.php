<html>
<head>
    <?php include_once(SELF::HEAD) ?>
</head>
<body>
    <?php include_once(SELF::HEADER); ?>
    <section class="banner banner-page-4">
        <div class="quiz-banner"></div>
        <div class="container">
            <div class="row">
<div class="col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-left" style="margin: 0 auto; float: none; text-align: center">
                    <h6><?php echo $this->title; ?></h6>
                    <p>
                        <?php echo $this->msg; ?>
                    </p>
<a class="link btn-cta cta-vermelho" href="<?php echo $this->link; ?>">Saiba mais</a>
                </div>
            </div>
        </div>
    </section>
    <?php include_once(SELF::FOOTER); ?>
</body>
</html>
