// Botão de Compartilhar
const btnCompartilhar = document.querySelector('.btnCompartilhar').addEventListener('click', async function() {
    if(navigator.share){
        try{
            await navigator.share({
                title: 'Confira este link', 
                text: 'Achei isso interessante, veja:',
                url: window.location.href
            }); 
            
        } catch(error){
            console.error('Erro ao compartilhar!');
        }
    } else {
        alert('Função não suportada!');
    }
});

// Botão para alternar para modo escuro
const botaoTema = document.querySelector('#modoTema'); 
const imagemPerfil = document.querySelector('.imagemPerfil');
const estrelas = document.querySelectorAll('.imgEstrela');
const body = document.body; 

// Verifica o tema armazenado e aplica
if (localStorage.getItem("tema") === "escuro") {
    body.setAttribute("data-tema", "escuro");
    imagemPerfil.src = 'assets/imgs/logoSoma2.png';
    estrelas.forEach(img => img.src = 'assets/imgs/estrela2.png');
} else {
    imagemPerfil.src = 'assets/imgs/logoSoma1.jpg';
    estrelas.forEach(img => img.src = 'assets/imgs/estrela1.png');
}

// Adiciona evento de clique para alternar entre os temas
botaoTema.addEventListener('click', () => {
    if (body.getAttribute("data-tema") === "escuro") {
        body.removeAttribute("data-tema");
        localStorage.setItem("tema", "claro");
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
        imagemPerfil.src = 'assets/imgs/logoSoma1.jpg';
        estrelas.forEach(img => img.src = 'assets/imgs/estrela1.png');
    } else {
        body.setAttribute("data-tema", "escuro");
        localStorage.setItem("tema", "escuro");
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
        imagemPerfil.src = 'assets/imgs/logoSoma2.png';
        estrelas.forEach(img => img.src = 'assets/imgs/estrela2.png');
    }
});