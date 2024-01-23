
function atualizar_total() {
    var sub1 = parseFloat(document.getElementById('sub1').innerHTML)
    var sub2 = parseFloat(document.getElementById('sub2').innerHTML)
    var sub3 = parseFloat(document.getElementById('sub3').innerHTML)
    var sub4 = parseFloat(document.getElementById('sub4').innerHTML)

    total = sub1 + sub2 + sub3 + sub4

    document.getElementById('valor_total').innerHTML = total.toFixed(2)
}


function atualizar(id, qnts, sub) {

    var preco = parseFloat(document.querySelector(id).innerHTML);
    
    var Quantidade = parseInt(document.querySelector(qnts).value);
    
    var Valor = preco * Quantidade;

    document.querySelector(sub).innerHTML = Valor;
    atualizar_total()
}

function resetar() {
    document.querySelector('#qntsP1').value = 0
    document.querySelector('#qntsP2').value = 0
    document.querySelector('#qntsP3').value = 0
    document.querySelector('#qntsP4').value = 0
    
    document.querySelector('#sub1').innerHTML = 0
    document.querySelector('#sub2').innerHTML = 0
    document.querySelector('#sub3').innerHTML = 0
    document.querySelector('#sub4').innerHTML = 0

    atualizar_total()

}