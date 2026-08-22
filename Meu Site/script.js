
        // Pega os elementos
        const modal = document.getElementById('meuModal');
        const sobre = document.getElementById('sobre');
        const fechar = document.getElementById('fecharModal');
        const modalContato = document.getElementById('modalContato');
        const contato = document.getElementById('contato');
        const fecharContato = document.getElementById('fecharContato');
        const enviarContato = document.getElementById('enviarContato');

        // Abre o modal ao clicar em "Sobre"
        sobre.onclick = function () {
            modal.style.display = 'block';
        };

        // Fecha ao clicar no X do modal "Sobre"
        fechar.onclick = function () {
            modal.style.display = 'none';
        };

        // Abre o modal de contato ao clicar em "Contato"
        contato.onclick = function () {
            modalContato.style.display = 'block';
        };

        // Fecha ao clicar no X do modal de contato
        fecharContato.onclick = function () {
            modalContato.style.display = 'none';
        };

        // Envia a mensagem e fecha o modal de contato
        enviarContato.onclick = function () {
            const mensagem = document.getElementById('menssagem').value;

            if (mensagem.trim() === '') {
                alert('Digite uma mensagem antes de enviar.');
                return;
            }

            alert('Mensagem enviada com sucesso!');
            modalContato.style.display = 'none';
            document.getElementById('menssagem').value = '';
        };

        // Fecha os modais ao clicar fora deles
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
            if (event.target == modalContato) {
                modalContato.style.display = 'none';
            }
        };
   