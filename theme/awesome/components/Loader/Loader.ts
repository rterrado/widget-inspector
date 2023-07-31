import { BlockElements, PatchHelper, ScopeObject, StrawberryElement, app } from "../../strawberry/app";
import { StateManagerFactory } from "../../strawberry/factories/StateManagerFactory";

type AppLoaderState = 'active' | 'complete'

type ComponentScope = {
    StateManager: {}
}

/** The Page Loader Component */
export interface AppLoader {

    /**
     * Call when you are ready to display anything in the page!
     */
    complete:()=>void 
}

app.component<AppLoader>('Loader',(
    $scope: ScopeObject<ComponentScope>,
    $patch: PatchHelper,
    StateManagerFactory: StateManagerFactory
)=>{
    const ComponentState = StateManagerFactory.createNewInstance<AppLoaderState,ComponentScope>({
        name: 'Component',
        scope: $scope,
        patch: $patch
    })
    ComponentState.register('active')
                  .register('complete')
                  .switch('active')
    return {
        complete:()=>{
            setTimeout(()=>{
                ComponentState.switch('complete')
                document.getElementById('main').setAttribute('style','display:block')
            },1000)
        }
    }
})