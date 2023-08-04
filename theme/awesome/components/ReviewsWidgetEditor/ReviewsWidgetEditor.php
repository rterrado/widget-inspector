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
            <div class="width-23 height-17 overflow-y-scroll display-flex justify-content-center">
                <div class="yotpo-widget-instance width-21" data-yotpo-instance-id="{{widgetInstanceId}}" data-yotpo-product-id="{{productId}}" data-yotpo-name="" data-yotpo-url="" data-yotpo-image-url="" data-yotpo-description="">
                </div>
            </div>
        </div>
        <div class="...Editor.widget-settings-pane display-flex align-items-center justify-content-flex-start">
            <div class="width-21 ..group.card_standard">
                <div class="padding-x-21 padding-top-17 padding-bottom-17 display-flex align-items-center">
                    <div class="letter-spacing--2 text-11 text-effect-super-bold font-weight-500 color-elegant-black">Reviews Widget</div>
                </div>
                <div class="...Separator.item_separator--bottom"></div>
                <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center">
                    <div class="text-5">Layout</div>
                </div>
                <div class="...Separator.item_separator--bottom"></div>
                <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center">
                    <div class="text-5">General Settings</div>
                </div>
                <div class="...Separator.item_separator--bottom"></div>
                <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center">
                    <div class="text-5">Widget Header</div>
                </div>
                <div class="...Separator.item_separator--bottom"></div>
                <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center">
                    <div class="text-5">Sorting & Filtering</div>
                </div>
                <div class="...Separator.item_separator--bottom"></div>
                <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center">
                    <div class="text-5">Sorting & Filtering</div>
                </div>
                <div class="...Separator.item_separator--bottom"></div>
                <div class="padding-x-21 padding-top-13 padding-bottom-13 display-flex align-items-center">
                    <div class="text-5">Empty State</div>
                </div>
            </div>
        </div>
    </div>
</section>