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

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideHttpClient(),
    provideStore({auth: authReducer, views:ViewReducer}),
    provideEffects([AuthEffects,ViewsEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
