const button = document.getElementById('clickButton');
const counter = document.getElementById('counter');

let count = 0;

button.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});


        // Adiciona evento quando o botão é pressionado
        button.addEventListener('mousedown', function() {
            button.classList.add('pressionado');
        });

        // Adiciona evento quando o botão é liberado
        button.addEventListener('mouseup', function() {
            button.classList.remove('pressionado');
        });