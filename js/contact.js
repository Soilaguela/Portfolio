const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const response = await fetch('https://seu-backend.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
        } else {
            alert('Erro ao enviar a mensagem.');
        }
    } catch (error) {
        alert('Erro ao enviar a mensagem.');
        console.error(error);
    }
});
