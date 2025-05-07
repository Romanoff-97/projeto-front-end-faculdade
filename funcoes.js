/**
 * Carrega o conteúdo da página especificada na div com o id "conteudo"
 * @param {string} pagina - URL da página a ser carregada
 */
export function carregarConteudo(pagina) {
  fetch(pagina)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("conteudo").innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar conteúdo:", error));
}

/**
 * Envia uma mensagem de contato construindo um link mailto e abrindo-o
 * no aplicativo de email padrão do usuário. Extrai o nome, email e
 * conteúdo da mensagem dos elementos DOM com ids "name", "email" e
 * "message". Exibe um alerta para confirmar o envio da mensagem.
 */
export function enviarMensagem() {
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("message").value;

  const mailtoLink = `mailto:nscidreira@hotmail.com?subject=Contato%20de%20${nome}&body=Nome:%20${nome}%0AEmail:%20${email}%0AMensagem:%20${mensagem}`;
  alert(`Ola ${nome}, obrigado por entrar em contato!`);

  setTimeout(() => {
    window.location.href = mailtoLink;
  }, 300);
}
