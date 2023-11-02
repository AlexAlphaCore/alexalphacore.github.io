function copyToClipboard() {
    var inputField = document.getElementById('display');
    inputField.select();

    try {
        document.execCommand('copy');
        alert('Resultado copiado al portapapeles: ' + inputField.value);
    } catch (err) {
        console.error('No se pudo copiar al portapapeles: ', err);
        alert('No se pudo copiar al portapapeles. Puede que tu navegador no sea compatible.');
    }
}

document.body.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculate(); // Si se presiona la tecla "Enter", calcula el resultado
    } else if (event.key === 'c' || event.key === 'C') {
        clearDisplay(); // Si se presiona la tecla "C" o "c", borra la pantalla
    } else if (event.key === 'Escape') {
        clearDisplay(); // Si se presiona la tecla "Escape", borra la pantalla
    }  else if (event.key === 'Backspace') {
        // Si se presiona "Backspace", elimina el último carácter de la pantalla
        var display = document.getElementById('display');
        display.value = display.value.slice(0, -1);  
    } else if (/[0-9\+\-\*\/]/.test(event.key)) {
        addToDisplay(event.key); // Si se presiona un número o un operador, agrégalo a la pantalla
    }
});

// Agregar eventos táctiles para los botones
var buttons = document.querySelectorAll('.calculator button');
buttons.forEach(function (button) {
    button.addEventListener('touchstart', function () {
        // Lógica para manejar el evento táctil
        var buttonValue = this.textContent;
        if (/[0-9\+\-\*\/]/.test(buttonValue)) {
            addToDisplay(buttonValue);
        } else if (buttonValue === '=') {
            calculate();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else if (buttonValue === 'Copiar') {
            copyToClipboard();
        }
    });
});
