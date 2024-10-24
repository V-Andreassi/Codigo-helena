const url = "https://go-wash-api.onrender.com/api/auth/address"
async function cadastroEndereco(){
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('endereco').value;
    let number = document.getElementById('numero').value;
    let complement = document.getElementById('complemento').value;

    if(!title){
        alert('Por favor, preencha o campo title')
        return
    }
    if(!cep){
        alert('Por favor, preencha o campo cep')
        return
    }
    if(!address){
        alert('Por favor, preencha o campo address')
        return
    }   
    if(!number){
        alert('Por favor, preencha o campo number')
        return
    }
    if(!cep){
        alert('Por favor, preencha o campo number')
        return
    }
     let token = JSON.parse(localStorage.getItem("user"));
   let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify(
            {
                "title": title,
                "cep": cep,
                "address": address,
                "number": number,
                "complement": complement 
            }
        ),
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+token.access_token
        }
    })
    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        alert("Cadastro realizado com sucesso!")
        location.href = "../index/home_cadastroender.html"
        return
    }




}