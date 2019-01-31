import { Component, OnInit } from '@angular/core';
import { PannierService } from '../services/pannier.service';
import { UserService } from '../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pannier',
  templateUrl: './pannier.page.html',
  styleUrls: ['./pannier.page.scss'],
})
export class PannierPage implements OnInit {
  platsPannier = [];
  total = 0;
  user = {};

  constructor(private pannierService: PannierService, private userService: UserService, private alertController: AlertController, private rooter : Router) { }

  ngOnInit() {
    let pannier = this.pannierService.getPannier();
    let plats = {};

    for (let plat of pannier) {
      if (plats[plat.id]) {
        plats[plat.id].count++;
      }
      else {
        plats[plat.id] = { ...plat, count: 1 };
      }
    }

    this.user = this.userService.getUser();
    this.platsPannier = Object.keys(plats).map(key => plats[key]);
    this.total = this.platsPannier.reduce((a, b) => a + (b.count * b.price), 0);
  }

  supprimerPlatPannier(plat) {
    let index = this.platsPannier.indexOf(plat);
    if (index > -1) {
      if (plat.count > 1) {
        this.platsPannier[index].count -= 1;
      }
      else {
        this.platsPannier.splice(index, 1);
      }

      this.pannierService.supprimerPlatPannier(plat);
      this.total -= plat.price;
    }
  }
  viderPannier() {
    this.pannierService.viderPannier();
    this.total = 0;
  }
  async commander() {
    if (this.total < this.userService.getMoney()) {
      for (let plat of this.platsPannier) {
        this.userService.addPlatToHisto(plat);
        this.userService.pay(plat.price * plat.count);
        this.platsPannier = [];
      }
      this.viderPannier();
    }
    else {
      const alert = await this.alertController.create({
        header: 'Oh le voleur...',
        subHeader: 'Ou le maladroit !',
        message: 'Vous ne pouvez pas commander autant sans recharger votre cagnotte !',
        buttons: ['OK']
      });
      await alert.present();
      }
    }


    
  }