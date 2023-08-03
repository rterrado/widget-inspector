import { PatchHelper, ScopeObject, app } from "../../strawberry/app";
import { StateManagerFactory } from "../../strawberry/factories/StateManagerFactory";
import { URLParser } from "../../strawberry/services/URLParser";
import { YotpoWidgetsContainer } from "../../strawberry/services/YotpoWidgetsContainer";
import { AppLoader } from "../Loader/Loader";

type ReviewWidgetsEditorStates = 'loading' | 'widget' | 'no-reviews-widget'

type ComponentScope = {
    StateManager: {
        Component: {
            state: ReviewWidgetsEditorStates
        }
    }
    appKey: string,
    productId: string
}

export interface ReviewsWidgetEditor {}

app.component<ReviewsWidgetEditor>('ReviewsWidgetEditor',(
    $scope: ScopeObject<ComponentScope>,
    $patch: PatchHelper,
    Loader: AppLoader,
    URLParser: URLParser,
    StateManagerFactory: StateManagerFactory
)=>{
    $scope.StateManager = {Component:{state: 'loading'}}
    const ComponentState = StateManagerFactory.createNewInstance<ReviewWidgetsEditorStates,ComponentScope>({
        name: 'Component',
        scope: $scope,
        patch: $patch
    })
    ComponentState.register('loading')
    ComponentState.register('widget')
    ComponentState.register('no-reviews-widget')
    ComponentState.switch('loading')
    Loader.complete()

    const urlData = URLParser.getData()
    $scope.appKey = urlData.appKey
    $scope.productId = urlData.productId

    const scriptElement = document.createElement('script')
    scriptElement.type  = 'text/javascript'
    scriptElement.async = true 
    scriptElement.src   = 'https://cdn-widgetsrepository.yotpo.com/v1/loader/'+$scope.appKey
    const tagElement = document.getElementsByTagName('script')[0]
    tagElement.parentNode.insertBefore(scriptElement,tagElement)

    setTimeout(()=>{
        const yotpoObject: YotpoWidgetsContainer = window['yotpoWidgetsContainer']
        if (Object.getOwnPropertyNames(yotpoObject.guids[$scope.appKey].config.widgets).length===0) {
            ComponentState.switch('no-reviews-widget')
            return {}
        }
    },3000)

    return {}
})