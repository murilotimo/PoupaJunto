import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddParticipantesPage } from './add-participantes';

@NgModule({
  declarations: [
    AddParticipantesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddParticipantesPage),
  ],
})
export class AddParticipantesPageModule {}
