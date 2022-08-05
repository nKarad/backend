sumar.js

exports.Sumar = void 0;
var Sumar = (function () {
    function Sumar(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    }
    Sumar.resultado = function () {
        return this.num1 + this.num2;
    };
    return Sumar;
}());

export default sumar
