// Enviar mensagem simulada no formulário
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Em breve entrarei em contacto.");
  this.reset();
});
