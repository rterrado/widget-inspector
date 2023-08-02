import { InjectableDependency, PatchHelper, ScopeObject, StrawberryApp, StrawberryElement, app } from "../../strawberry/app";
import { AccountSvc } from "../../strawberry/services/AccountSvc";
import { URLParser } from "../../strawberry/services/URLParser";
import { AppRouter } from "../AppRouter/AppRouter";
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
    message: 'The App Key appears to be invalid'
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
    URLParser: URLParser,
    AccountSvc: AccountSvc,
    AppRouter: AppRouter
)=>{
    const errorCode = URLParser.getParamValue('error')
    const {appKey,productId} = URLParser.getData()
    $scope.appKey    = appKey
    $scope.productId = productId
    const LoginErrors = {
        NoError: <LoginError>{code:0,message:''},
        MissingFields: <LoginError>{code:1,message:'Please fill out all the required fields'},
        MissingAppKey: <LoginError>{code:2,message:'The App Key field cannot be empty'},
        MissingProductId: <LoginError>{code:3,message:'The Product ID field cannot be empty'},
        InvalidAppKey: <LoginError>{code:4,message:'The App Key appears to be invalid'}
    }
    if (errorCode!==null) {
        switch (parseInt(errorCode)) {
            case 1: $scope.error = LoginErrors.MissingFields
            break;
            case 2: $scope.error = LoginErrors.MissingAppKey
            break;
            case 3: $scope.error = LoginErrors.MissingProductId
            break;
            case 4: $scope.error = LoginErrors.InvalidAppKey
            break;
            default: 
            break;
        }
    }
    Loader.complete()
    $scope.submit=async (button)=>{
        if ($scope.appKey===null||$scope.productId===null) {
            $scope.error = LoginErrors.MissingFields
            $patch()
            return
        }
        if ($scope.appKey.trim()===''||$scope.productId.trim()==='') {
            $scope.error = LoginErrors.MissingFields
            $patch()
            return
        }
        button.addClass('is-button-loading')
        const isValidAppKey = await AccountSvc.validate.appKey($scope.appKey)
        if(!isValidAppKey) {
            $scope.error = LoginErrors.InvalidAppKey
            $patch()
            return
        }
        console.log(AppRouter)
        AppRouter.routeTo.reviewsWidget({
            appKey: $scope.appKey,
            productId: $scope.productId
        })
    }
    return {}
})