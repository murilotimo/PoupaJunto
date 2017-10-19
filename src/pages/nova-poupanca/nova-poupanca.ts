import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddParticipantesPage } from '../add-participantes/add-participantes';

/**
 * Generated class for the NovaPoupancaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-poupanca',
  templateUrl: 'nova-poupanca.html',
})
export class NovaPoupancaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaPoupancaPage');
  }

  adicionarParticipantes() {
    this.navCtrl.push(AddParticipantesPage);
  }

}
