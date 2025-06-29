function mostrarInfo(id) {
    let info = document.getElementById(id);
    let estavaVisivel = info.style.display === "block";

    const ver = document.querySelectorAll(".divisoria");
    ver.forEach(v => v.style.display = "none");

    if (estavaVisivel) {
        info.style.display = "none";  
        sumir.style.display = "block";
    } else {
        info.style.display = "block";
        sumir.style.display = "none";
    }
}

function mostrarTudo(id) {
    let tudo = document.getElementById(id);
    let sumir = document.getElementById('sumir');
    let sumir2 = document.getElementById('sumir2');
    let fundo = document.getElementById('fundo');

    if (tudo.style.display === "none") {
        tudo.style.display = "block";
        sumir2.style.display = "none";
        fundo.style.opacity = "0";
    } else {
        tudo.style.display = "none";
        sumir2.style.display = "none";
    }
}

function mostrarBibli(id) {
    let bibli = document.getElementById(id);
    let bibliografia = document.getElementById('bibliografia');
    let regras = document.getElementById('regras');

    if (bibli.style.display === "none") {
        bibli.style.display = "block";
    } else {
        bibli.style.display = "none";
    }

    if (bibliografia.style.display === "block" && regras.style.display === "block") {
        bibliografia.style.marginBottom = "0px";
    } else {
        bibliografia.style.marginBottom = "55px";
    }
}

function mostrarTexto(id) {
    let aparecer = document.getElementById(id);
    let estaVisivel = aparecer.style.display === "block";
    
    
    const cada = document.querySelectorAll('.texto');
    cada.forEach(c => c.style.display = "none");

    if (estaVisivel) {
        aparecer.style.display = "none";
    } else {
        aparecer.style.display = "block";
    }
}