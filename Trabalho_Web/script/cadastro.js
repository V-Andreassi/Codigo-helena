const url = "https://go-wash-api.onrender.com/api/user"
async function cadastro(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpf_cnpj = document.getElementById('cpf_cnpj').value
    let birthday = document.getElementById('birthday').value
    let terms = document.getElementById('terms').ariaChecked

    if (name === "") {
        alert('Por favor, preencha o campo Nome.');
        
    }

    if (email === "") {
        alert('Por favor, preencha o campo Email.');
        
    }

    if (password === "") {
        alert('Por favor, preencha o campo Senha.');
        
    }

    if (cpf_cnpj === "") {
        alert('Por favor, preencha o campo CPF/CNPJ.');
        
    }

    if (birthday === "") {
        alert('Por favor, preencha o campo Data de Nascimento.');
        
    }
    
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user.acess_token);

   

    

    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
            "name":name,
            "email":email,
            "user_type_id":1,
            "password":password,
            "cpf_cnpj":cpf_cnpj,
            "terms":1,
            "birthday":birthday   
        }),
        headers:{
            'Content-Type':'application/json',
            'Cookie':'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj',    
            'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLWdvLXdhc2gtZWZjOWM5NTgyNjg3Lmhlcm9rdWFwcC5jb20vYXBpL2xvZ2luIiwiaWF0IjoxNzEwNDE3MjIyLCJuYmYiOjE3MTA0MTcyMjIsImp0aSI6InBsZll0aENEZ0U1NUNzMHEiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.z1pdEBkx8Hq01B7jNKa42NGxtFFHwb-7O_0y8krVWUY'
        }

    })

    if(api.ok){
        let resposta = await api.json();
        alert("Cadastro realizado :)")

        console.log(resposta)
        return
        
    }
    let respostaErro = await api.json();
    console.log(respostaErro);
    alert(respostaErro.data.errors.cpf_cnpj[0]);

    alert(respostaErro.data.errors.email);
    

    

}