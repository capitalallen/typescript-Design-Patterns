"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.disable = void 0;
function disable(target, methodName, descriptor) {
    descriptor.value = function () {
        throw new Error("method not available");
    };
}
exports.disable = disable;
var Test = /** @class */ (function () {
    function Test() {
    }
    // @disable
    Test.prototype.foo = function () {
        console.log("foo");
    };
    Test.prototype.bar = function () {
        console.log("bar");
    };
    return Test;
}());
exports.Test = Test;
var test = new Test();
test.foo();
test.bar();
