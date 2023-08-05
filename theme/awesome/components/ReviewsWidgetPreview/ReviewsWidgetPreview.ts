import { PatchHelper, ScopeObject, app } from "../../strawberry/app";

export interface ReviewsWidgetPreview {
    setAttributes:({productId,widgetInstanceId}:{productId:string,widgetInstanceId:string})=>void
}

type ComponentScope = {
    productId: string,
    widgetInstanceId: string
}

app.component<ReviewsWidgetPreview>('ReviewsWidgetPreview',(
    $scope: ScopeObject<ComponentScope>,
    $patch: PatchHelper
)=>{
    $scope.productId = ''
    $scope.widgetInstanceId = ''
    return {
        setAttributes:({ productId, widgetInstanceId })=>{
            $scope.productId = productId
            $scope.widgetInstanceId = widgetInstanceId
            $patch()
        }
    }
})