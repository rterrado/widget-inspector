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
    initWidget:(instanceId,widgetPlaceHolder)=>void
    initWidgets:()=>void
}
