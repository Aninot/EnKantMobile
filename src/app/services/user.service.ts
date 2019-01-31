import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loged = false;
  private user = {
    lastName: "Thomas",
    firstName: "Anino",
    email: "aninothomas@hotmail.fr",
    phone: "0650663123",
    pswd: "1234",
    money: 100,
    histo: [
      { id: 0, count: 1, name: "Burger", price: "6", date: "01/01/19", like: true },
      { id: 1, count: 1, name: "Bolognaises", price: "8", date: "01/08/19", like: false },
      { id: 2, count: 1, name: "Pizza", price: "10", date: "01/10/19", like: false },
      { id: 3, count: 1, name: "Croque-Monsieur", price: "4", date: "01/11/19", like: false },
      { id: 4, count: 1, name: "Sushis", price: "12", date: "01/12/19", like: true },
    ]
  }

  constructor() { }

  getUser() {
    return this.user;
  }

  //Fonctions pannier
  generateNewHisto(plat) {
    let today = new Date();
    return { id: plat.id, count: plat.count, name: plat.name, price: plat.price, date: today.toLocaleDateString(), like: false };
  }
  addPlatToHisto(plat) {
    this.user.histo.unshift(this.generateNewHisto(plat));
  }
  likePlat(plat) {
    this.user.histo[plat].like = true;
  }
  dislikePlat(plat) {
    this.user.histo[plat].like = false;
  }
  getMoney() {
    return this.user.money;
  }
  pay(cost) {
    this.user.money -= cost;
  }
  //Fonctions user
  changeName(firstName, lastName) {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
  }
  changeEmail(email) {
    this.user.email = email;
  }
  changePhone(phone) {
    this.user.phone = phone;
  }
  changePswd(pswd) {
    this.user.pswd = pswd;
  }
  getLog()
  {
    return this.loged;
  }
  changeLog(status)
  {
    this.loged = status;
  }
}