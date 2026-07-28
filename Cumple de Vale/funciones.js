console.log("JS cargado correctamente");
const abrirBtn = document.getElementById("abrirBtn");
const pantallaCarga = document.getElementById("pantallaCarga");
const caja = document.getElementById("caja");
const tarjeta = document.getElementById("tarjeta");
const codigo = document.getElementById("codigo");
const copiar = document.getElementById("copiar");
const mensaje = document.getElementById("mensaje");

function crearDestellos(){

    const posicion = copiar.getBoundingClientRect();

    for(let i=0;i<30;i++){

        let p=document.createElement("div");

        p.className="particula";

        p.style.left = posicion.left + posicion.width/2 + "px";
        p.style.top = posicion.top + posicion.height/2 + "px";


        const x = Math.random()*300-150;
        const y = Math.random()*300-150;

        p.style.setProperty("--x", x+"px");
        p.style.setProperty("--y", y+"px");


        document.body.appendChild(p);


        setTimeout(()=>{
            p.remove();
        },1000);

    }

}

// Cambia por el código real
const codigoRoblox = "RIKEUNUM3UNUE7CHTV";

// Frases mientras "busca" el regalo
const frases = [
    "Preparando regalo... 🎁",
    "¿Eres vale?... 🤔",
    "Ah vale, Vale eres tu. ✅",
    "Envolviendo el regalo... 🤑",
    "Ya casi, wait a moment please ma'am... ✨"
];

abrirBtn.addEventListener("click", iniciar);

async function iniciar(){

    abrirBtn.style.display = "none";

    document.querySelector(".contenedor")
    .classList.add("ocultar");

    await esperar(700);

    pantallaCarga.style.display = "flex";

    for(const frase of frases){

        mensaje.innerText = frase;

        await esperar(1300);

    }

    pantallaCarga.style.display = "none";

    caja.style.display = "flex";

caja.style.display = "flex";

caja.classList.add("caerRegalo");

await esperar(1000);

caja.classList.add("temblar");

await esperar(800);

caja.classList.remove("temblar");

caja.classList.add("abrir");

lanzarConfeti();

await esperar(1000);

// Desaparece la caja
caja.classList.add("ocultarCaja");

await esperar(1500);

caja.style.display = "none";

// Aparece la tarjeta
tarjeta.style.display = "flex";

requestAnimationFrame(() => {
    tarjeta.classList.add("mostrar");
});

    codigo.innerText = codigoRoblox;

}

copiar.addEventListener("click", async()=>{

    try{

        await navigator.clipboard.writeText(codigoRoblox);

        copiar.innerText = "¡Copiado! 💗";

        setTimeout(()=>{
            copiar.innerText = "Copiar código";
        },2000);
        crearDestellos();
    }catch(error){

        console.log(error);

        const area = document.createElement("textarea");
        area.value = codigoRoblox;
        document.body.appendChild(area);

        area.select();
        document.execCommand("copy");

        area.remove();

        copiar.innerText = "¡Copiado! 💗";
        crearDestellos();
        setTimeout(()=>{
            copiar.innerText = "Copiar código";
        },2000);
    }

});

function esperar(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}


function lanzarConfeti(){

    for(let i=0;i<120;i++){

        const confeti = document.createElement("div");

        confeti.className="confeti";

        confeti.style.left=Math.random()*100+"vw";

        confeti.style.top="-20px";

        confeti.style.backgroundColor=
            colores[Math.floor(Math.random()*colores.length)];

        confeti.style.animationDuration=
            (Math.random()*2+2)+"s";

        confeti.style.transform=
            `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(confeti);
 console.log("Confeti!");
        setTimeout(()=>{

            confeti.remove();

        },4500);

    }

}

const colores=[
"#ff4d88",
"#ff77aa",
"#ffd166",
"#7bdff2",
"#b8f2e6",
"#ffffff",
"#ffc6ff"
];

// Fondo de estrellas

crearEstrellas();

function crearEstrellas(){

    for(let i = 0; i < 60; i++){

        const estrella = document.createElement("div");

        estrella.className = "estrella";

        estrella.style.left = Math.random() * 100 + "vw";
        estrella.style.top = Math.random() * 100 + "vh";

        estrella.style.animationDelay = Math.random() * 5 + "s";

        estrella.style.opacity = Math.random();

        document.body.appendChild(estrella);
    }

    console.log("Estrellas creadas");
}

function crearEstrellaFugaz(){

    const estrella=document.createElement("div");

    estrella.className="estrellaFugaz";


    // posición inicial aleatoria
    estrella.style.left=Math.random()*100+"vw";
    estrella.style.top=Math.random()*60+"vh";


    // dirección aleatoria
    const angulo=Math.random()*60-30;

    estrella.style.setProperty(
        "--angulo",
        angulo+"deg"
    );


    // distancia recorrida
    estrella.style.setProperty(
        "--distanciaX",
        (-200 + Math.random()*400)+"px"
    );

    estrella.style.setProperty(
        "--distanciaY",
        (200 + Math.random()*200)+"px"
    );


    // velocidad diferente
    estrella.style.animationDuration=
    (0.8+Math.random()*1.5)+"s";


    document.body.appendChild(estrella);


    setTimeout(()=>{

        estrella.remove();

    },2000);

}

function cicloEstrellas(){

    crearEstrellaFugaz();

    setTimeout(()=>{
        crearEstrellaFugaz();
    },2500);


    setTimeout(()=>{
        crearEstrellaFugaz();
    },5000);

}


cicloEstrellas();

setInterval(cicloEstrellas,10000);

// Easter Egg

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("estrella")){

        const texto=document.createElement("div");

        texto.className="mensajeSecreto";

        texto.innerText=
        "⭐ No pude poner brochecitos, pero pongo estrellitas.";

        document.body.appendChild(texto);

        setTimeout(()=>{

            texto.remove();

        },3500);

    }

});

// Vibración (si el teléfono la soporta)

function vibrar(){

    if(navigator.vibrate){

        navigator.vibrate([150,100,150]);

    }

}

caja.addEventListener("animationstart",()=>{

    vibrar();

});