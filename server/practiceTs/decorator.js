"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function fac() {
    // console.log('fac');
    return function (target, propertyKey, descriptor) {
        // console.log('propertyKey:', propertyKey)
    };
}
function manage() {
    // console.log('manage');
    return function (target, propertyKey, descriptor) {
        // console.log('manage deco');
    };
}
/**
 * 类装饰器: 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义
 */
function classExtend(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.age = 'age';
            /** 重载name */
            this.name = 'warren';
        }
    };
}
function classLog(originConstructor) {
    console.log('log', originConstructor.name);
}
// @classExtend
// @classLog
class Dec {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
    /**
     * @des 组合：由上往下求值，由下往上依次调用
     */
    product() {
        console.log('product: ', this.name, this.age);
    }
}
__decorate([
    fac(),
    manage()
], Dec.prototype, "product", null);
function default_1() {
    // const dec = new Dec('hew')
    // dec.product()
    // console.log('=========');
}
exports.default = default_1;
//# sourceMappingURL=decorator.js.map