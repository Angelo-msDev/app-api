async function carregarAliens() {
    try {
        const url = 'https://ben10-api.herokuapp.com/random'; // URL da Vercel
        const resposta = await fetch(url);
        
        if (!resposta.ok) throw new Error("Erro ao carregar a API");

        const dados = await resposta.json();
        console.log("Dados recebidos:", dados);
        
        // Se chegar aqui, o console vai brilhar com os aliens!
    } catch (erro) {
        console.error("Ops, algo deu errado:", erro);
    }
}

carregarAliens();