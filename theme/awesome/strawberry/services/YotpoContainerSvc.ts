import { app } from "../app";
import { ReviewsMainWidgetConfig, YotpoWidgetsContainer } from "./YotpoWidgetsContainer";

/**
 * Represents the `window.yotpoWidgetsContainer` that
 * Yotpo JavaScript 3.0 injects into the page
 */
export interface YotpoContainerSvc {
    getReviewsMainWidget:(appKey:string)=>Promise<ReviewsMainWidgetConfig>,
    refreshWidgets:()=>void,
    updateWidgetConfig:<TWidgetConfig>({appKey,instanceId,widgetConfig}:{
        appKey: string, instanceId: string, widgetConfig: TWidgetConfig
    })=>Promise<unknown>
}

app.service<YotpoContainerSvc>('YotpoContainerSvc',()=>{
    return {
        getReviewsMainWidget:(appKey:string)=>{
            return new Promise((resolve,reject)=>{
                const yotpoObject: YotpoWidgetsContainer = window['yotpoWidgetsContainer']
                if (yotpoObject===undefined||yotpoObject===null) return reject(false)
                if (Object.getOwnPropertyNames(yotpoObject.guids[appKey].config.widgets).length===0) {
                    return reject(new Error('No widget instance'))
                }
                const widgets = yotpoObject.guids[appKey].config.widgets
                for (const instanceId in widgets) {
                    const widget = widgets[instanceId]
                    if (widget.className==='ReviewsMainWidget') {
                        return resolve(widget)
                    }
                }
                return reject(new Error('No ReviewsMainWidget instance'))
            })
        },
        refreshWidgets:()=>{
            const yotpoObject: YotpoWidgetsContainer = window['yotpoWidgetsContainer']
            yotpoObject.initWidgets()
        },
        updateWidgetConfig:({appKey,instanceId,widgetConfig})=>{
            const yotpoObject: YotpoWidgetsContainer = window['yotpoWidgetsContainer']
            yotpoObject.guids[appKey].config.widgets[instanceId] = widgetConfig
            return yotpoObject.initWidgets()
        }
    }
})