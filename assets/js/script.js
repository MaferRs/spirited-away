
const personagens = [
    {
        "id": 1,
        "imagem": "assets/image/personagens/chihiro.jpg",
        "name": "Chihiro Ogino"
    },
    {
        "id": 2,
        "imagem": "assets/image/personagens/haku.jpg",
        "name": "Haku"
    },
    {
        "id": 3,
        "imagem": "assets/image/personagens/yubaba.jpg",
        "name": "Yubaba"
    },
    {
        "id": 4,
        "imagem": "assets/image/personagens/noface.jpg",
        "name": "No-face"
    },
    {
        "id": 5,
        "imagem": "assets/image/personagens/zeniba.jpeg",
        "name": "Zeniba"
    },
    {
        "id": 6,
        "imagem": "assets/image/personagens/ogino.jpeg",
        "name": "Ogino"
    },
    {
        "id": 7,
        "imagem": "assets/image/personagens/Aogaeru.jpg",
        "name": "Aogaeru"
    },
    {
        "id": 8,
        "imagem": "assets/image/personagens/Aniyaku.jpg",
        "name": "Aniyaku"
    },
    {
        "id": 9,
        "imagem": "assets/image/personagens/boh.jpg",
        "name": "Boh"
    },
    {
        "id": 10,
        "imagem": "assets/image/personagens/chichiyaku.jpeg",
        "name": "Chichiyaku"
    },
    {
        "id": 11,
        "imagem": "assets/image/personagens/kamaji.jpeg",
        "name": "Kamaji"
    },
    {
        "id": 12,
        "imagem": "assets/image/personagens/lin.jpg",
        "name": "Lin"
    },
    {
        "id": 13,
        "imagem": "assets/image/personagens/yuko.png",
        "name": "Yuko"
    }
]

const jsonData = JSON.stringify(personagens)
const personagensData = JSON.parse(jsonData)


const card = document.querySelector(".lista-personagens")

console.log(card)

personagens.forEach(personagem => {
    const itemLista = document.createElement('li')
    itemLista.className = 'itemLista'

    itemLista.innerHTML = `
    <img src="${personagem.imagem}" alt="${personagem.name}" />

    <p>${personagem.name}</p>
    `
    card.appendChild(itemLista)
})