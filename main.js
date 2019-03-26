$(document).ready(function () {
  //pra começar o carregamento da página enquanto espera as autenticações
  $("#login-submit").click((event) => {
    alert("Cadastrando");
    event.preventDefault(event);
   let email = $("login-input").val();
   let password = $("login-password").val();
   littleBall();
  })

});

// $("#sign-up-btn").click((e) => {
//   alert("Funcionou")
//   event.preventDefault(e)
//   let email = $('#email-input').val();
//   let password = $('#pass-input').val();
//   firebase.auth().createUserWithEmailAndPassword(email, password)
// });

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
  // Handle Errors here.
  let errorCode = error.code;
  let errorMessage = error.message;
  // ...
});

firebase.auth().createUserWithEmailAndPassword(email, password).then(function (error) {
  // Handle Errors here.
  let errorCode = error.code;
  let errorMessage = error.message;
  // ...
});

//promise-then syntax
function littleBall(){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((sucesso) => {
   window.location = "file.html";      
   console.log('Sucesso:', sucesso);
  })
  .catch((erro) => {
    console.log('Erro:', erro);
  });
}

// async-await syntax
async function littleBall(){
  try{
    const sucesso = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('Sucesso:', sucesso);

  } catch (erro) {
    console.log('Erro:', erro);
  }
}

function validEmail() {

}

function validPassword() {

}//inserir campo confirme sua senha, colocar padrão de senha min 8 caracteres alphanumerico
//arquitetura cliente servidor

//para sign in com google e facebook precisará de um servidorzinho para fazer uma autenticação
//pesquisar Google sign in