restar.js

exports.Restar = void 0;
var Restar = (function () {
    function Restar(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    }
    Restar.resultado = function () {
        return this.num1 - this.num2;
    };
    return Restar;
}());
exports.Restar = Restar;
