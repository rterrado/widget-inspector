import { PatchHelper, ScopeObject, app } from "../../strawberry/app";
import { StateManagerFactory } from "../../strawberry/factories/StateManagerFactory";
import { URLParser } from "../../strawberry/services/URLParser";
import { YotpoContainerSvc } from "../../strawberry/services/YotpoContainerSvc";
import { YotpoJS } from "../../strawberry/services/YotpoJS";
import { ReviewsMainWidgetConfig, ReviewsWidgetLayout, YotpoWidgetsContainer } from "../../strawberry/services/YotpoWidgetsContainer";
import { AppLoader } from "../Loader/Loader";
import { ReviewsWidgetPreview } from "../ReviewsWidgetPreview/ReviewsWidgetPreview";

type ReviewWidgetsEditorStates = 'loading' | 'widget' | 'no-widget'
type WidgetSettingsStates = 'Main' | 'Layout' | 'GeneralSettings' | 'WidgetHeader' | 'SortingFiltering' | 'Reviews' | 'EmptyState'

type ComponentScope = {
    StateManager: {
        Component: {
            state: ReviewWidgetsEditorStates
        },
        WidgetSettings: {
            state: WidgetSettingsStates
        }
    }
    appKey: string,
    productId: string,
    widgetInstanceId:string,
    yotpoConfig: ReviewsMainWidgetConfig,
    widgetConfigs: {
        Layout: {
            name: ReviewsWidgetLayout,
            update:(name:ReviewsWidgetLayout)=>void
        }
    },
    switchSettingsView:(state:WidgetSettingsStates)=>void
}

export interface ReviewsWidgetEditor {}

app.component<ReviewsWidgetEditor>('ReviewsWidgetEditor',(
    $scope: ScopeObject<ComponentScope>,
    $patch: PatchHelper,
    Loader: AppLoader,
    URLParser: URLParser,
    StateManagerFactory: StateManagerFactory,
    YotpoJS: YotpoJS,
    YotpoContainerSvc: YotpoContainerSvc,
    ReviewsWidgetPreview: ReviewsWidgetPreview
)=>{
    $scope.StateManager = {Component:{state:'loading'},WidgetSettings:{state:'Main'}}
    const ComponentState = StateManagerFactory.createNewInstance<ReviewWidgetsEditorStates,ComponentScope>({
        name: 'Component',
        scope: $scope,
        patch: $patch
    })
    ComponentState.register('loading')
                  .register('widget')
                  .register('no-widget')
                  .switch('loading')

    const WidgetSettingState = StateManagerFactory.createNewInstance<WidgetSettingsStates,ComponentScope>({
        name: 'WidgetSettings',
        scope: $scope,
        patch: $patch
    })
    WidgetSettingState.register('EmptyState')
                      .register('GeneralSettings')
                      .register('Layout')
                      .register('Main')
                      .register('Reviews')
                      .register('SortingFiltering')
                      .register('WidgetHeader')
                      .switch('Layout')

    Loader.complete()

    const urlData    = URLParser.getData()
    $scope.appKey    = urlData.appKey
    $scope.productId = urlData.productId

    $scope.switchSettingsView=(state)=>{
        if (state===WidgetSettingState.getCurrentState()) return
        WidgetSettingState.switch(state)
    }

    $scope.widgetConfigs = {
        Layout: {
            name: 'standardLayout',
            update:(name)=>{
                if ($scope.widgetConfigs.Layout.name===name) return
                $scope.yotpoConfig.customizations["view-layout"] = name
                $scope.widgetConfigs.Layout.name = name
                YotpoContainerSvc.updateWidgetConfig({
                    appKey: $scope.appKey, instanceId: $scope.widgetInstanceId, widgetConfig: $scope.yotpoConfig
                }).then(()=>{
                    $patch()
                }).catch(()=>{

                })
            }
        }
    }

    YotpoJS.inject($scope.appKey)

    setTimeout(async ()=>{
        try {
            const config:ReviewsMainWidgetConfig = await YotpoContainerSvc.getReviewsMainWidget($scope.appKey)
            $scope.yotpoConfig = config
            $scope.widgetConfigs.Layout.name = config.customizations["view-layout"]
            $scope.widgetInstanceId = config.instanceId
            ComponentState.switch('widget')
            ReviewsWidgetPreview.setAttributes({
                productId: $scope.productId,
                widgetInstanceId: $scope.widgetInstanceId
            })
            YotpoContainerSvc.refreshWidgets()
        } catch (error) {
            console.log(error)
            ComponentState.switch('no-widget')
        }
    },3000)

    return {}
})