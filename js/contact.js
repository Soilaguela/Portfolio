document.getElementById("contact-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
      try {
          const response = await fetch("http://localhost:5000/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ name, email, message }),
          });

          if (response.ok) {
              document.getElementById("form-status").textContent = "Mensagem enviada com sucesso!";
              document.getElementById("form-status").style.color = "green";
              this.reset(); // Limpa o formulário
          } else {
              document.getElementById("form-status").textContent = "Erro ao enviar a mensagem. Tente novamente.";
              document.getElementById("form-status").style.color = "red";
          }
      } catch (error) {
          document.getElementById("form-status").textContent = "Erro ao conectar ao servidor.";
          document.getElementById("form-status").style.color = "red";
      }
  } else {
      document.getElementById("form-status").textContent = "Por favor, preencha todos os campos.";
      document.getElementById("form-status").style.color = "red";
  }
});
