const characters = [
  {
    id: 1,
    imagem: "assets/image/personagens/chihiro.jpg",
    name: "Chihiro Ogino",
  },
  {
    id: 2,
    imagem: "assets/image/personagens/haku.jpg",
    name: "Haku",
  },
  {
    id: 3,
    imagem: "assets/image/personagens/yubaba.jpg",
    name: "Yubaba",
  },
  {
    id: 4,
    imagem: "assets/image/personagens/noface.jpg",
    name: "No-face",
  },
  {
    id: 5,
    imagem: "assets/image/personagens/zeniba.jpeg",
    name: "Zeniba",
  },
  {
    id: 6,
    imagem: "assets/image/personagens/ogino.jpeg",
    name: "Ogino",
  },
  {
    id: 7,
    imagem: "assets/image/personagens/Aogaeru.jpg",
    name: "Aogaeru",
  },
  {
    id: 8,
    imagem: "assets/image/personagens/Aniyaku.jpg",
    name: "Aniyaku",
  },
  {
    id: 9,
    imagem: "assets/image/personagens/boh.jpg",
    name: "Boh",
  },
  {
    id: 10,
    imagem: "assets/image/personagens/chichiyaku.jpeg",
    name: "Chichiyaku",
  },
  {
    id: 11,
    imagem: "assets/image/personagens/kamaji.jpeg",
    name: "Kamaji",
  },
  {
    id: 12,
    imagem: "assets/image/personagens/lin.jpg",
    name: "Lin",
  },
  {
    id: 13,
    imagem: "assets/image/personagens/yuko.png",
    name: "Yuko",
  },
];

const charactersContainer = document.querySelector(".block-card-personagens");
const charactersList = document.querySelector(".lista-personagens");

characters.forEach((character) => {
  const li = document.createElement("li");
  li.className = "personagem";

  const image = document.createElement("img");
  image.src = character.imagem;
  image.setAttribute("alt", character.name);

  const name = document.createElement("p");
  name.innerHTML = character.name;

  li.append(image, name);
  charactersList.appendChild(li);
});

// card mostrar mais e mostrar menos

function toggleShow(event) {
  const state = charactersContainer.getAttribute("data-state");
  
  if (state === "opened") {
    // ver menos
    charactersContainer.setAttribute("data-state", "closed")
    event.target.innerHTML = "Mostrar mais";
  }

   if (state === "closed") {
    // ver mais
    charactersContainer.setAttribute("data-state", "opened")
    event.target.innerHTML = "Mostrar menos";
  }
}
