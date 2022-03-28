import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TxtCompComponent } from './txt-comp/txt-comp.component';
import { CreateNewBucketComponent } from './create-new-bucket/create-new-bucket.component';
import { MyNewStorageComponent } from './my-new-storage/my-new-storage.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/app.component', pathMatch: 'full' },
  //{path: '', component: TxtCompComponent},
  {path: '', component: AppComponent},
  {path: 'create_new', component: CreateNewBucketComponent},
  {path: 'bucket_contents', component: MyNewStorageComponent},
  

	];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
export const routingComponents = [CreateNewBucketComponent, TxtCompComponent, MyNewStorageComponent];
