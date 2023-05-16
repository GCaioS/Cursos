let player, vencedor = null;
let select_player = document.getElementById('jogador-vez');
let winSelect = document.getElementById('vencedor')
changeplayer('X')

function escolha(id){

    if(vencedor !== null){
        return;
    }

    let block = document.getElementById(id);
    

    if(block.innerHTML !== '-'){
        return;
    }

    block.innerHTML = player;
    block.style.color = 'black'
    
    if(player === 'X'){
        player = 'O';
    }else{
        player = 'X';
    }

    changeplayer(player);
    Wincheck();
}

function changeplayer(value){
    player = value;
    select_player.innerHTML = player;
}

function Wincheck(){
    let block1 = document.getElementById(1);
    let block2 = document.getElementById(2);
    let block3 = document.getElementById(3);
    let block4 = document.getElementById(4);
    let block5 = document.getElementById(5);
    let block6 = document.getElementById(6);
    let block7 = document.getElementById(7);
    let block8 = document.getElementById(8);
    let block9 = document.getElementById(9);




    if(check(block1, block2, block3)){
        alterarCor(block1, block2, block3);
        changeWin(block1);
        return;
    }

    if(check(block4, block5, block6)){
        alterarCor(block4, block5, block6);
        changeWin(block4);
        return;
    }

    if(check(block7, block8, block9)){
        alterarCor(block7, block8, block9);
        changeWin(block7);
        return;
    }
    
    if(check(block1, block4, block7)){
        alterarCor(block1, block4, block7);
        changeWin(block1);
        return;
    }

    if(check(block2, block5, block8)){
        alterarCor(block2, block5, block8);
        changeWin(block2);
        return;
    }

    if(check(block3, block6, block9)){
        alterarCor(block3, block6, block9);
        changeWin(block3);
        return;
    }

    if(check(block1, block5, block9)){
        alterarCor(block1, block5, block9);
        changeWin(block1);
        return;
    }

    if(check(block3, block5, block7)){
        alterarCor(block3, block5, block7);
        changeWin(block3);
        return;
    }
}

function check(block1, block2, block3){
    let win = false;

    if(block1.innerHTML !== '-' && block1.innerHTML === block2.innerHTML && block2.innerHTML === block3.innerHTML){
        win = true;
    }

    return win;
}

function changeWin(block){
    win = block.innerHTML
    select_player.innerHTML = win;
}

function alterarCor(block1, block2, block3){
    block1.style.background = 'green';
    block2.style.background = 'green';
    block3.style.background = 'green';
}
