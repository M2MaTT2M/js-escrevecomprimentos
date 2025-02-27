let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Bom Dia! :)", "Boa Tarde! :)", "Boa Noite! :)"];
  let escolha = random(palavras);

  if (escolha === "Bom Dia! :)") {
    console.log("O Dia Já Está Amanhecendo Lá Fora!");
  } else if (escolha === "Boa Tarde! :)") {
    console.log("Hoje O Céu Está Bonito!");
  } else if (escolha === "Boa Noite! :)") {
    console.log("Nossa, O Dia Escureceu Tão Rápido");
  }

  return escolha;
}

function inicializaCores() {
  background("blue");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();

  let texto = palavraParcial(0, width);

  text(texto, 200, 200);
}