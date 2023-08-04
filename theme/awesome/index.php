<html>
    <head>
    <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title><?php page_title(); ?></title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/kenjiefx/strawberry-js@1.0.1/strawberry.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
        <script type="text/javascript">const blockAutoSubmit=e=>e.preventDefault()</script>
        <?php template_assets(); ?>
    </head>
    <body xstrawberry="app" class="background-color-primary-extra-light overflow-y-hidden">
        <?php component('AppRouter'); ?>
        <?php component('Loader'); ?>
        <main id="main" class="width-24">
            <div class="width-24 display-flex device-height-24">
                <?php component('SidebarToolkit'); ?>
                <div class="flex-grow-1">
                    <?php template_content(); ?>
                </div>
            </div>
        </main>
    </body>
</html>