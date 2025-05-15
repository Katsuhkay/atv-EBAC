$(document).ready(function() {
    // MÁSCARAS - Correção da sintaxe
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '12345-678'
    });

    // Configuração da validação do formulário
    $('form').validate({
        errorElement: 'span',
        errorClass: 'error-message',
        errorPlacement: function(error, element) {
            error.addClass('error-message');
            error.insertAfter(element);
        },
        highlight: function(element) {
            $(element).addClass('error');
        },
        unhighlight: function(element) {
            $(element).removeClass('error');
        },
        
        rules: {
            nome: {
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true,
                minlength: 10
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        
        messages: {
            nome: {
                required: "Por favor, insira seu nome.",
                minlength: "Seu nome deve ter pelo menos 6 caracteres."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                required: "Por favor, insira seu telefone.",
                minlength: "Telefone incompleto."
            },
            cpf: {
                required: "Por favor, insira seu CPF.",
                minlength: "CPF incompleto."
            },
            endereco: {
                required: "Por favor, insira seu endereço.",
                minlength: "Endereço muito curto."
            },
            cep: {
                required: "Por favor, insira seu CEP.",
                minlength: "CEP incompleto."
            }
        },
        
        submitHandler: function(form) {
            alert("Formulário enviado com sucesso!");
            form.reset();
        }
    });
});