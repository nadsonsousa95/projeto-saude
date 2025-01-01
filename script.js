
    // Função para calcular o IMC
    function calcularIMC() {
        var peso = document.getElementById('peso').value;
        var altura = document.getElementById('altura').value;

        // Verificar se os campos estão preenchidos
        if (peso === '' || altura === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Calcular o IMC
        var imc = peso / (altura * altura);
        imc = imc.toFixed(2); // Arredonda o IMC para 2 casas decimais

        // Classificação do IMC
        var classificacao = '';

        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            classificacao = 'Obesidade Grau I';
        } else if (imc >= 35 && imc <= 39.9) {
            classificacao = 'Obesidade Grau II';
        } else {
            classificacao = 'Obesidade Grau III';
        }

        // Exibir o resultado
        var resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = 'Seu IMC é: <strong>' + imc + '</strong><br>Classificação: ' + classificacao;
    }
