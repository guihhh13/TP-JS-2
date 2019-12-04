function iniciaModal(NewTaskId){
    const modal = document.getElementById(NewTaskId);
    modal.classList.add('mostrar');
    };

function fechaModal(modalId){
    const modal = document.getElementById(NewTaskId);
    modal.classList.remove('mostrar');
};

const copag = document.querySelector('.copag');
    copag.addEventListener('click', function(){
        document.getElementById('NewTask-p').style.display='block';
        iniciaModal('NewTask-p');
});

function addDiv(){
    
    const nome = document.querySelector('.nome').value;
    const descricao = document.querySelector('.descricao').value;
    const div = document.createElement('div');
    const divp = document.createElement('div');
    const divh6 = document.createElement('div');
    div.setAttribute('class', 'todos');
    divp.setAttribute('class', 'todos-nome');
    divh6.setAttribute('class', 'todos-descricao');
    const p = document.createElement('p');
    const h6 = document.createElement('h6');
    p.setAttribute('class', 'todos-p');
    h6.setAttribute('class', 'todos-h6');
    p.innerText = nome;
    h6.innerText = descricao;
    divp.appendChild(p);
    divh6.appendChild(h6);
    div.appendChild(divp);
    div.appendChild(divh6);
    document.querySelector('.toDo').appendChild(div);
    document.getElementById('NewTask-p').style.display='none';

}