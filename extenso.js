/*
Artur Alves Pinto.
Script para realizar práticas com JS, html, json, node.
Objetivo deste script é retorna por extenso o número solicitado pelo usuário.
*/

module.exports = {extenso};

function extenso(numeroPassado){

    var numero = parseInt(numeroPassado);

unidNome = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'],
dez1Nome = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'desessete', 'dezoito', 'dezenove'],
dez2Nome = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'],
centNome = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhetos', 'seicentos', 'setecentos', 'oitocentos', 'novecentos'],
milNome = "mil";

/*-------------------------------------------------------------------------------------------------------------------*/
//Range - Verifica se o númeor está no range esperado.
if (-999999 <= numero && numero <= 999999){

    // É zero, senão continua.
    if(numero === 0 || numero === -0){ // === extritamente igual compara valor e tipo
        var resposta = "\nZero\n";}

    else{
        // variaveis para escreita
        var extenso = numero.toString(),
        array = extenso.split(''),
        resposta = [];

        //É negativo
        if(array[0] == "-"){ 
            resposta.push('Menos');
            array.shift(); // shift tira o primeir elemento do array, neste caso o menos. // unshift acrescenta valor no inicio do array
        }

        verificaTamanhoNum(array);
   
        /*---------------------------------------------------------------------------------------------------------*/
        //Fnções
        
        //verificaTamanhoNum

        function verificaTamanhoNum(vetorNum){

        var numeroDigito = vetorNum.length;
        (numeroDigito === 3)?centena(vetorNum):
        (numeroDigito === 2)?dezena(vetorNum) :
        (numeroDigito ===1)? unidade(vetorNum): milhar(vetorNum); //if/else usando foo(condição) ? foo(se sim) : foo(senao); Ex://var cargo = salario <= 1000 ? 'junior' : salario <= 5000 ? 'senior' : 'diretor';
        //não tem return
        }

        //Unidades
        function unidade(casa1){ 
            const valorUni = casa1[casa1.length - 1]; // casa das unidades
            valorExtenso = unidNome[valorUni - 1];
            resposta.push(valorExtenso);
            return resposta
        }

        //Dezena
        function dezena(casa2){
            const valorDez = casa2[casa2.length - 2]; //casa das dezenas
            const valorUni = casa2[casa2.length - 1];

            if(valorDez == 1){ // se menor que 20
                switch(valorUni){
                    case "0" : resposta.push("dez"); break;
                    default : valorExtenso = dez1Nome[  (casa2[casa2.length - 1])  ];
                    resposta.push(valorExtenso);
                }
            }
            else{
                switch(valorUni){ // se maior que vinte
                    case "0" : resposta.push(dez2Nome[valorDez-2]); break;
                    default :  valorExtenso = dez2Nome[(valorDez - 2)];
                    resposta.push(valorExtenso);
                    if(casa2[casa2.length - 2] !== 0){resposta.push("e");unidade(casa2);} // lida com a casa unidade
                }
            }
        return resposta;
        }

        //Centena
        function centena(casa3){
            const valorCen = casa3[casa3.length - 3]; //casa das centenas
            const valorDez = casa3[casa3.length - 2];
            const valorUn = casa3[casa3.length - 1];
            if(valorDez == 0 && valorUn == 0){
                switch(valorCen){
                    case "1" : resposta.push("cem"); break;
                    default : resposta.push(centNome[valorCen - 1])}
            }
            else{
                valorExtenso = centNome[(valorCen - 1)];
                resposta.push(valorExtenso);
                switch (valorDez){
                    case "0" : resposta.push("e"); unidade(casa3); break;
                    default : resposta.push("e"); dezena(casa3);
                }
            }
            return resposta
        }

        //Milhar
        function milhar(casa4Sup){
            var i = 0; j=0; naoMilhar=[];
            do{
                var valor = casa4Sup[casa4Sup.length-3+i]; //pega os 3 ultimos digitos no numero milhar
                if(valor == "0" && j===0){naoMilhar;}
                else{naoMilhar.push(valor);j=1;}//valida da esquerda para a diretira, eliminando zeros à esquerda
                i++;
            }while(i < 3);
            i = 0;
            do{ casa4Sup.pop(); //tira os 3 ultimos digitos
                i++;
            }while(i < 3);
            verificaTamanhoNum(casa4Sup);resposta.push("mil")
            //resposta = naoMilhar;
            if(naoMilhar.length === 0 ){resposta}
            else{resposta.push("e"); verificaTamanhoNum(naoMilhar);} // veirifica se é numero redondo (ex: 1000,2000,3000...)
        return resposta
        }
    }

    resposta = ("\n"+resposta.join(" ")+"\n"); // .join junta os elementos do array em uma string usando " ".
    console.log(resposta);
    //$("#respostaNumero").html(respsota); //resposta ajax

}
/*-------------------------------------------------------------------------------------------------------------------*/
else{
    var resposta = "\nO valor informado está fora do intervalo permitido ou não e um número!\nDigite um número entre -999999 e 999999.\n";
    console.log(resposta);
    //alert('O número informado está fora do intervalo permitido! \nDigite um número entre -99999 e 99999. ');
}

return resposta;

}