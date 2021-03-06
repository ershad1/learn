import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';

const appRoutes: Routes = [
  {path: 'index', component: HomeComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
