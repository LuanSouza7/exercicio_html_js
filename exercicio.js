const form = document.getElementById('form-confirm');

let formValid = false;

function numberValid (ValA, ValB){
    return ValB > ValA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let ValA = parseFloat(document.getElementById('valor-a').value);
    let ValB = parseFloat(document.getElementById('valor-b').value);

    const messagesucess = 'Formulario Valido! <b>O valor do Formulario B é maior que o Formulario A</b>';
    const containermessagesucess = document.querySelector('.msg-valida');

    formValid = numberValid(ValA, ValB);

    if (formValid){
        document.querySelector('.msg-invalida').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.msg-invalida').style.display = 'none';

        ValA.value = '';
        ValB.value = '';
    } else {
        document.querySelector('.msg-invalida').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }
})