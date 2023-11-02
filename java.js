function addToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculate() {
            var display = document.getElementById('display').value;
            try {
                document.getElementById('display').value = eval(display);
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }

       

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
        calculate();
    } else if (event.key === 'c' || event.key === 'C' || event.key === 'Escape') {
        clearDisplay();
    } else if (event.key === 'Backspace') {
        // Si se presiona "Backspace", elimina el último carácter de la pantalla
        var display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    } else if (/[0-9\+\-\*\/]/.test(event.key)) {
        addToDisplay(event.key);
    }
});

// Evento táctil para activar el teclado virtual y mostrar el cursor
document.getElementById('display').addEventListener('touchstart', function () {
    this.focus();
    document.getElementById('cursor').style.visibility = 'visible'; // Mostrar el cursor
});

// Evento táctil para desactivar el cursor
document.getElementById('display').addEventListener('blur', function () {
    document.getElementById('cursor').style.visibility = 'hidden'; // Ocultar el cursor
});

// Agregar eventos táctiles para los botones de la calculadora
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
