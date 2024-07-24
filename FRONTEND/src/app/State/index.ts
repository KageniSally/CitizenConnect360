import { AuthInterface } from "./Reducers/auth.reducer";
import { IncidenceInterface } from "./Reducers/incidents.reducer";
import { PollInterface } from "./Reducers/polls.reducer";
import { ViewInterface } from "./Reducers/views.reducer";

export interface AppState{
    auth:AuthInterface,
    views:ViewInterface,
    incidents:IncidenceInterface,
    polls:PollInterface
}