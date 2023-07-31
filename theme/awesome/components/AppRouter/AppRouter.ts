import { PatchHelper, ScopeObject, app } from "../../strawberry/app";
import { StateManagerFactory } from "../../strawberry/factories/StateManagerFactory";
import { URLParser } from "../../strawberry/services/URLParser";

type AppRouterStates = 'default' | 'error'

type ComponentScope = {
    StateManager: {}
}

export interface AppRouter {

}

app.component<AppRouter>('AppRouter',(
    $scope: ScopeObject<ComponentScope>,
    $patch: PatchHelper,
    StateManagerFactory: StateManagerFactory,
    URLParser: URLParser
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
    if (pageName==='index') {
        return;
    }
    if (appKey===null||productId===null) {
        routeAppTo(AppRoutes.index)
        return;
    }
    return {

    }
})