import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PollAddComponent } from './poll-add/poll-add.component';
import { authGuard } from '../Guards/auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PollsComponent } from './polls/polls.component';

export const routes: Routes = [
    {path:'',component:LandingComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'poll',component:PollsComponent},
    {path:'forgot-password',component:ForgotPasswordComponent},
    {path:'reset-password',component:ResetPasswordComponent},
    {path:'add-poll',component:PollAddComponent}
];

// canActivate: [authGuard]
