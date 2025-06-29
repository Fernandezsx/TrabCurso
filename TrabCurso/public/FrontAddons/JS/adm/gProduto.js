export async function loadProducts() {
    try {
        const response = await fetch('/api/prods');
        if (!response.ok) throw new Error('Erro na requisição');

        const data = await response.json();
        renderProducts(data);
    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        alert("Erro ao carregar produtos do servidor");
    }
}

function renderProducts(products) {
    const container = document.getElementById("produtos-container");
    if (!container) {
        console.error("Container de produtos não encontrado!");
        return;
    }

    container.innerHTML = "";

    if (!products || products.length === 0) {
        container.innerHTML = "<p>Nenhum produto disponível no momento.</p>";
        return;
    }

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "produto";
        productElement.innerHTML = `
            <img src="${product.imgProd || 'https://via.placeholder.com/100'}" alt="${product.nomeProd}">
            <h3>${product.nomeProd}</h3>
            <p>R$ ${(product.preco || 0).toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${product.idprod})">Adicionar</button>
        `;
        container.appendChild(productElement);
    });
}

// Função global para o evento onclick
window.adicionarAoCarrinho = function(id) {
    console.log("Produto adicionado ao carrinho:", id);
    // Adicione aqui a lógica para adicionar ao carrinho
};