import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


//export class AppRoutingModule {constructor(private router: Router)}
export class AppRoutingModule {}

/*
go(){
  routes.navigate(['']);
}
*/