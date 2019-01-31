import { Component, OnInit, RootRenderer } from '@angular/core';
import { PannierService } from '../services/pannier.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  user = {};
  pannier = [];
  menu = [];
  today;

  sliderConfig = {
    centeredSlides: true,
    slidesPerView:1.6
  }
  constructor(private pannierService: PannierService, private userService : UserService, private rooter: Router) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.pannier = this.pannierService.getPannier();
    this.menu = this.pannierService.getMenu();
    this.today = new Date().getDay().toLocaleString();
  }
  addPlatToPannier(plat)
  {
    this.pannierService.addPlat(plat);
  }

  openPannier()
  {
    this.rooter.navigate(['pannier']);
  }
}
