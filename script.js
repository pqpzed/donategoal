// Função para atualizar o progresso
function updateProgress(progress, total) {
    const progressBar = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    let coroa = document.querySelector('.coroa'); // Seleciona a coroa existente

    // Se a coroa não existir, cria uma
    if (!coroa) {
        coroa = document.createElement('div');
        coroa.classList.add('coroa');
        document.querySelector('.progress-bar').appendChild(coroa);
    }

    // Garante que o progresso não ultrapasse a meta
    if (progress > total) {
        progress = total; // Limita o valor ao máximo
    }

    // Atualiza a largura da barra de progresso
    const progressWidth = (progress / total) * 100;
    progressBar.style.width = `${progressWidth}%`;

    // Atualiza o texto do progresso
    progressText.textContent = `R$ ${progress}`;

    // Move a coroa para acompanhar o progresso
    coroa.style.left = `${progressWidth}%`;
}

// Exemplo de uso
const totalMeta = 400; // Meta total
let progressoAtual = 0; // Progresso inicial

// Simula o aumento do progresso
const interval = setInterval(() => {
    progressoAtual += 50; // Incrementa o progresso
    if (progressoAtual >= totalMeta) {
        clearInterval(interval); // Para o intervalo quando a meta for atingida
    }
    updateProgress(progressoAtual, totalMeta); // Atualiza a barra e a coroa
}, 500); // Atualiza a cada 500ms