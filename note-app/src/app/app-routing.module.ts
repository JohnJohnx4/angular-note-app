import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';

const routes: Routes = [
  { path: 'notes', component: AppComponent },
  { path: 'add', component: AddNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
