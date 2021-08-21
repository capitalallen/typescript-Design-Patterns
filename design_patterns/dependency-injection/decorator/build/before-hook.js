"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.before = void 0;
// before hook 
function before(hook) {
    return function (target, methodName, descriptor) {
        return {
            get: function () {
                var originalMethod = descriptor.value.bind(this);
                hook = hook.bind(this);
                return function () {
                    hook();
                    originalMethod();
                };
            }
        };
    };
}
exports.before = before;
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.foo = function () {
        console.log("foo");
    };
    Test.prototype.bar = function () {
        console.log("bar");
    };
    __decorate([
        before(function () {
            console.log('before hook');
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Test.prototype, "bar", null);
    return Test;
}());
exports.Test = Test;
var test = new Test();
test.foo();
test.bar();
