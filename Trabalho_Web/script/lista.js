async function listarendereco() { 
  const url = 'https://go-wash-api.onrender.com/api/auth/address';
  
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token,
      }
    });

    if (response.ok) {
      let data = await response.json();
      console.log("Dados recebidos:", data);

      const listaEnderecos = document.getElementById('lista-enderecos');
      if (!listaEnderecos) {
        console.error("Elemento com ID 'lista-enderecos' não encontrado no HTML.");
        return;
      }

      listaEnderecos.innerHTML = ''; 

      if (data.data && data.data.length > 0) {
        data.data.forEach(endereco => {
          const title = endereco.title || '';
          const cep = endereco.cep || '';
          const address = endereco.endereco || '';
          const numero = endereco.numero ? `Número: ${endereco.numero}` : ''; 
          const complemento = endereco.complemento ? ` - Complemento: ${endereco.complemento}` : ''; 

          let listItem = document.createElement('li');
          listItem.textContent = `${title}, CEP: ${cep}, Endereço: ${address}${numero ? `, ${numero}` : ''}${complemento}`;
          
          listaEnderecos.appendChild(listItem);
        });
      } else {
        listaEnderecos.textContent = "Nenhum endereço cadastrado.";
      }

    } else {
      console.error("Erro na resposta da API:", await response.text());
      alert("Erro ao listar endereços");
    }
  } catch (error) {
    console.error("Erro ao executar a solicitação:", error);
    alert("Erro ao listar endereços");
  }
}
