var qtdhomens, qtdmulheres, qtdcriancas;
var TotalCarne, TotalLinguica, TotalCerveja, TotalRefri, TotalFrango;

homens = {carne : 500, frango : 200, linguica : 200, refri : 300, cerveja : 800};
mulheres = {carne : 300, frango : 200, linguica : 200, refri : 400, cerveja : 500};
criancas = {carne : 200, frango:  100, linguica : 200, refri : 200, cerveja : 0};

function calculo() {
    qtdhomens = document.getElementById("qtdhomens").value;
    qtdmulheres = document.getElementById("qtdmulheres").value;
    qtdcriancas = document.getElementById("qtdcriancas").value;   
                
    TotalCarne = ((qtdhomens * homens.carne) + (qtdmulheres * mulheres.carne) + (qtdcriancas * criancas.carne)) / 1000;
    TotalFrango = ((qtdhomens * homens.frango) + (qtdmulheres * mulheres.frango) + (qtdcriancas * criancas.frango)) / 1000;
    TotalLinguica = ((qtdhomens * homens.linguica) + (qtdmulheres * mulheres.linguica) + (qtdcriancas * criancas.linguica)) / 1000;
    TotalRefri = ((qtdhomens * homens.refri) + (qtdmulheres * mulheres.refri) + (qtdcriancas * criancas.refri)) / 1000;
    TotalCerveja = ((qtdhomens * homens.cerveja) + (qtdmulheres * mulheres.cerveja) + (qtdcriancas * criancas.cerveja)) / 1000;
             
    document.getElementById('carne').innerHTML = TotalCarne + " Kg de Carne"
    document.getElementById('frango').innerHTML = TotalFrango  + " Kg de Frango"
    document.getElementById('linguica').innerHTML = TotalLinguica  + " Kg de Linguiça"
    document.getElementById('refri').innerHTML = TotalRefri  + " Litros de Refrigerante"
    document.getElementById('cerveja').innerHTML = TotalCerveja + " Litros de Cerveja"
}