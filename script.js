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