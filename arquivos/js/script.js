const musicas = [

    new Audio("arquivos/musicas/paranoia.mp3"),
    new Audio("arquivos/musicas/insonia.mp3"),
    new Audio("arquivos/musicas/facoparecer.mp3"),
    new Audio("arquivos/musicas/naoduvide.mp3"),
    new Audio("arquivos/musicas/haciendodinero.mp3"),
    new Audio("arquivos/musicas/vemevai.mp3"),
    new Audio("arquivos/musicas/vibe.mp3"),
    new Audio("arquivos/musicas/followers.mp3"),
    new Audio("arquivos/musicas/tardedemais.mp3"),
    new Audio("arquivos/musicas/california.mp3"),
    new Audio("arquivos/musicas/okok.mp3"),
];

const bt = [

    [$("#tocar0"), $("#pausar0")],
    [$("#tocar1"), $("#pausar1")],
    [$("#tocar2"), $("#pausar2")],
    [$("#tocar3"), $("#pausar3")],
    [$("#tocar4"), $("#pausar4")],
    [$("#tocar5"), $("#pausar5")],
    [$("#tocar6"), $("#pausar6")],
    [$("#tocar7"), $("#pausar7")],
    [$("#tocar8"), $("#pausar8")],
    [$("#tocar9"), $("#pausar9")],
    [$("#tocar10"), $("#pausar10")]

];

function tocar(indice) {

    parar(indice);
    
    bt[0][0].css("display", "block");
    bt[1][0].css("display", "block");
    bt[2][0].css("display", "block");
    bt[3][0].css("display", "block");
    bt[4][0].css("display", "block");
    bt[5][0].css("display", "block");
    bt[6][0].css("display", "block");
    bt[7][0].css("display", "block");
    bt[8][0].css("display", "block");
    bt[9][0].css("display", "block");
    bt[10][0].css("display", "block");
    
    bt[0][1].css("display", "none");
    bt[1][1].css("display", "none");
    bt[2][1].css("display", "none");
    bt[3][1].css("display", "none");
    bt[4][1].css("display", "none");
    bt[5][1].css("display", "none");
    bt[6][1].css("display", "none");
    bt[7][1].css("display", "none");
    bt[8][1].css("display", "none");
    bt[9][1].css("display", "none");
    bt[10][1].css("display", "none");
    
    bt[indice][0].css("display", "none");
    bt[indice][1].css("display", "block");

};

function parar(indice) {

    musicas[0].pause();
    musicas[1].pause();
    musicas[2].pause();
    musicas[3].pause();
    musicas[4].pause();
    musicas[5].pause();
    musicas[6].pause();
    musicas[7].pause();
    musicas[8].pause();
    musicas[9].pause();
    musicas[10].pause();
    
    musicas[0].currentTime = 0;
    musicas[1].currentTime = 0;
    musicas[2].currentTime = 0;
    musicas[3].currentTime = 0;
    musicas[4].currentTime = 0;
    musicas[5].currentTime = 0;
    musicas[6].currentTime = 0;
    musicas[7].currentTime = 0;
    musicas[8].currentTime = 0;
    musicas[9].currentTime = 0;
    musicas[10].currentTime = 0;
    
    confirmar(indice);

};

function confirmar(indice) {

     musicas[indice].play();

};

function pausar(indice) {

      bt[indice][0].css("display", "block");
      bt[indice][1].css("display", "none");
      
      musicas[indice].pause();

};
