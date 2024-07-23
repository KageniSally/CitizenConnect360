import { AuthInterface } from "./Reducers/auth.reducer";
import { ViewInterface } from "./Reducers/views.reducer";

export interface AppState{
    auth:AuthInterface,
    views:ViewInterface
}