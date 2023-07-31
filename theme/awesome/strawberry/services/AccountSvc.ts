import { app } from "../app";
import { AjaxRequestHelper } from "./AjaxRequestHelper";

export interface AccountSvc {
    validate: {
        /**
         * Validates whether the app key belongs to an account or not
         * @param appKey - The app key in question
         * @returns 
         */
        appKey:(appKey:string)=>Promise<boolean>
    }
}

app.service<AccountSvc>('AccountSvc',(
    AjaxRequestHelper: AjaxRequestHelper
)=>{
    return {
        validate: {
            appKey:(appKey:string)=>{
                return new Promise((resolve,reject)=>{
                    AjaxRequestHelper.get({
                        url: `https://api-cdn.yotpo.com/v1/widget/${appKey}/products/yotpo_site_reviews/reviews.json`
                    }).then(()=>resolve(true)).catch(()=>resolve(false))
                })
            }
        }
    }
})