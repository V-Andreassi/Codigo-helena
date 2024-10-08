const url = "https://go-wash-api.onrender.com/api/auth/address"
async function cadastroEndereco(){
    let title = document.getElementById('').value;
    let cep = document.getElementById('').value;
    let address = document.getElementById('').value;
    let number = document.getElementById('').value;
    let complement = document.getElementById('').value;

    if(title == ""){
        alert('Por favor, preencha o campo title')
        return
    }
    if(cep == ""){
        alert('Por favor, preencha o campo cep')
        return
    }
    if(address == ""){
        alert('Por favor, preencha o campo address')
        return
    }   
    if(number == ""){
        alert('Por favor, preencha o campo number')
        return
    }
    if(cep == ""){
        alert('Por favor, preencha o campo number')
        return
    }

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
            'Content-Type': application/json
        }
    })
    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        return
    }




}