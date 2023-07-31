import { InjectableDependency, PatchHelper, ScopeObject, StrawberryApp, StrawberryElement, app } from "../../strawberry/app";
import { URLParser } from "../../strawberry/services/URLParser";
import { AppLoader } from "../Loader/Loader";

export type LoginError = {
    code: 0,
    message: ''
} | {
    code: 1,
    message: 'Please fill out all the required fields'
} | {
    code: 2,
    message: 'The App Key field cannot be empty'
} | {
    code: 3,
    message: 'The Product ID field cannot be empty'
} | {
    code: 4,
    message: 'We could not find the app key'
} 

type ComponentScope = {
    error: LoginError,
    appKey: null|string,
    productId: null|string,
    submit:(button:StrawberryElement)=>void
}

interface LoginForm {

}

app.component<LoginForm>('LoginForm',(
    $scope: ScopeObject<ComponentScope>,
    $patch: PatchHelper,
    Loader: AppLoader,
    URLParser: URLParser
)=>{
    const errorCode = URLParser.getParamValue('error')
    const {appKey,productId} = URLParser.getData()
    $scope.appKey = appKey
    $scope.productId = productId
    if (errorCode!==null) {
        switch (parseInt(errorCode)) {
            case 1: 
                $scope.error = {code:1,message:'Please fill out all the required fields'}
            break;
            case 2: 
                $scope.error = {code:2,message:'The App Key field cannot be empty'}
            break;
            case 3: 
                $scope.error = {code:3,message:'The Product ID field cannot be empty'}
            break;
            case 4:
                $scope.error = {code:4,message:'We could not find the app key'} 
            break;
            default:
            break;
        }
    }
    Loader.complete()
    $scope.submit=(button)=>{
        if ($scope.appKey===null||$scope.productId===null) {
            $scope.error = {code:1,message:'Please fill out all the required fields'}
            $patch()
            return
        }
        if ($scope.appKey.trim()===''||$scope.productId.trim()==='') {
            $scope.error = {code:1,message:'Please fill out all the required fields'}
            $patch()
            return
        }
        button.addClass('is-button-loading')
    }
    return {}
})