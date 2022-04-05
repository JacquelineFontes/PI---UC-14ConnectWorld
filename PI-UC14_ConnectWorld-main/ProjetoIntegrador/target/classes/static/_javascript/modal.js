//MODAL PARA PÁGINA "SOBRE NÓS"
var span = document.getElementsByClassName("close")[0];
var imagem1 = document.getElementById("img1").src;
var imagem2 = document.getElementById("img2").src;
var imagem3 = document.getElementById("img3").src;
var imagem4 = document.getElementById("img4").src;
var imagem5 = document.getElementById("img5").src;
var imagem6 = document.getElementById("img6").src;
var x;

function abrirModal1() {

    x = 1;
    var modal = document.querySelector("#modalImg");
    modal.setAttribute('src', '_imagens/modalTitanium0.jpg');

    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImg").style.display = "block";

    span.onclick = function () {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("modalImg").style.display = "none";
    }
    return x;
};

function abrirModal2() {

    x = 2;
    var modal = document.querySelector("#modalImg");
    modal.setAttribute('src', '_imagens/modalTitanium1.jpeg');

    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImg").style.display = "block";

    span.onclick = function () {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("modalImg").style.display = "none";
    }
    return x;
};

function abrirModal3() {

    x = 3;
    var modal = document.querySelector("#modalImg");
    modal.setAttribute('src', '_imagens/modalTitanium2.jpeg');

    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImg").style.display = "block";

    span.onclick = function () {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("modalImg").style.display = "none";
    }
    return x;
};

function abrirModal4() {

    x = 4;
    var modal = document.querySelector("#modalImg");
    modal.setAttribute('src', '_imagens/modalTitanium3.jpeg');

    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImg").style.display = "block";

    span.onclick = function () {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("modalImg").style.display = "none";
    }
    return x;
};

function abrirModal5() {

    x = 5;
    var modal = document.querySelector("#modalImg");
    modal.setAttribute('src', '_imagens/modalTitanium4.jpeg');

    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImg").style.display = "block";

    span.onclick = function () {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("modalImg").style.display = "none";
    }
    return x;
};

function abrirModal6() {

    x = 6;
    var modal = document.querySelector("#modalImg");
    modal.setAttribute('src', '_imagens/modalTitanium5.jpeg');

    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImg").style.display = "block";

    span.onclick = function () {
        document.getElementById("myModal").style.display = "none";
        document.getElementById("modalImg").style.display = "none";
    }
    return x;
};

function next() {
    var modal = document.querySelector("#modalImg");
    console.log(x);
    switch (x) {
        case 1:
            modal.setAttribute('src', imagem2);
            x = 2;
            break;
        case 2:
            modal.setAttribute('src', imagem3);
            x = 3;
            break;
        case 3:
            modal.setAttribute('src', imagem4);
            x = 4;
            break;
        case 4:
            modal.setAttribute('src', imagem5);
            x = 5;
            break;
        case 5:
            modal.setAttribute('src', imagem6);
            x = 6;
            break;
        case 6:
            modal.setAttribute('src', imagem1);
            x = 1;
    }
};

function previous() {
    var modal = document.querySelector("#modalImg");
    switch (x) {
        case 1:
            modal.setAttribute('src', imagem6);
            x = 6;
            break;
        case 2:
            modal.setAttribute('src', imagem1);
            x = 1;
            break;
        case 3:
            modal.setAttribute('src', imagem2);
            x = 2;
            break;
        case 4:
            modal.setAttribute('src', imagem3);
            x = 3;
            break;
        case 5:
            modal.setAttribute('src', imagem4);
            x = 4;
            break;
        case 6:
            modal.setAttribute('src', imagem5);
            x = 5;
    }
};

//MODAL PARA PÁGINA "INFORMAÇÕES DO PRODUTO"
function abrir_modal() {
    let modal = document.querySelector('#myModal');
    let img = document.querySelector('#myImg');
    let modalImg = document.querySelector("#img01");

    modal.style.display = "block";
    modalImg.src = img.src;
};

span.onclick = function () {
    let span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
};

function fecha_modal_tela() {
    if (modal.style.display = "block") {
        modal.style.display = "none";
    }
};

//CONTRLE DE TROCA ENTRE IMAGENS
function navega_por_imagens() {
    let main = document.querySelector('#img01');
    let img1 = document.querySelector('#imagem1');
    let img2 = document.querySelector('#imagem2');
    let img3 = document.querySelector('#imagem3');
    let img4 = document.querySelector('#imagem4');

    switch (x) {
        case 0:
            if (main.src == img1.src) {
                main.src = img4.src;
            } else if (main.src == img2.src) {
                main.src = img1.src;
            } else if (main.src == img3.src) {
                main.src = img2.src;
            } else if (main.src == img4.src) {
                main.src = img3.src;
            };
            break;
        case 1:
            if (main.src == img1.src) {
                main.src = img2.src;
            } else if (main.src == img2.src) {
                main.src = img3.src;
            } else if (main.src == img3.src) {
                main.src = img4.src;
            } else if (main.src == img4.src) {
                main.src = img1.src;
            };
    }
};