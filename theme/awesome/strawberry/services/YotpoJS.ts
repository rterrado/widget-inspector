import { app } from "../app";

export interface YotpoJS {
    /**
     * Injects v3.0 JavaScript inside the head of the page
     * @param appKey - The app key of the store
     */
    inject:(appKey:string)=>void
}

app.service<YotpoJS>('YotpoJS',()=>{
    return {
        inject:(appKey:string)=>{
            const scriptElement = document.createElement('script')
            scriptElement.type  = 'text/javascript'
            scriptElement.async = true 
            scriptElement.src   = 'https://cdn-widgetsrepository.yotpo.com/v1/loader/'+appKey
            const tagElement = document.getElementsByTagName('script')[0]
            tagElement.parentNode.insertBefore(scriptElement,tagElement)
        }
    }
})