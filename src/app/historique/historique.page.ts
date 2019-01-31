import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
})
export class HistoriquePage implements OnInit {

  historique = [];
  constructor(private userService : UserService, private rooter: Router) { }

  ngOnInit() {
    this.historique = this.userService.getUser().histo;
  }
  getLog()
  {
    return this.userService.getLog();
  }
  likePlat(plat)
  {
    this.userService.likePlat(plat);
  }
  dislikePlat(plat)
  {
    this.userService.dislikePlat(plat);
  }
}
