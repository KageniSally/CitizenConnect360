import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { View, ViewRequest, ViewResponse } from "../../../Models/viewModel";

export const ViewsActions=createActionGroup({
    source:"VIEW API",
    events:{
        'add view':props<{newView:ViewRequest}>(),
        'add view success':props<{response:ViewResponse}>(),
        'add view failure':props<{message:string}>(),


        'get views':emptyProps,
        'get views success':props<{views:View[]}>(),
        'get views failure':props<{message:string}>()


    }
})