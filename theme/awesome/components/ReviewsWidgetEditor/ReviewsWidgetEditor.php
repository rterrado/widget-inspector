<?php 
    class SkeletonLoader {
        /**
         * A config card is the where you can configure settings of the widget
         */
        public static function config_card(){
            echo '<div class="width-21 ..group.card_standard">
                <div class="padding-x-13 padding-top-13 padding-bottom-13 display-flex align-items-center">
                    <div class="skeleton medium-square-2 border-radius-extra-large-1 margin-right-7"></div>
                    <div class="skeleton skeleton-height-16 width-12 border-radius-extra-small-5"></div>
                </div>
                <div class="...Separator.item_separator--bottom"></div>
                <div class="padding-x-13 padding-top-19 padding-bottom-19 small-height-5 display-flex align-items-center">
                    <div class="skeleton skeleton-height-16 width-24 border-radius-extra-small-5"></div>
                </div>
                <div class="padding-x-13 padding-top-19 padding-bottom-19 small-height-5 display-flex align-items-center">
                    <div class="skeleton skeleton-height-16 width-24 border-radius-extra-small-5"></div>
                </div>
                <div class="padding-x-13 padding-top-19 padding-bottom-19 small-height-5 display-flex align-items-center">
                    <div class="skeleton skeleton-height-16 width-24 border-radius-extra-small-5"></div>
                </div>
                <div class="padding-x-13 padding-top-19 padding-bottom-19 small-height-5 display-flex align-items-center">
                    <div class="skeleton skeleton-height-16 width-24 border-radius-extra-small-5"></div>
                </div>
                <div class="padding-x-13 padding-top-19 small-height-5 display-flex align-items-center">
                    <div class="skeleton skeleton-height-16 width-24 border-radius-extra-small-5"></div>
                </div>
                <div class="padding-bottom-13"></div>
            </div>';
        }


        public static function reviews_widget(){
            echo '<div class="width-24 display-flex margin-bottom-21">
                    <div class="margin-right-7">
                        <div class="skeleton medium-square-2 border-radius-extra-large-1"></div>
                    </div>
                    <div class="flex-grow-1">
                        <div class="display-flex align-items-center">
                            <div class="color-extra-gray margin-right-7 text-9">★ ★ ★ ★ ★</div>
                            <div class="skeleton skeleton-height-16 flex-grow-1 border-radius-extra-small-5"></div>
                        </div>
                        <div class="skeleton skeleton-height-16 width-24 margin-top-5 border-radius-extra-small-5"></div>
                        <div class="skeleton small-height-3 width-24 margin-top-5 border-radius-extra-small-5"></div>
                    </div>
                </div>
                <div class="width-24 display-flex margin-bottom-21">
                    <div class="margin-right-7">
                        <div class="skeleton medium-square-2 border-radius-extra-large-1"></div>
                    </div>
                    <div class="flex-grow-1">
                        <div class="display-flex align-items-center">
                            <div class="color-extra-gray margin-right-7 text-9">★ ★ ★ ★ ★</div>
                            <div class="skeleton skeleton-height-16 flex-grow-1 border-radius-extra-small-5"></div>
                        </div>
                        <div class="skeleton skeleton-height-16 width-24 margin-top-5 border-radius-extra-small-5"></div>
                        <div class="skeleton small-height-3 width-24 margin-top-5 border-radius-extra-small-5"></div>
                    </div>
                </div>
                <div class="width-24 display-flex margin-bottom-21">
                    <div class="margin-right-7">
                        <div class="skeleton medium-square-2 border-radius-extra-large-1"></div>
                    </div>
                    <div class="flex-grow-1">
                        <div class="display-flex align-items-center">
                            <div class="color-extra-gray margin-right-7 text-9">★ ★ ★ ★ ★</div>
                            <div class="skeleton skeleton-height-16 flex-grow-1 border-radius-extra-small-5"></div>
                        </div>
                        <div class="skeleton skeleton-height-16 width-24 margin-top-5 border-radius-extra-small-5"></div>
                        <div class="skeleton small-height-3 width-24 margin-top-5 border-radius-extra-small-5"></div>
                    </div>
                </div>';
        }
    }
?>

<section xcomponent="@ReviewsWidgetEditor" class="width-24 height-24">
    <div xif="StateManager.Component.state=='loading'" class="...Editor.wrapper">
        <div class="...Editor.widget-display-pane display-flex flex-direction-column align-items-center justify-content-center">
            <div class="width-19">
                <?php SkeletonLoader::reviews_widget(); ?>;
            </div>
        </div>
        <div class="...Editor.widget-settings-pane display-flex align-items-center justify-content-flex-start">
            <?php SkeletonLoader::config_card(); ?>;
        </div>
    </div>
    <div xif="StateManager.Component.state=='no-widget'" class="display-flex align-items-center justify-content-center width-24 height-24">
        <div class="max-width-11 width-24">
            <div class="text-17 font-weight-bold color-bored-gray margin-bottom-4">404.</div>
            <div class="text-4 font-weight-300 line-height-17">We couldn't find any instance of Reviews Widget 3.0 on this app key. If you believe this is a mistake, please contact <strong>terradoflex@gmail.com</strong> with the relevant information.</div>
            <div class="margin-top-13"></div>
            <a href="/"><?php snippet('button',[
                'text' => 'Go Home',
                'color-type' => 'primary',
                'color' => 'white'
            ]); ?></a>
        </div>
    </div>
    <div xif="StateManager.Component.state=='widget'" class="...Editor.wrapper">
        <div class="...Editor.widget-display-pane display-flex flex-direction-column align-items-center justify-content-center">
            <?php component('ReviewsWidgetPreview'); ?>
        </div>
        <div class="...Editor.widget-settings-pane display-flex align-items-center justify-content-flex-start">
            <div id="WidgetSettings" class="width-21 ..group.card_standard">
                <div xif="StateManager.WidgetSettings.state=='Main'">
                    <div class="padding-x-21 padding-top-17 padding-bottom-17 display-flex align-items-center setting-header">
                        <div class="letter-spacing--2 text-11 text-effect-super-bold font-weight-500 color-elegant-black">Reviews Widget</div>
                    </div>
                    <div class="...Separator.item_separator--bottom"></div>
                    <div xclick="switchSettingsView('Layout')" class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center cursor-pointer background-color-extra-gray:hover">
                        <div class="text-5">Layout</div>
                    </div>
                    <div class="...Separator.item_separator--bottom"></div>
                    <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center cursor-pointer background-color-extra-gray:hover">
                        <div class="text-5">General Settings</div>
                    </div>
                    <div class="...Separator.item_separator--bottom"></div>
                    <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center cursor-pointer background-color-extra-gray:hover">
                        <div class="text-5">Widget Header</div>
                    </div>
                    <div class="...Separator.item_separator--bottom"></div>
                    <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center cursor-pointer background-color-extra-gray:hover">
                        <div class="text-5">Sorting & Filtering</div>
                    </div>
                    <div class="...Separator.item_separator--bottom"></div>
                    <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center cursor-pointer background-color-extra-gray:hover">
                        <div class="text-5">Reviews</div>
                    </div>
                    <div class="...Separator.item_separator--bottom"></div>
                    <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center cursor-pointer background-color-extra-gray:hover">
                        <div class="text-5">Empty State</div>
                    </div>
                    <div class="padding-x-21 padding-top-4 display-flex align-items-center cursor-pointer background-color-extra-gray:hover">
                        
                    </div>
                </div>
                <div xif="StateManager.WidgetSettings.state=='Layout'">
                    <div class="padding-x-21 padding-top-17 padding-bottom-17 display-flex align-items-center setting-header">
                        <div xclick="switchSettingsView('Main')" class="margin-right-13 cursor-pointer">
                            <?php snippet('svg',[
                                'class' => 'small-width-5 color-elegant-black',
                                'path' => '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />'
                            ]); ?>
                        </div>
                        <div class="letter-spacing--2 text-11 text-effect-super-bold font-weight-500 color-elegant-black">Layout</div>
                    </div>
                    <div class="...Separator.item_separator--bottom"></div>
                    <div xclick="widgetConfigs.Layout.update('standardLayout')" class="padding-x-21 padding-top-13 padding-bottom-13 cursor-pointer background-color-primary-extra-light:hover display-flex align-items-center">
                        <div class="flex-grow-1">
                            <div class="text-4 color-elegant-black font-weight-500">Standard Layout</div>
                            <div class="text-3 color-label-gray font-weight-300 margin-top-2">Classic, 3-column layout</div>
                            <img class="item-width-1 margin-top-7" src="https://yap.yotpo.com/wadmin/assets/wadmin/images/image-picker/table-stars-layout.svg">
                        </div>
                        <div xif="widgetConfigs.Layout.name=='standardLayout'">
                            <?php snippet('svg',[
                                'class' => 'small-width-8 color-success',
                                'path' => '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'
                            ]); ?>
                        </div>
                    </div>
                    <div class="...Separator.item_separator--bottom"></div>
                    <div xclick="widgetConfigs.Layout.update('boldLayout')" class="padding-x-21 padding-top-13 padding-bottom-13 cursor-pointer background-color-primary-extra-light:hover display-flex align-items-center">
                        <div class="flex-grow-1">
                            <div class="text-4 color-elegant-black font-weight-500">Bold Layout</div>
                            <div class="text-3 color-label-gray font-weight-300 margin-top-2">Modern, image-centric, grid layout</div>
                            <img class="item-width-1 margin-top-7" src="https://yap.yotpo.com/wadmin/assets/wadmin/images/image-picker/grid-stars-layout.svg">
                        </div>
                        <div xif="widgetConfigs.Layout.name=='boldLayout'">
                            <?php snippet('svg',[
                                'class' => 'small-width-8 color-success',
                                'path' => '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'
                            ]); ?>
                        </div>
                    </div>        
                </div>
            </div>
        </div>
    </div>
</section>