import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { MoiComponent } from './moi/moi.component';
import { CompetencesComponent } from './competences/competences.component';
import { EducationComponent } from './education/education.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { ContactService } from './services/contact.service';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    MoiComponent,
    CompetencesComponent,
    EducationComponent,
    ViewComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase, 'cv-angular'),
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
