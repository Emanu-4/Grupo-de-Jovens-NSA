//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//cadastro

// Função de validação de senhas ao submeter o formulário
function validarSenhas() {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const validacaoMensagem = document.getElementById('validacaoMensagem');

    // Se as senhas não coincidirem, exibe a mensagem de erro e impede o envio do formulário
    if (senha !== confirmarSenha) {
        validacaoMensagem.style.display = 'block';  // Exibe a mensagem de erro
        return false;  // Impede o envio do formulário
    }

    validacaoMensagem.style.display = 'none';  // Esconde a mensagem de erro
    alert('Cadastro realizado com sucesso!');  // Exibe a mensagem de sucesso
    return true;  // Permite o envio do formulário
}

// Validação em tempo real para o campo de confirmação de senha
document.getElementById('confirmarSenha').addEventListener('input', function() {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const validacaoMensagem = document.getElementById('validacaoMensagem');

    // Se as senhas não coincidirem, exibe a mensagem de erro
    if (senha !== confirmarSenha) {
        validacaoMensagem.style.display = 'block';  // Exibe a mensagem de erro
    } else {
        validacaoMensagem.style.display = 'none';  // Esconde a mensagem de erro
    }
});

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


