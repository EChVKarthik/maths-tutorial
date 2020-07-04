import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './auth/about/about.component';
import { GeometryComponent } from './auth/geometry/geometry.component'
import { HomeComponent } from './auth/home/home.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'about_us',component: AboutComponent},
  {path: 'geometry',component: GeometryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AboutComponent, 
  GeometryComponent
]