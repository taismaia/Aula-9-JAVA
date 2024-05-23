// // EVENTOS DE MOUSE 

// const botao = document.querySelector("#botao")
// const caixinha = document.querySelector("#cep")

// botao.addEventListener("click", ()=> console.log("Clicou no botão"))

// caixinha.addEventListener("click", ()=> console.log("Clicou na caixinha"))

// botao.addEventListener("dbclick", ()=> console.log("Clicou duas vezes no botão"))

// botao.addEventListener("mousedown", ()=> console.log("Pressionou o botão pra baixo"))

// botao.addEventListener("mouseup", ()=> console.log("Soltou o o botão do click"))

// botao.addEventListener("mousemove", ()=> console.log("Movimentando o mouse"))

// botao.addEventListener("mouseenter", ()=> console.log("Cursor do mouse entrou"))
// // botao.addEventListener("mouseover", ()=> console.log("Cursor2 do mouse entrou"))

// botao.addEventListener("mouseleave", ()=> console.log("Cursor do mouse saiu"))



// EVENTOS DE TECLADO 

// caixinha.addEventListener("keydown", (evento)=> console.log("Evento pra baixo",evento.key))

// caixinha.addEventListener("keyup", (evento)=> console.log("Evento pra cima",evento.key))

// caixinha.addEventListener("keypress", (evento)=> console.log("Evento de pressão",evento.key))


// caixinha.addEventListener("input", (evento)=> console.log(evento.target.value))

// caixinha.addEventListener("change", (evento)=> console.log(evento.target.value))

// caixinha.addEventListener("blur", (evento)=> console.log(evento.target.value))


EVENTOS DE FORMULÁRIO

const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault()
    console.log("Submitou")
})

const formulario = document.querySelector("#formulario")
const nome = document.querySelector("#nome")
const lista_de_nomes = document.querySelector("#lista_de_nomes")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    const novo_elemento = document.createElement("li")
    novo_elemento.textContent = nome.value
    lista_de_nomes.append(novo_elemento)

    nome.value = ""
    nome.focus()
})
