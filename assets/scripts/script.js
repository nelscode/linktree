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
const body = document.body; 

if(localStorage.getItem("tema") === "escuro"){
    body.setAttribute("data-tema", "escuro");
}

botaoTema.addEventListener('click', () => {
    if(body.getAttribute("data-tema") === "escuro"){
        body.removeAttribute("data-tema");
        localStorage.setItem("tema", "claro");
        botaoTema.innerHTML = '<i class="fa-solid fa-sun"></i>'
    } else {
        body.setAttribute("data-tema", "escuro");
        localStorage.setItem("tema", "escuro");
        botaoTema.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
});