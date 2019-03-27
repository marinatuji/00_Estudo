$(document).ready(function () {
  //pra começar o carregamento da página enquanto espera as autenticações
  $("#login-submit").click((event) => {
    alert("Cadastrando");
    event.preventDefault(event);
   let email = $("#login-input").val();
   let password = $("#login-password").val();
   littleBall(email, password);
  });

});

// $("#sign-up-btn").click((e) => {
//   alert("Funcionou")
//   event.preventDefault(e)
//   let email = $('#email-input').val();
//   let password = $('#pass-input').val();
//   firebase.auth().createUserWithEmailAndPassword(email, password)
// });

//codigo base da documentação do Firebase
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
//   // Handle Errors here.
//   let errorCode = error.code;
//   let errorMessage = error.message;
//   // ...
// });

//promise-then syntax
function littleBall(email, password){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((sucess) => {
   window.location = "benvenido.html";      
   console.log('Sucesso:', sucess);
  })
  .catch((error) => {
    console.log('Erro:', error);
  });
}

// async-await syntax
// async function littleBall(){
//   try{
//     const sucess = await firebase.auth().createUserWithEmailAndPassword(email, password);
//     console.log('Sucesso:', sucess);

//   } catch (error) {
//     console.log('Erro:', error);
//   }
// }

function validEmail() {

}

function validPassword() {

}//inserir campo confirme sua senha, colocar padrão de senha min 8 caracteres alphanumerico
//arquitetura cliente servidor

//para sign in com google e facebook precisará de um servidorzinho para fazer uma autenticação
//pesquisar Google sign in