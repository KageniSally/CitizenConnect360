import { createFeatureSelector } from "@ngrx/store";
import { PollInterface } from "../Reducers/polls.reducer";

const pollsFeatureSelector=createFeatureSelector<PollInterface>('polls')