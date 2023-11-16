function calcularIdade() {
    // Defina o ano atual como 2023
    const anoAtual = 2023;

    // Obtenha os valores do usuário
    const nomeUsuario = document.getElementById("nome").value;
    const anoNascimento = document.getElementById("anoNascimento").value;

    // Calcule a idade do usuário
    const idade = anoAtual - anoNascimento;

    // Verifique a faixa de idade
    let mensagemIdade = "";
    if (idade < 0) {
        mensagemIdade = "Por favor, digite um ano de nascimento válido.";
    } else if (idade > 150) {
        mensagemIdade = "Uau, você é muito experiente! Verifique se o ano de nascimento está correto.";
    } else {
        mensagemIdade = `Você nasceu em ${anoNascimento}, tem ${idade} anos em ${anoAtual}.`;
    }

    // Exiba o resultado na tela
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = `Olá, ${nomeUsuario}. ${mensagemIdade}`;
}


