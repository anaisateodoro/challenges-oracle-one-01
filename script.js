function criptografar(){
    let mensagemVazia = document.getElementById("mensagemVazia");
    let copiarBotao = document.getElementById("copiarBotao");
    mensagemVazia.classList.remove("mostrarMensagemVazia");
    mensagemVazia.classList.add("esconderMensagemVazia");
    copiarBotao.classList.remove("esconderCopiarBotao");
      
    let entradaUsuario = document.getElementById("entradaUsuario").value;
    let criptografado = entradaUsuario.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat').replace(/a/g, 'ai');
    document.getElementById("mostrarMessagem").innerHTML = criptografado;
  
  }
  
  function descriptografar(){
      let mensagemVazia = document.getElementById("mensagemVazia");
      let copiarBotao = document.getElementById("copiarBotao");
     
      mensagemVazia.classList.remove("mostrarMensagemVazia");
      mensagemVazia.classList.add("esconderMensagemVazia");
      copiarBotao.classList.remove("esconderCopiarBotao");
  
      let entradaUsuario = document.getElementById("entradaUsuario").value;
      let descriptografado = entradaUsuario.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ai/g, 'a').replace(/ufat/g, 'u');
      document.getElementById("mostrarMessagem").innerHTML = descriptografado;
  }
  
  function modoCopiar() {
  
    let copiarTexto = document.getElementById("mostrarMessagem");
  
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999); 
  
    navegador.clipboard.writeText(copiarTexto.value);
  }
