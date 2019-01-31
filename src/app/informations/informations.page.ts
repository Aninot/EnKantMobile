import { Component, OnInit } from '@angular/core';
import { PannierService } from '../services/pannier.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})

export class InformationsPage implements OnInit {

  pannier = [];
  user = {};

  constructor(private pannierService: PannierService, private userService: UserService, private rooter: Router) { }

  ngOnInit() {
    this.pannier = this.pannierService.getPannier();
    this.user = this.userService.getUser();
  }
  openPannier() {
    this.rooter.navigate(['pannier']);
  }
  getUser() {
    return this.user;
  }
  changeName(firstName, lastName) {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.userService.changeName(firstName, lastName);
  }
  changePswd(pswd) {
    this.user.pswd = pswd;
    this.userService.changePswd(pswd);
  }
  changeEmail(email) {
    this.user.email = email;
    this.userService.changeEmail(email);
  }
  changePhone(phone) {
    this.user.phone = phone;
    this.userService.changePhone(phone);
  }
  updateUser(userForm) {
    console.log(this.checkForm(userForm));
    console.log(userForm.form.value);
    if (this.checkForm(userForm)) {
      this.changeEmail(userForm.value.email);
      
      this.changeName(userForm.value.firstName, userForm.value.lastName);
      this.changePhone(userForm.values.phone);
      if (userForm.value.oldPswd == this.userService.getUser().pswd) {
        if (userForm.value.newPswd == userForm.value.newPswdConfirm && userForm.value.newPswd.length > 0) {
          this.changePswd(userForm.value.newPswd);
        }
      }
      console.log(this.user);
    }
  }
  checkForm(form) {
    for (let champ of form.value) {
      if (champ.required) {
        if (champ.value.length == 0) {
          return false;
        }
      }
    }
    return true;
  }
}
