export class Plat {
    id : Number;
    jour: [Number];
    name:String;
    price:Number;
    expanded: Boolean;
    description:String;
    constructor(id, jour, name, price, description){
        this.id = id;
        this.jour = jour;
        this.expanded = false;
        this.price = price;
        this.description = description;
        this.name = name;
    }
}