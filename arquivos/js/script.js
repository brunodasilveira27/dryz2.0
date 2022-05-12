const musicas = [

    new Audio("arquivos/musicas/paranoia.mp3"),
    new Audio("arquivos/musicas/insonia.mp3"),
    new Audio("arquivos/musicas/facoparecer.mp3"),
    new Audio("arquivos/musicas/naoduvide.mp3"),
    new Audio("arquivos/musicas/haciendodinero.mp3"),
    new Audio("arquivos/musicas/vemevai.mp3"),
    new Audio("arquivos/musicas/vibe.mp3"),
];

const bt = [

    [$("#tocar0"), $("#pausar0")],
    [$("#tocar1"), $("#pausar1")],
    [$("#tocar2"), $("#pausar2")],
    [$("#tocar3"), $("#pausar3")],
    [$("#tocar4"), $("#pausar4")],
    [$("#tocar5"), $("#pausar5")],
    [$("#tocar6"), $("#pausar6")],

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
    
    bt[0][1].css("display", "none");
    bt[1][1].css("display", "none");
    bt[2][1].css("display", "none");
    bt[3][1].css("display", "none");
    bt[4][1].css("display", "none");
    bt[5][1].css("display", "none");
    bt[6][1].css("display", "none");
    
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
    
    confirmar(indice);

};

function confirmar(indice) {

    musicas[indice].play();

};