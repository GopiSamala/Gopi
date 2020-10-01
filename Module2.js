"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Employee_1 = require("./Employee");
var Use = /** @class */ (function (_super) {
    __extends(Use, _super);
    function Use() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Use.prototype.m1 = function () {
        var emp = new Employee_1.Employee1();
        console.log(emp.ename);
        var use = new Use();
        console.log(use.eaddress);
    };
    return Use;
}(Employee_1.Employee1));
var u = new Use();
u.m1();
