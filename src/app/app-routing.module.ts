import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaComponent } from './dia/dia.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path: 'dia', component: DiaComponent},
  {path: 'footer', component: FooterComponent},
  { path: '', component: PresentacionComponent, pathMatch: 'full'},
  { path: '**', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
