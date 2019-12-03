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
        iniciaModal('NewTask-p');
});

const f = document.getElementById('.my-form');
f.addEventListener('submit', function(){
    let name = document.querySelector('input[name="nome"]').value;
    let dc = document.querySelector('input[name="Descricao"]').value;
    d = document.createElement('div');
    d.appendChild(document.createTextNode(name));
    d.appendChild(document.createTextNode(dc));
    document.getElementById('.toDo-e').appendChild(d);
})