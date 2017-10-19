import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular'

@Component({
	templateUrl: 'poupanca.html'
})

export class PoupancaPage  {
	
	public Poupanca;

	constructor(public navParams: NavParams){
		this.Poupanca = this.navParams.get('PoupancaSelecionada');
		console.log(this.Poupanca.nome);

	}
}
