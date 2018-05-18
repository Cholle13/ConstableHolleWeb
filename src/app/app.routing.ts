import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {CommunityComponent} from './community/community.component';
import {AboutComponent} from './about/about.component';
import {InformationComponent} from './information/information.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'community',        component: CommunityComponent },
    { path: 'about',            component: AboutComponent },
    { path: 'information',      component: InformationComponent },
    { path: 'contact',          component: ContactComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
