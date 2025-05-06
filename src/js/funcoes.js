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

export function enviarMensagem() {
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("message").value;

  console.log(nome, email, mensagem);

  const mailtoLink = `mailto:nscidreira@hotmail.com?subject=Contato%20de%20${nome}&body=Nome:%20${nome}%0AEmail:%20${email}%0AMensagem:%20${mensagem}`;

  window.location.href = mailtoLink;

  alert(`Ola ${nome}, obrigado por entrar em contato!
  Sua mensagem foi enviada com sucesso!`);
}
