//linkando o arquivo index.css
import './index.css';
document.querySelectorAll(".coracao").forEach((coracao) => {
  coracao.addEventListener("click", () => {
    coracao.classList.toggle("vermelho");
  });
});