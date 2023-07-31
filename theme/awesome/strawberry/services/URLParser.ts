import { app } from "../app";

export type UrlData = {
    protocol: string
    hostName: string
    port: number
    widgetVersion: string
    appKey: string|null
    productId: string|null
    pageName: string
}

export interface URLParser {
    getData:()=>UrlData,
    getParamValue:(key:string)=>string|null
}

app.service<URLParser>('URLParser',()=>{
    const getUrlParams = function (paramKey:string) {
        const pageUrl = window.location.search.substring(1)
        const urlVars = pageUrl.split('&')
        for (let i = 0; i < urlVars.length; i++) {
            let key = urlVars[i].split('=');
            if (key[0] === paramKey) {
                return typeof key[1] === undefined ? null : decodeURIComponent(key[1])
            }
        }
        return null
    }
    const parsePath=(path:string):UrlData=>{

        // Example: http://localhost:4050/v3/reviews-widget.html
        const urlPathTokens = path.split('/')
        let [protocol,,hostnameWithPort,widgetVersion,pageNameHtml] = path.split('/')
        let [hostName,port] = hostnameWithPort.split(':')
        let pageName = (pageNameHtml!==undefined) ? pageNameHtml.split('.')[0] : 'index'
        return {
            protocol: protocol.split(':')[0],
            hostName: hostName,
            port: (port!==undefined) ? parseInt(port): 8080,
            widgetVersion: widgetVersion,
            appKey: getUrlParams('app_key'),
            productId: getUrlParams('product_id'),
            pageName: pageName
        }
    }
    return {
        getData:()=>{
            return parsePath(window.location.href);
        },
        getParamValue:(key:string)=>{
            return getUrlParams(key)
        }
    }
});