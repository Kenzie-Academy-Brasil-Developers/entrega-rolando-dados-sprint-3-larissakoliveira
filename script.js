
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let dado1 = getRandomIntInclusive(1, 6);
let dado2 = getRandomIntInclusive(1, 6);

function soma(dado1, dado2){
   return dado1 + dado2
}
// Por exemplo, se a variável rollOfDice contiver a rolagem atual, você pode incrementar a contagem com um código assim:

// count[rollOfDice] = count[rollOfDice] + 1;

function contando() {   
count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for (let i=0; i<1000; i++) {
        let rodada = soma((getRandomIntInclusive(1, 6)), (getRandomIntInclusive(1, 6)))
        if (rodada === 2) {
            count[0]++
        }if (rodada === 3) {
            count[1]++
        }if (rodada === 4) {
            count[2]++
        }if (rodada === 5) {
            count[3]++
        }if (rodada === 6) {
            count[4]++
        }if (rodada === 7) {
            count[5]++
        }if (rodada === 8) {
            count[6]++
        }if (rodada === 9) {
            count[7]++
        }if (rodada === 10) {
            count[8]++
        }if (rodada === 11) {
            count[9]++
        }if (rodada === 12) {
            count[10]++
        }
    }
    showResults(count) 
    return count
}

console.log(contando())


// Depois que as 1000 rolagens terminarem, mostre o resultado delas em uma página HTML.


function showResults(resultado) {
    let show = document.getElementsByTagName('body')[0];
    for (let i = 0; i < resultado.length; i++) {
        let divnova = document.createElement('div');
        divnova.innerHTML = i+2 + ': '+ resultado[i];
        show.appendChild(divnova);
    }
    
}


//barra gráfica (usando um DIV para cada barra, e variando as dimensões proporcionalmente aos resultados).

for(let i = 0; i < count.length; i++) {
    let show = document.getElementsByTagName('body')[0];
    let barra = document.createElement('div');
    barra.classList.add('grafico')
    barra.style.width = count[i] + 'px';
    barra.style.border = '2px solid white';
    barra.style.height = '20px';
    barra.style.boxSizing = 'border-box';
    show.appendChild(barra);
}

// let show = document.getElementsByTagName('body')[0];
// let botao = document.createElement('button')
// botao.innerText = 'Clique para rodar'
// botao.style.width = '120px';
// botao.style.height = '70px'
// show.appendChild(botao)

// botao.addEventListener('click', contando)
// criar reset para apagar outros resutlados anteriores
//VOU FAZER DEPOIS ESSA PARTE DO BOTAO QUE PENSEI DE FAZER 