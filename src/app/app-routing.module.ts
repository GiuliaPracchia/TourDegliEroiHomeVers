import { NgModule } from '@angular/core';
import{RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpClientModule }    from '@angular/common/http';
const routes: Routes= [
  
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  { path: 'heroes', component: HeroesComponent},
  {path: '', redirectTo:'/dashboard', pathMatch: 'full' },
  {path:'**',component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
