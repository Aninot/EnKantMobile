var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PannierService } from '../pannier.service';
var PannierPage = /** @class */ (function () {
    function PannierPage(pannierService) {
        this.pannierService = pannierService;
        this.platsPannier = [];
        this.total = 0;
    }
    PannierPage.prototype.ngOnInit = function () {
        var pannier = this.pannierService.getPannier();
        var plats = {};
        for (var _i = 0, pannier_1 = pannier; _i < pannier_1.length; _i++) {
            var plat = pannier_1[_i];
            if (plats[plat.id]) {
                plats[plat.id].count++;
            }
            else {
                plats[plat.id] = __assign({}, plat, { count: 1 });
            }
        }
        this.platsPannier = Object.keys(plats).map(function (key) { return plats[key]; });
        console.log('plats : ', this.platsPannier);
        this.total = this.platsPannier.reduce(function (a, b) { return a + (b.count * b.price); }, 0);
    };
    PannierPage = __decorate([
        Component({
            selector: 'app-pannier',
            templateUrl: './pannier.page.html',
            styleUrls: ['./pannier.page.scss'],
        }),
        __metadata("design:paramtypes", [PannierService])
    ], PannierPage);
    return PannierPage;
}());
export { PannierPage };
//# sourceMappingURL=pannier.page.js.map