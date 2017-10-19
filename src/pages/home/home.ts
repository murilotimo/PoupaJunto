import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { PoupancaPage } from '../poupanca/poupanca';
import { NovaPoupancaPage } from '../nova-poupanca/nova-poupanca';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})


export class HomePage implements OnInit {

	public PoupancasMinhas;
	public PoupancasAmigos;

	constructor(
		public navCtrl: NavController,
		private _loadingCtrl:LoadingController ) {}

		ngOnInit() {

			let loader = this._loadingCtrl.create({
				content:'Buscando poupanças, Aguarde...'
				});

			//Loader Criado para quando tivermos o carregamento pela API
			loader.present();

			this.PoupancasMinhas = [
				{ id: '123', 
				nome: 'Festa de Aniversário da Luana', 
				meta: 600,
				saldo: 280.00,
				tpRecorrencia: 'unico',
				participantes: [
					{ userid: 1, foto: 'contact',nome: 'Isaque'  }, 
					{ userid: 2, foto: 'contact',nome: 'Juliana' },
					] 
				},
				{ id: '321', 
				nome: 'Aluguel do Ap', 
				meta: 1200,
				saldo: 400.00,
				tpRecorrencia: 'mensal',
				participantes: [
					{ userid: 1, foto: 'contact',nome: 'Sabrina'  }, 
					{ userid: 2, foto: 'contact',nome: 'Priscila'    },
					] 
				},
			];

			this.PoupancasAmigos = [
				{ id: '456', 
				nome: 'Pescaria do Chico', 
				meta: 8000.00,
				saldo: 2500.00,
				tpRecorrencia: 'unico',
				participantes: [
					{ userid: 1, foto: 'contact',nome: 'Isaque' }, 
					{ userid: 2, foto: 'contact',nome: 'João'   },
					] 
				},
				{ id: '654', 
				nome: 'Chopp da Sexta', 
				meta: 120,
				saldo: 120.00,
				tpRecorrencia: 'semanal',
				participantes: [
					{ userid: 1, foto: 'contact',nome: 'Isaque'  }, 
					{ userid: 2, foto: 'contact',nome: 'João'    },
					] 
				},
			];

			loader.dismiss();
		};

	editar(Poupanca) {
		this.navCtrl.push(PoupancaPage, { PoupancaSelecionada: Poupanca});
	}

	nova() {
		this.navCtrl.push(NovaPoupancaPage);
	}

}
