import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightboxModule } from 'ngx-lightbox';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './pages/header/header.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { SkillComponent } from './components/skill/skill.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ServiceComponent } from './pages/service/service.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ReviewComponent } from './pages/review/review.component';
import { FormComponent } from './components/form/form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';


//Services
import { SidebarService } from './services/sidebar/sidebar.service';
import { HeaderService } from './services/header/header.service';
import { AboutService } from './services/about/about.service';
import { EducationService } from './services/education/education.service';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ExperienceService } from './services/experience/experience.service';
import { ServiceService } from './services/service/service.service';
import { PortfolioService } from './services/portfolio/portfolio.service';
import { ReviewService } from './services/review/review.service';
import { ContactService } from './services/contact/contact.service';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    HeaderComponent,
    SocialNetworksComponent,
    SkillComponent,
    EducationComponent,
    TimelineComponent,
    ExperienceComponent,
    ServiceComponent,
    PortfolioComponent,
    ReviewComponent,
    FormComponent,
    ContactComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxTypedJsModule,
    LightboxModule,
    NgbModule,
    NgbCollapseModule,
    FormsModule
  ],
  providers: [
    SidebarService,
    HeaderService,
    AboutService,
    EducationService,
    ExperienceService,
    ServiceService,
    PortfolioService,
    ReviewService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
