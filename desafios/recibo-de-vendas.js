

let reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;';

let produtos = reciboDeVenda.split(';');

let vendas = {};

produtos
  .filter(item => item.includes('valor')) // true
  .forEach(item => {

    let produto = item.split('/')[0]

    let letraProduto = produto.charAt(0).toUpperCase();
    let nomeProd = produto.slice(1);

    console.log('nomeprod',nomeProd)

    let valor = parseFloat(item.split('valor')[1].split('=')[0]);

    let cupom = item.split('=');
    let cupomFormatado = cupom[1] == undefined ? "não preenchido" : cupom[1].charAt(5) + "%";
    
    if (vendas[produto]) {
      vendas[produto].quantidade++;
    //   console.log(vendas[produto])
    } else {
      vendas[produto] = {
        produto: letraProduto + nomeProd,
        valor: valor,
        cupom: cupomFormatado,
        quantidade: 1
      };
    }
  });

let resultadoFinal = Object.values(vendas); //  retorna um array com os valores das propriedades de um objeto
console.log(resultadoFinal);

  