/* Configurações dinâmicas (interações no site) */

document.addEventListener("DOMContentLoaded", () => {
    
    // Elementos
    const htmlElement = document.documentElement;
    const btnTema = document.getElementById("btnTema");
    const imgTema = document.getElementById("imgTema");
    const logoTema = document.getElementById("logoTema");
    
    const statusSistema = document.getElementById("statusSistema");
    const valorDeriva = document.getElementById("valorDeriva");
    const statusDetrito = document.getElementById("statusDetrito");
    const valorCombustivel = document.getElementById("valorCombustivel");
    
    // Botões
    const btnRecalibrar = document.getElementById("btnRecalibrar");
    const btnDesviar = document.getElementById("btnDesviar");
    
    // Formulário
    const formFinanciador = document.getElementById("formulario-colaborador");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    // Alteração do tema (Claro/Escuro)
    btnTema.addEventListener("click", () => {
        const temaAtual = htmlElement.getAttribute("data-tema");
        if (temaAtual === "escuro") {
            htmlElement.removeAttribute("data-tema");
            imgTema.src = "assets/astronautaTemaClaro.png";
            imgTema.alt = "Alternar Tema";
            logoTema.src = "assets/logoTemaClaro.png"; // Caminho corrigido (.png simples)
        } else {
            htmlElement.setAttribute("data-tema", "escuro");
            imgTema.src = "assets/astronautaTemaEscuro.png";
            imgTema.alt = "Tema Claro";
            logoTema.src = "assets/logoTemaEscuro.png"; // Variável corrigida para logoTema
        }
    });

    // Simulação ao clicar em Recalibrar
    btnRecalibrar.addEventListener("click", () => {
        // Altera texto
        valorDeriva.textContent = "0.000 arcsec";
        valorDeriva.classList.remove("alert-color");
        valorDeriva.classList.add("status-ok");
        
        statusSistema.textContent = "Calibrado";
        statusSistema.className = "metrica-valor status-ok";
        
        // Desabilita temporariamente o botão para indicar processamento concluído
        btnRecalibrar.textContent = "Navegação Alinhada";
        btnRecalibrar.style.opacity = "0.6";
        btnRecalibrar.style.cursor = "not-allowed";
        
        // Simula uma reativação automática após 6 segundos
        setTimeout(() => {
            valorDeriva.textContent = "0.114 arcsec";
            valorDeriva.classList.remove("status-ok");
            statusSistema.textContent = "Operacional";
            statusSistema.className = "metrica-valor";
            btnRecalibrar.textContent = "Recalibrar Deriva";
            btnRecalibrar.style.opacity = "1";
            btnRecalibrar.style.cursor = "pointer";
        }, 6000);
    });

    // Simulação ao clicar em Desviar
    btnDesviar.addEventListener("click", () => {
        statusDetrito.textContent = "Evitando objeto!";
        statusDetrito.classList.add("alert-color");
        statusSistema.textContent = "Ajustando Vetor";
        statusSistema.className = "metrica-valor status-alerta";
        
        valorCombustivel.textContent = "93.4%";
        
        btnDesviar.style.opacity = "0.6";
        btnDesviar.disabled = true;

        // Finaliza manobra de desvio após 3 segundos
        setTimeout(() => {
            statusDetrito.textContent = "Área limpa (Desviado)";
            statusDetrito.classList.remove("alert-color");
            statusDetrito.classList.add("status-ok");
            statusSistema.textContent = "Operacional";
            statusSistema.className = "metrica-valor status-ok";
            
            // Retorna ao estado normal
            setTimeout(() => {
                statusDetrito.textContent = "Nenhum detectado";
                statusDetrito.classList.remove("status-ok");
                btnDesviar.style.opacity = "1";
                btnDesviar.disabled = false;
            }, 3000);
            
        }, 3000);
    });

    // Envio formulário
    formFinanciador.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Oculta o formulário para exibir resposta de envio
        formFinanciador.classList.add("oculto");
        mensagemSucesso.classList.remove("oculto");
    });

});