import { Component, OnInit, RootRenderer } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PannierService } from '../services/pannier.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pannier = [];
  loged = false;

  constructor(private pannierService: PannierService, private alertController: AlertController, private userService : UserService, private rooter: Router) { }

  ngOnInit() {
    this.pannier = this.pannierService.getPannier();
  }
  openPannier() {
    this.rooter.navigate(['pannier']);
  }
  async login(form){
    console.log(form.value);
    if(form.value.email == "a" && form.value.pswd==1)
    {
      const alert = await this.alertController.create({
        header: 'Bienvenu !',
        subHeader: '',
        message: 'Vous êtes connecté et pouvez consulter nos menus, ainsi que votre espace personnel etc !',
        buttons: ['Super !']
      });
      await alert.present();
      this.loged = !this.loged;
      this.userService.changeLog(this.loged);

    }
    else{
      const alert = await this.alertController.create({
        header: 'Raté !',
        subHeader: '',
        message: 'Erreur de saisie, veuillez réessayer.',
        buttons: ['OK']
      });
      await alert.present();
      }
    }
  }

