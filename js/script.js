fetch('./data/produtos.json')
  .then(res => res.json())
  .then(produtos => {
    const container = document.getElementById('produtos');

    produtos.forEach(produto => {
      container.innerHTML += `
        <div class="card">
          
          <img 
            src="${produto.imagem}" 
            alt="${produto.titulo}" 
            class="card__image"
          >

          <div class="card__content">
            <h3 class="card__title">${produto.titulo}</h3>
            <p class="card__description">${produto.descricao}</p>

            <div class="card__price">
              <span class="price__old">${produto.precoAntigo}</span>
              <span class="price__current">${produto.precoAtual}</span>
            </div>

            <a href="${produto.link}" 
               target="_blank" 
               class="card__button">
               Ver na Shopee
            </a>
          </div>
        </div>
      `;
    });
  });
