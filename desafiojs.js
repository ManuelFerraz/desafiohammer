
window.alert ("Seja Bem vindo ao Churrasco da Hammer !")

var corpo_tabela = document.querySelector("tbody");

function calcular(){
    var v1
    var v2
    var vtotal
   linhatabela();
 }
function linhatabela(){
    var p1 = document.getElementsByName('box2')
    var presenca = "";
    var presenca2 = "";
    var vcom;
    var vbeb;

    if (p1[0].checked){
      v1 = 20 
      presenca = "SIM";
      vcom = 10 
      vbeb = 10

    }
    else if(p1[1].checked){
      v1 = 10
      presenca = "SIM";  
      vcom = 10
      vbeb = 0
    }
    else if(p1[2].checked){
      v1 = 0
      presenca = "NÃO";  
      vcom = 0
      vbeb = 0
    }

    var p2 = document.getElementsByName('box3')
    
    if(p2[0].checked){
        v2 = 40
        presenca2 = "SIM";
        vcom = vcom + 20
        vbeb = vbeb + 20 
        vtotal = v1 + v2
    }
    else if(p2[1].checked){
        v2 = 20
        presenca2 = "SIM";
        vcom = vcom + 20
        vtotal = v1 + v2
    }
    else if(p2[2].checked){
        presenca2 = "NÃO";
        v2 = 0
        vtotal = v1 + v2

    }
    var linha = document.createElement("tr")
    var nome = document.createElement("td")
    var confpre = document.createElement("td")
    var confcon = document.createElement("td")
    var valorcom = document.createElement("td")
    var valorbeb = document.createElement("td")
    var valortotal = document.createElement("td")

    var nome1 = document.getElementById('txt')
    var texto_nome = document.createTextNode(nome1.value);
    nome.appendChild(texto_nome);
    linha.appendChild(nome);
    corpo_tabela.appendChild(linha);

    var confpre1 = document.getElementsByName('box2')
    var texto_confpre = document.createTextNode(presenca)
    confpre.appendChild(texto_confpre);
    linha.appendChild(confpre);
    corpo_tabela.appendChild(linha);

    var confcon1 = document.getElementsByName('box3')
    var texto_confcon = document.createTextNode(presenca2)
    confcon.appendChild(texto_confcon);
    linha.appendChild(confcon);
    corpo_tabela.appendChild(linha);

    var valorcom1 = document.getElementsByName('box2')
    var texto_valorcom = document.createTextNode(vcom)
    valorcom.appendChild(texto_valorcom);
    linha.appendChild(valorcom);
    corpo_tabela.appendChild(linha);

    var valorbeb1 = document.getElementsByName('box3')
    var texto_valorbeb = document.createTextNode(vbeb)
    valorbeb.appendChild(texto_valorbeb);
    linha.appendChild(valorbeb);
    corpo_tabela.appendChild(linha);

    var valortotal1 = document.getElementsByName('box3')
    var texto_valortotal = document.createTextNode(vtotal)
    valortotal.appendChild(texto_valortotal);
    linha.appendChild(valortotal);
    corpo_tabela.appendChild(linha);
}