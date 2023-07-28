import { BlockElements, PatchHelper, ScopeObject, StrawberryElement, app } from "../../strawberry/app";

interface LoaderAnimation {
    name: 'LoaderAnimation',
    each:(element:StrawberryElement)=>void
} 

/** The Page Loader Component */
export interface AppLoader {

    /**
     * Call when you are ready to display anything in the page!
     */
    complete:()=>void 
}

app.component<AppLoader>('Loader',(
    $scope: ScopeObject,
    $patch: PatchHelper,
    $block: BlockElements<LoaderAnimation>
)=>{
    return {
        complete:()=>{
            $block({
                name: 'LoaderAnimation',
                each:(loader)=>{
                    loader.$element.innerHTML = '';
                    document.getElementById('main').style.display = 'block';
                }
            });
        }
    }
})