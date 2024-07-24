import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './State/Effects/auth.effects';
import { authReducer } from './State/Reducers/auth.reducer';
import { ViewReducer } from './State/Reducers/views.reducer';
import { ViewsEffects } from './State/Effects/views.effects';
import { IncidentsReducer } from './State/Reducers/incidents.reducer';
import { IncidentsEffects } from './State/Effects/incidents.effects';
import { provideToastr } from 'ngx-toastr';
import {provideAnimations} from '@angular/platform-browser/animations'
import { PollReducer } from './State/Reducers/polls.reducer';
import { PollEffects } from './State/Effects/polls.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(),
    provideStore({auth: authReducer, views:ViewReducer, incidents:IncidentsReducer,polls:PollReducer}),
    provideEffects([AuthEffects,ViewsEffects,IncidentsEffects, PollEffects ]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
