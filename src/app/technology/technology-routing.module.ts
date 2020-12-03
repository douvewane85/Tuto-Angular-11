import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { TechnoListComponent } from './techno-list/techno-list.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { TechnoDetailsListComponent } from './techno-details-list/techno-details-list.component';

const routes: Routes = [
  { path: 'add-technology', component: TechnoAddComponent },
  { path: 'liste-technology', component: TechnoListComponent },
  { path:  'detail-technology/:id', component:  TechnoDetailsListComponent},
  { path: '',   redirectTo: '/liste-technology', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class TechnologyRoutingModule {
  


 }
