function atualizarDataHora() {
    const agora = new Date();
    const completo = agora.toLocaleString('pt-BR');
    document.getElementById('dataHora').textContent = completo;
}

// Chama imediatamente ao carregar
atualizarDataHora();

// Atualiza a cada 1 segundo (1000 ms)
setInterval(atualizarDataHora, 1000);