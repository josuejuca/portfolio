(function($){
    'use strict';

    var form = $('#contact-form');
    var formMessages = $('#form-messages');

    form.on('submit', function(event) {
      event.preventDefault();

      // Pega os valores dos campos usando os MESMOS IDs do HTML
      const nameValue    = $('#contact-name').val();
      const phoneValue   = $('#contact-phone').val();
      const emailValue   = $('#contact-email').val();
      const subjectValue = $('#subject').val();
      const messageValue = $('#contact-message').val();

      // Montamos os dados no formato que o Google Forms espera
      const formData = new URLSearchParams();
      formData.append('entry.1633660355', nameValue);    // Nome
      formData.append('entry.1242108021', subjectValue); // Assunto
      formData.append('entry.1222514989', phoneValue);   // Telefone
      formData.append('entry.1265067644', emailValue);   // E-mail
      formData.append('entry.1136127016', messageValue); // Mensagem

      // Envio via fetch com no-cors
      fetch('https://docs.google.com/forms/d/e/1FAIpQLSd7NGNnXEiGACisGa4nRFDcuhneWefTevXiX-FcMZKZ1xnrHQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      })
      .then(() => {
        // O envio foi realizado (sem feedback de status).
        $(formMessages)
          .removeClass('error')
          .addClass('success')
          .text('Formulário enviado com sucesso!');

        // Limpa os campos
        $('#contact-name, #contact-phone, #contact-email, #subject, #contact-message').val('');
      })
      .catch((error) => {
        // Se houver falha (ex. falta de rede, etc.)
        $(formMessages)
          .removeClass('success')
          .addClass('error')
          .text('Erro ao enviar o formulário. Tente novamente.');
      });
    });
})(jQuery);
