import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { DocsComponent } from './docs/docs.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
  { path: 'features', component: FeaturesComponent},
  { path: 'docs', component: DocsComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'events', component: EventsComponent},
  { path: 'angular', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
