import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PannierService {
  private don = [
      {id : 0, jour: [1,2,4,5], name:"Burger", price:"6", expanded: false, description:"Un burger excellent !"},
      {id : 0, jour: [1,2],name:"Bolognaises", price:"8", expanded: false, description:"Hum la bonne sauce..."},
      {id : 0, jour: [1,2,3,4,5],name:"Pizza", price:"10", expanded: false, description:"La Pi-Za ! ANANAS INTERDIT"},
      {id : 0, jour: [1,2,5],name:"Croque-Monsieur", price:"4", expanded: false, description:"Et lèche madame ;)"},
      {id : 0, jour: [1,2,3,5],name:"Sushis", price:"12", expanded: false, description:"Une soirée solo ? Des sushis !"},
      {id : 0, jour: [1,2,3,4],name:"thon", price:"120", expanded: false, description:"Un thon comme vous n'en avez jamais vu...Même en lendemain de soirée !"},  
  ]
  private data = [
    {
      id : 1,
      day : 'Lundi',
      expanded : false,
      current : true,
      plats:[] 
    },
    {
      id : 2,
      day : 'Mardi',
      expanded : false,
      current : true,
      plats:[] 
    },
    {
      id : 3,
      day : 'Mercredi',
      expanded : false,
      current : true,
      plats:[] 
    },
    {
      id : 4,
      day : 'Jeudi',
      expanded : false,
      current : true,
      plats:[] 
    },
    {
      id : 5,
      day : 'Vendredi',
      expanded : false,
      current : true,
      plats:[] 
    },
  ]

  private pannier = [];
  private init = false;
  constructor() { }

  initMenu()
  {
    for(let j of this.data){
      for(let plat of this.don){
        for(let id of plat.jour){
          if(id === j.id){
            plat.id = j.plats.length;
            j.plats.unshift(plat);
          }
        }
      }
    }
    this.init = true;
  }
  getMenu()
  {
    if(!this.init)
    {
      this.initMenu();
    }
    
    return this.data;
  }

  getPannier()
  {
    return this.pannier;
  }

  addPlat(plat)
  {
    this.pannier.unshift(plat);
  }

  supprimerPlatPannier(plat)
  {
    let i = 0;
    for(let p of this.pannier)
    {
      if(plat.id === p.id)
      {
        this.pannier.splice(i,1);
        break;
      }
        i++;
    }
  }

  viderPannier()
  {
    console.log(this.pannier);
    for(let plat of this.pannier)
    {
      this.supprimerPlatPannier(plat);
    }
    console.log(this.pannier);
  }
}
