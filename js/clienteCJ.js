class billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}
/*function mostrarEstadoActualCajero()
{
  saldo.innerHTML = "<strong>Total de billetes que quedan en el cajero:</strong><br /><br />";

  for (var c of caja)
  {
    estadoCajero.innerHTML += c.cantidad + " billetes: " + c.valor + "<br />";
  }

}
 
*/
function entregarDinero() {
    let t = document.getElementById("retiro")
    dinero = parseInt(t.value);
    for (let bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad) {
                papeles = bi.cantidad
            }
            else {
                papeles = div;
            }
            entregado.push(new billete(bi.valor, papeles))
            dinero -= (bi.valor * papeles);
        }
    }
    if (dinero > 0) {
        resultado.innerHTML = "soy un cajero pobre y no tengo dinero"
    }

    else {
        for (let e of entregado) {
            if (e.cantidad > 0) {

                resultado.innerHTML +=  e.cantidad + "billetes de $" + e.valor + "<br/>"
            }
        }

    }
}

//mostrarEstadoActualCajero();{
//let resultado = document.getElementById("resultado")
//}

let caja = [];
let entregado = [];
caja.push(new billete(100, 30))
caja.push(new billete(50, 50));
caja.push(new billete(20, 50));
caja.push(new billete(10, 50));
caja.push(new billete(5, 10))



let dinero = 0;
let div = 0;
let papeles = 0;


let b = document.getElementById("retirar")
b.addEventListener("click", entregarDinero);








