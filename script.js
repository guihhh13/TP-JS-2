var count1 = 0.0;
var count2 = 0.0;
var count3 = 0.0;
var count4 = 0.0;
var total = count1 + count2 + count3 + count4;
total = Math.floor(total);

function iniciaModal(NewTaskId){
    const modal = document.getElementById(NewTaskId);
    modal.classList.add('mostrar');
    };

const copag = document.querySelector('.copag');
    copag.addEventListener('click', function(){
        document.getElementById('NewTask-p').style.display='block';
        iniciaModal('NewTask-p');
});

function addDiv(num, nome, descricao){
    
    const div = document.createElement('div');
    const divp = document.createElement('div');
    const divh5 = document.createElement('div');
    div.setAttribute('class', 'todos');
    divp.setAttribute('class', 'todos-nome');
    divh5.setAttribute('class', 'todos-descricao');
    const p = document.createElement('p');
    const h5 = document.createElement('h5');
    p.setAttribute('class', 'todos-p');
    h5.setAttribute('class', 'todos-h5');
    p.innerText = nome;
    h5.innerText = descricao;
    divp.appendChild(p);
    divh5.appendChild(h5);
    div.appendChild(divp);
    div.appendChild(divh5);
    div.style.cursor = 'pointer';
    div.onclick = function() { avancar(div); };
    document.querySelectorAll('.todo-list')[num].appendChild(div);
    document.getElementById('NewTask-p').style.display='none';
    if(num === 0) count1 += 1.0;
    else if(num === 1) count2 += 1.0;
    else if(num === 2) count3 += 1.0;
    else if(num === 3) count4 += 1.0;
    if(count1 !== 0){
        aux1 = (count1 / total)*100;
        aux1 = aux1.toString();
        aux1 = aux1 + "%";
        document.querySelector('.barra1').style.width = aux1;
    }
    if(count2 !== 0){
        aux2 = (count2 / total)*100
        aux2 = aux2.toString();
        aux2 = aux2 + "%";
        document.querySelector('.barra2').style.width = aux2;
    }
    if(count3 !== 0){
        aux3 = (count3 / total)*100
        aux3 = aux3.toString();
        aux3 = aux3 + "%";
        document.querySelector('.barra3').style.width = aux3;
    }
    if(count4 !== 0){
        aux4 = (count4 / total)*100
        aux4 = aux4.toString();
        aux4 = aux4 + "%";
        document.querySelector('.barra4').style.width = aux4;
    }


}

document.querySelector('.NewTask-a').addEventListener('keyup', function(event){
    if(event.keyCode === 13 && event.altKey){
        const nome = document.querySelector('.nome').value;
        const descricao = document.querySelector('.descricao').value;
        addDiv(0, nome, descricao);
    }
})

function avancar(todos){

    if(todos.parentElement.parentElement.className === 'toDo'){
        const nome = todos.childNodes[0].childNodes[0].innerText;
        const descricao = todos.childNodes[1].childNodes[0].innerText;
        addDiv(1, nome, descricao);
        todos.remove();
    } else if(todos.parentElement.parentElement.className === 'inPro'){
        const nome = todos.childNodes[0].childNodes[0].innerText;
        const descricao = todos.childNodes[1].childNodes[0].innerText;
        addDiv(2, nome, descricao);
        todos.remove();
    } else if(todos.parentElement.parentElement.className === 'review'){
        const nome = todos.childNodes[0].childNodes[0].innerText;
        const descricao = todos.childNodes[1].childNodes[0].innerText;
        addDiv(3, nome, descricao);
        todos.remove();
    }

}