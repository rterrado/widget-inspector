import { PatchHelper, ScopeObject, app } from "../../strawberry/app";
import { StateManagerFactory } from "../../strawberry/factories/StateManagerFactory";
import { AccountSvc } from "../../strawberry/services/AccountSvc";
import { URLParser } from "../../strawberry/services/URLParser";
import { LoginError } from "../LoginForm/LoginForm";

type AppRouterStates = 'default' | 'error'

type ComponentScope = {
    StateManager: {}
}

type RouteOptions = {
    /**
     * Routes the app to the Reviews Widget V3 Viewer Page
     */
    reviewsWidget:({appKey,productId}:{appKey:string,productId:string})=>void,
    /**
     * Routes the app to the index / the page where users can
     * input the app key and product ID
     * @param code - Error code. Please refer to the LoginError type
     */
    index:({errorCode,appKey,productId}:{errorCode:number,appKey:string,productId:string})=>void
}

export interface AppRouter {
    routeTo: RouteOptions
}

app.component<AppRouter>('AppRouter',(
    $scope: ScopeObject<ComponentScope>,
    $patch: PatchHelper,
    StateManagerFactory: StateManagerFactory,
    URLParser: URLParser,
    AccountSvc: AccountSvc
)=>{
    const AppRoutes = {
        index: '/',
        editors: {
            reviewsWidget: '/v3/reviews-widget.html'
        }
    } as const
    const routeAppTo=(routeUrl:string)=>{
        location.href = routeUrl
    }
    const ComponentState = StateManagerFactory.createNewInstance<AppRouterStates,ComponentScope>({
        name: 'Component',
        scope: $scope,
        patch: $patch
    })
    ComponentState.register('default').register('error').switch('default')
    const {pageName,appKey,productId} = URLParser.getData()

    const RouteOptions = {
        routeTo: <RouteOptions>{
            reviewsWidget:({appKey,productId})=>{
                routeAppTo(AppRoutes.editors.reviewsWidget+'?app_key='+appKey+'&product_id='+productId)
            },
            index:({errorCode,appKey,productId})=>{
                routeAppTo(AppRoutes.index+'?error='+errorCode+'&app_key='+appKey+'&product_id='+productId)
            }
        }
    }

    if (pageName==='index') {
        return RouteOptions
    }
    if (appKey===null||productId===null) {
        routeAppTo(AppRoutes.index)
        return RouteOptions
    }

    /** We'll validate whether the app key is correct. */
    AccountSvc.validate.appKey(appKey).then((isValidAppKey)=>{
        if (!isValidAppKey) {
            const error:LoginError = {code:4,message:'The App Key appears to be invalid'}
            RouteOptions.routeTo.index({
                errorCode: error.code,
                appKey: appKey,
                productId: productId
            })
        }
    })


    return RouteOptions
})