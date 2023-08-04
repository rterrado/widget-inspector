import { PatchHelper, ScopeObject, app } from "../../strawberry/app";
import { StateManagerFactory } from "../../strawberry/factories/StateManagerFactory";
import { URLParser } from "../../strawberry/services/URLParser";
import { YotpoContainerSvc } from "../../strawberry/services/YotpoContainerSvc";
import { YotpoJS } from "../../strawberry/services/YotpoJS";
import { ReviewsMainWidgetConfig, YotpoWidgetsContainer } from "../../strawberry/services/YotpoWidgetsContainer";
import { AppLoader } from "../Loader/Loader";

type ReviewWidgetsEditorStates = 'loading' | 'widget' | 'no-widget'

type ComponentScope = {
    StateManager: {
        Component: {
            state: ReviewWidgetsEditorStates
        }
    }
    appKey: string,
    productId: string,
    widgetInstanceId:string
}

export interface ReviewsWidgetEditor {}

app.component<ReviewsWidgetEditor>('ReviewsWidgetEditor',(
    $scope: ScopeObject<ComponentScope>,
    $patch: PatchHelper,
    Loader: AppLoader,
    URLParser: URLParser,
    StateManagerFactory: StateManagerFactory,
    YotpoJS: YotpoJS,
    YotpoContainerSvc: YotpoContainerSvc
)=>{
    $scope.StateManager = {Component:{state: 'loading'}}
    const ComponentState = StateManagerFactory.createNewInstance<ReviewWidgetsEditorStates,ComponentScope>({
        name: 'Component',
        scope: $scope,
        patch: $patch
    })
    ComponentState.register('loading')
                  .register('widget')
                  .register('no-widget')
                  .switch('loading')



    Loader.complete()

    const urlData    = URLParser.getData()
    $scope.appKey    = urlData.appKey
    $scope.productId = urlData.productId

    YotpoJS.inject($scope.appKey)

    setTimeout(async ()=>{
        try {
            const config:ReviewsMainWidgetConfig = await YotpoContainerSvc.getReviewsMainWidget($scope.appKey)
            $scope.widgetInstanceId = config.instanceId
            ComponentState.switch('widget')
            YotpoContainerSvc.refreshWidgets()
        } catch (error) {
            ComponentState.switch('no-widget')
        }
    },3000)

    return {}
})