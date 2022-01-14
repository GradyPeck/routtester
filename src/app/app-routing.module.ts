import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApageComponent } from './apage/apage.component';

const routes: Routes = [
  {
  path : 'apage',
  component : ApageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
