import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import {CommunityComponent} from './community/community.component';
import { AboutComponent } from './about/about.component';
import { InformationComponent } from './information/information.component';
import { CarouselComponent } from './community/carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { KenComponent } from './about/ken/ken.component';
import { BradComponent } from './about/brad/brad.component';
import { CivilComponent } from './about/civil/civil.component';
import { PatrolComponent } from './about/patrol/patrol.component';
import { AccomplishmentsComponent } from './about/accomplishments/accomplishments.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    CommunityComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    InformationComponent,
    CarouselComponent,
    ContactComponent,
    KenComponent,
    BradComponent,
    CivilComponent,
    PatrolComponent,
    AccomplishmentsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
