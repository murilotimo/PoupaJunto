import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovaPoupancaPage } from './nova-poupanca';

@NgModule({
  declarations: [
    NovaPoupancaPage,
  ],
  imports: [
    IonicPageModule.forChild(NovaPoupancaPage),
  ],
})
export class NovaPoupancaPageModule {}
