// 3. Função de validação do formulário
function validarFormulario(event) {
    // Impede o envio do formulário para validar primeiro
    event.preventDefault();

    // Pegando os valores dos campos A e B
    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    // 4. Verificando se o número B é maior que o número A
    if (campoB > campoA) {
        // Mensagem quando a validação é bem-sucedida
        document.getElementById("mensagem").textContent = "Formulário válido! O número B é maior que o número A.";
        document.getElementById("mensagem").style.color = "green";
    } else {
        // Mensagem quando a validação falha
        document.getElementById("mensagem").textContent = "Formulário inválido! O número B precisa ser maior que o número A.";
        document.getElementById("mensagem").style.color = "red";
    }
}