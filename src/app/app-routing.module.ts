import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoiComponent } from './moi/moi.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { CompetencesComponent } from './competences/competences.component';
import { ViewComponent } from './view/view.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


const routes: Routes = [

  { path: 'moi', component:  MoiComponent},
  { path: 'education', component: EducationComponent},
  { path: 'competences', component:  CompetencesComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'view', component: ViewComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path:  '', redirectTo: 'moi', pathMatch: 'full' },
  { path:  '**', redirectTo: 'moi' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
