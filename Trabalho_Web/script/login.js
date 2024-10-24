const url = "https://go-wash-api.onrender.com/api/login"
async function login(){
    
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    


    if (email === "") {
        alert('Por favor, preencha o campo Email.');
        
    }

    if (password === "") {
        alert('Por favor, preencha o campo Senha.');
        
    }
    
    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
            
            "email":email,
            "user_type_id":1,
            "password":password,
             
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })

    if(api.ok){
        let resposta = await api.json();
        localStorage.setItem("user", JSON.stringify(resposta))
        alert("Login realizado com sucesso")
        location.href = "../index/home_cadastroender.html"
        console.log(resposta)
        return
        
    }
    let respostaErro = await api.json();
    console.log(respostaErro);
    alert(respostaErro.data.errors);



}
function cadastroEndereco(){

    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user.acess_token);
    
}
