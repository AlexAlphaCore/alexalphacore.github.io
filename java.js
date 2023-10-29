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
