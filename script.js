let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
let players = document.querySelector("#players");
let ia = document.querySelector("#ai-player");

// contador de jogadas

let player1 = 0;
let player2 = 0;

// adicionando eventos no click 
// Funcionamento do esquema com as funçoes auxiliares abaixo
for(let i = 0; i < boxes.length; i++){
    // alguem clicar na caixa
    boxes[i].addEventListener("click", function(){

        let el = checkEl(player1, player2);

        // verifica se já x ou o
        if(this.childNodes.length == 0){
            
            // reutilizar, pq senao ia ficar reposicionando
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // computar a jogada
            if(player1 == player2){
                player1++;

                if(secondPlayer == 'ai-player') {

                    // funçao executar a jogada
                    computerPlay();
                    player2++;

                }

            }else{
                player2++;
            }
            checkVitoria();
        }
        
});

}

// evento para saber se é 2 players ou ia
for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener("click", function() {

        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none';
        }

        // Funçao para aparecer o jogo de acordo com o button acionado
        setTimeout(function(){
            let containerBoxes = document.querySelector("#container-boxes");
            containerBoxes.classList.remove("hide");
        }, 500);
    });
}


// ve quem vai jogar
function checkEl(player1, player2) {
    if(player1 == player2){
        // x
        el = x;
    }else{
        // o
        el = o;
    }

    return el
}

// ve quem ganhou
function checkVitoria () {

    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontal 
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            // x
            declareWinner('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b1Child == 'o'){
            // o
            declareWinner('o');
        }
    }


    
    // 2 horizontal 
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            // x
            declareWinner('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            // o
            declareWinner('o');
        }
    }

        
    // 3 horizontal 
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            // x
            declareWinner('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            // o
            declareWinner('o');
        }
    }

    // vertical 
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            // x
            declareWinner('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            // o
            declareWinner('o');
        }
    }

    
    // vertical 2
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            // x
            declareWinner('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            // o
            declareWinner('o');
        }
    }

    // vertical 3
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            // x
            declareWinner('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            // o
            declareWinner('o');
        }
    }
    // diagonal 1
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            // x
            declareWinner('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            // o
            declareWinner('o');
        }
    }
    // diagonal 2
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            // x
            declareWinner('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            // o
            declareWinner('o');
        }
    }

    // deu velha 
    let cont = 0;
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            cont++;
        }
    }

    if(cont == 9){
        declareWinner("Deu velha");
    }

}


// limpar o jogo, declara ao vencedor e atualiza o placar

function declareWinner(winner){
    
    let placar = document.querySelector("#placar-inicial");
    let placarO = document.querySelector("#placar-inicial2");
    let msg = '';

    if(winner == 'x'){
        placar.textContent = parseInt(placar.textContent) + 1; 
        msg = "O jogador 1 venceu";
    } else if(winner == 'o'){
        placarO.textContent = parseInt(placarO.textContent) + 1;
        msg = "O jogador 2 venceu";
    }else {
        msg = "Deu Velha";
    }

    // exibe msg 
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // esconde a msg
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000);

    // zera as jogadas
    player1 = 0;
    player2 = 0;

    // remove x e o 
    let removerBoxes = document.querySelectorAll(".box div");

    for(let i = 0; i < removerBoxes.length; i++){
        removerBoxes[i].parentNode.removeChild(removerBoxes[i]);

    }

}

function computerPlay() {

    let cloneO = o.cloneNode(true);
    cont = 0;
    preenchido = 0;

    for(let i = 0; i < boxes.length; i++){

        let randomNumber = Math.floor(Math.random() * 5);

        // só preencher se estiver vazio o filho
        if(boxes[i].childNodes[0] == undefined) {

//             O computador percorre todas as caixas vazias do jogo da velha.
// Para cada caixa vazia, ele gera um número aleatório entre 0 e 4.
// Se o número for 0 ou 1, o computador escolhe essa caixa para preencher com a marcação "O".
// Se o número for maior que 1, ele não faz nada com essa caixa e passa para a próxima.
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                cont++;
                break;
            }
            // checagem de quantas estao preenchidas;
            else{
                preenchido++;
            }
        }
    }
    if(cont == 0 && preenchido < 9){
        computerPlay();
    }
}