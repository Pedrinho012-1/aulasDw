const form = document.getElementById('formTarefa');
const input = document.getElementById('InputTarefa');
const lista = document.getElementById('listaTarefa');

form.addEventListener('submit' , function(event) {
    event.preventDefault();

    const textoTarefa = input.value.trim();

    if(textoTarefa !=''){
      const li = document.createElement('li')
      li.textContent = textoTarefa;

      const botaoRemover = document.createElement('buttom');
      botaoRemover.textContent = 'x';
      botaoRemover.classList.add('remover');

      botaoRemover.addEventListener('click', function() {
         lista.removechild(li)});

      li.appendchild(botaoremover);

      lista.appenchild(li);

      input.value = '';
    }
);   
      
      

