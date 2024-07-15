import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from '../Guards/auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PollsComponent } from './polls/polls.component';
import { PollAddComponent } from './poll-add/poll-add.component';
import { OnePollComponent } from './one-poll/one-poll.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewsComponent } from './views/views.component';
import { IncidenceDisplayComponent } from './incidence-display/incidence-display.component';
import { IncidenceAddComponent } from './incidence-add/incidence-add.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { GovernmentAdminComponent } from './government-admin/government-admin.component';
import { EducateComponent } from './educate/educate.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';


export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    {
        path: 'poll', canActivate: [authGuard], children: [
            { path: '', component: PollsComponent },
            { path: 'add-poll', component: PollAddComponent },
            { path: ':id', component: OnePollComponent }
        ]
    },
    { path: 'views', canActivate: [authGuard], component: ViewsComponent },
    { path: 'view-summary', component: SummaryViewComponent },

    {
        path: 'incidence', canActivate: [authGuard], children: [
            { path: '', component: IncidenceDisplayComponent },
            { path: 'add-incidence', component: IncidenceAddComponent }
        ]
    },
    { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
    {
        path: 'profile', canActivate: [authGuard], component: ProfileComponent
    },
    { path: 'users-admin', canActivate: [authGuard],component: UsersAdminComponent },
    { path: 'government-admin',canActivate: [authGuard], component: GovernmentAdminComponent },
    { path: 'educate',canActivate: [authGuard], component: EducateComponent },

];

// canActivate: [authGuard]
