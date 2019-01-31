
export class HistoPlat{
    count: Number;
    date: Date;
    like: Boolean;
    name: String;
    price : Number;
    id : Number;
    constructor(name, price, id, count, date, like){
        this.name = name;
        this.price = price;
        this.id = id; 
        this.count = count;
        this.date = date;
        this.like = like;
    }
}
