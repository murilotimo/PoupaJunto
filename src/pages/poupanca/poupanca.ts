import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular'

@Component({
	templateUrl: 'poupanca.html'
})

export class PoupancaPage  {
	
	public Poupanca;

	mostrar = null;

	alternar(grupo){
		if (this.exibido(grupo)){
			this.mostrar = null;
		} else {
			this.mostrar = grupo;
		}
	};
	exibido(grupo) {
		return this.mostrar === grupo; 
	};

	constructor(public navParams: NavParams){
		this.Poupanca = this.navParams.get('PoupancaSelecionada');
		console.log(this.Poupanca.nome);

	}
}
