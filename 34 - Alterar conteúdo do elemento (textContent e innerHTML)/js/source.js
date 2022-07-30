// Alterar conteúdo do elemento (textContent e innerHTML)
let titulo = document.querySelector("#titulo")
let subtitulo = document.querySelector(".subtitulo")

// innerHTML
titulo.innerHTML = "Testando a alteração de texto com innerHTML :)"

// textContent -> mais utilizado, recomendado e performático
subtitulo.textContent = "Aqui está sendo feito com textContent :D"