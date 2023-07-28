import { PatchHelper, ScopeObject, app } from "../../strawberry/app";
import { StateManagerFactory } from "../../strawberry/factories/StateManagerFactory";

type AppRouterStates = 'default' | 'error'

interface AppRouter {

}

app.component('AppRouter',(
    $scope: ScopeObject,
    $patch: PatchHelper,
    StateManagerFactory: StateManagerFactory
)=>{
    const ComponentState = StateManagerFactory.createNewInstance<AppRouterStates>({
        name: 'ComponentState',
        scope: $scope,
        patch: $patch
    })
    ComponentState.register('default')
    ComponentState.register('error')
    ComponentState.switch('default')
    
    
})