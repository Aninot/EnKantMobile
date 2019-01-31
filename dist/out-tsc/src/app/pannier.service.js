var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var PannierService = /** @class */ (function () {
    function PannierService() {
        this.data = [
            {
                day: 'Lundi',
                expanded: false,
                plats: [
                    { id: 0, name: "Burger", price: "6" },
                    { id: 1, name: "Bolognaises", price: "8" },
                    { id: 2, name: "Pizza", price: "10" },
                    { id: 3, name: "Croque-Monsieur", price: "4" },
                    { id: 4, name: "Sushis", price: "12" },
                ]
            },
            {
                day: 'Mardi',
                expanded: false,
                plats: [
                    { id: 0, name: "Burger", price: "6" },
                    { id: 1, name: "Bolognaises", price: "8" },
                    { id: 2, name: "Pizza", price: "10" },
                    { id: 3, name: "Croque-Monsieur", price: "4" },
                    { id: 4, name: "Sushis", price: "12" },
                ]
            },
            {
                day: 'Mercredi',
                expanded: false,
                plats: [
                    { id: 0, name: "Burger", price: "6" },
                    { id: 1, name: "Bolognaises", price: "8" },
                    { id: 2, name: "Pizza", price: "10" },
                    { id: 3, name: "Croque-Monsieur", price: "4" },
                    { id: 4, name: "Sushis", price: "12" },
                ]
            },
            {
                day: 'Jeudi',
                expanded: false,
                plats: [
                    { id: 0, name: "Burger", price: "6" },
                    { id: 1, name: "Bolognaises", price: "8" },
                    { id: 2, name: "Pizza", price: "10" },
                    { id: 3, name: "Croque-Monsieur", price: "4" },
                    { id: 4, name: "Sushis", price: "12" },
                ]
            },
            {
                day: 'Vendredi',
                expanded: false,
                plats: [
                    { id: 0, name: "Burger", price: "6" },
                    { id: 1, name: "Bolognaises", price: "8" },
                    { id: 2, name: "Pizza", price: "10" },
                    { id: 3, name: "Croque-Monsieur", price: "4" },
                    { id: 4, name: "thon", price: "120" },
                ]
            },
        ];
        this.pannier = [];
    }
    PannierService.prototype.getPlats = function () {
        return this.data;
    };
    PannierService.prototype.getPannier = function () {
        return this.pannier;
    };
    PannierService.prototype.addPlat = function (plat) {
        this.pannier.push(plat);
    };
    PannierService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PannierService);
    return PannierService;
}());
export { PannierService };
//# sourceMappingURL=pannier.service.js.map