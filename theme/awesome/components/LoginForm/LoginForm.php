<section xcomponent="@LoginForm" class="">
    <div class="padding-x-21 padding-top-24">
        <div class="letter-spacing-3 text-19"><span class="text-effect-super-bold font-weight-bold color-elegant-black">Hello, there!</span> 👋</div>
        <div class="text-2 letter-spacing--2 font-weight-400 color-bored-gray margin-top-5">To continue, please provide App Key and Product ID</div>
    </div>
    <form class="padding-x-21 padding-top-15 padding-bottom-24" onsubmit="blockAutoSubmit(event)">
        <?php snippet('input-box',[
            'model'=>'appKey',
            'label' => 'App Key',
            'placeholder' => 'Store App Key',
            'icon_svg_path' => '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />'
        ]); ?>
        <div class="margin-top-7"></div>
        <?php snippet('input-box',[
            'model'=>'productId',
            'label' => 'Product ID',
            'placeholder' => 'Product ID',
            'icon_svg_path' => '<path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />'
        ]); ?>
        <div class="margin-top-13 display-flex align-items-center flex-direction-row-reverse width-24">
            <?php snippet('button',[
                'click' => 'submit',
                'type' => 'submit',
                'text' => 'Submit',
                'color-type' => 'primary',
                'color' => 'white'
            ]); ?>
            <div class="text-1 color-error margin-right-5">{{error.message}}</div>
        </div>
    </form>
</section>