const form = document.getElementById('form-troca-pontos');
const valueA = document.getElementById('valueA');
const valueB = document.getElementById('valueB');
let formValid = false;


function validaForm(valueA, valueB){
    return valueA < valueB;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const successMessage = `Montante de acordo com a regra de negocio. Pontos trocados com sucesso`;

    formValid = validaForm(parseInt(valueA.value), parseInt(valueB.value));
    if(formValid){
        const containerMessageSuccess = document.querySelector('.success-message');
        containerMessageSuccess.innerHTML = successMessage;
        containerMessageSuccess.style.display = 'block';

        valueA.value = '';
        valueB.value = '';
    } else{
        valueB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    }
})

//key up para pegar o input em tempo real
valueB.addEventListener('keyup', function(e){
    formValid = validaForm(parseInt(valueA.value), parseInt(e.target.value));

    if(!formValid){
        valueB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';

    } else {
        valueB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';

    }
});