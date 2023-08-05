export type ReviewsWidgetLayout = "standardLayout" | "boldLayout"

export type ReviewsMainWidgetConfig = {
    className: 'ReviewsMainWidget',
    cssOverrideAssetUrl: string,
    customizationCssUrl: string,
    customizations: {
        "bottom-line-custom-questions-enable": boolean,
        "bottom-line-enable": boolean,
        "bottom-line-show-text": boolean,
        "bottom-line-text": string,
        "content-date-enable": boolean,
        "content-date-format": "DD/MM/YY",
        "content-pagination-per-page": number,
        "content-pagination-per-page-boldLayout": number,
        "default-sorting-order": string,
        "empty-state-body-text": string,
        "empty-state-button-text": string,
        "empty-state-enable": boolean,
        "empty-state-title-text": string,
        "example-background-color": string,
        "feature-reviews-filter-by-media-onsite-enable": "true" | "false",
        "feature-reviews-filter-by-smart-topics-onsite-enable": "true" | "false",
        "feature-reviews-filter-by-star-rating-onsite-enable": "true" | "false",
        "feature-reviews-search-onsite-enable": "true" | "false",
        "feature-reviews-smart-topics-minimum": number,
        "feature-reviews-sorting-onsite-enable": "true" | "false",
        "feature-reviews-star-distribution-onsite-enable": "true" | "false",
        "grouped-products-enable": boolean,
        "load-font-customizations": string,
        "onsite-sorting": "",
        "primary-font-name-and-url":string,
        "primary-font-size": string,
        "read-only-enable": boolean,
        "reply-title": string,
        "reviews-headline-enable": boolean,
        "reviews-headline-text": string,
        "reviews-product-custom-questions-color": string,
        "reviews-product-custom-questions-enable": boolean,
        "reviews-product-custom-questions-filters-enable": boolean,
        "reviews-product-custom-questions-placement": "Right",
        "reviews-reviewer-custom-questions-enable": boolean,
        "reviews-reviewer-custom-questions-filters-enable": boolean,
        "reviews-show-tab-title": boolean,
        "screen-a-header-text": string,
        "shopper-avatar-enable": boolean,
        "shopper-avatar-enable-boldLayout": boolean,
        "shopper-avatar-format": "icon",
        "shopper-badge-enable": boolean,
        "shopper-name-format": "firstNameWithInitial",
        "syndication-enable": boolean,
        "view-background-color": "transparent",
        "view-empty-button-color": string,
        "view-layout": ReviewsWidgetLayout,
        "view-line-separator-style": "smooth",
        "view-primary-color": string,
        "view-primary-font": string,
        "view-secondary-font": string,
        "view-stars-color": string,
        "view-text-color": string,
        "view-widget-width": string,
        "white-label-enable": boolean
    },
    "instanceId": string,
    "instanceVersionId": string,
    "staticContent": {
        "feature_b_v_syndication": "enabled" | "disabled",
        "feature_reviews_css_editor": "enabled" | "disabled",
        "feature_reviews_custom_questions": "enabled" | "disabled",
        "feature_reviews_filter_by_media": "enabled" | "disabled",
        "feature_reviews_filter_by_smart_topics": "enabled" | "disabled",
        "feature_reviews_filter_by_star_rating": "enabled" | "disabled",
        "feature_reviews_grouped_products": "enabled" | "disabled",
        "feature_reviews_photos_and_videos": "enabled" | "disabled",
        "feature_reviews_search": "enabled" | "disabled",
        "feature_reviews_sorting": "enabled" | "disabled",
        "feature_reviews_star_distribution": "enabled" | "disabled",
        "feature_reviews_syndication": "enabled" | "disabled",
        "feature_reviews_video_support_settings_ks": string
        "feature_reviews_video_support_settings_metadata_profile_id": string,
        "feature_reviews_video_support_settings_partner_id": string,
        "feature_reviews_white_label": "enabled" | "disabled",
        "feature_reviews_widget_v3_settings_enabled_by_onboarding": "false" | "true"
    }
}

export type YotpoWidgetsContainer = {
    guids: {
        [key: string]: {
            config: {
                data: {
                    guid: string
                },
                dependencyGroups: {},
                guidStaticContent: {},
                widgets: {}
            },
            initWidgets:()=>void,
            onInitializerLoad:()=>void,
            yotpo_widget_scripts_loaded: boolean
        }
    },
    initWidget:(instanceId,widgetPlaceHolder)=>Promise<unknown>
    initWidgets:()=>Promise<unknown>
}
