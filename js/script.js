// =====================================
// CONFIGURACIÓN
// =====================================

const phoneNumber = "51982324088";


// =====================================
// ELEMENTOS
// =====================================

const loader = document.getElementById("loader");
const welcome = document.getElementById("welcome");
const support = document.getElementById("support");
const letterSection = document.getElementById("letter-section");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

const typingText = document.getElementById("typing-text");



// =====================================
// CARGA INICIAL
// =====================================

window.onload = () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.classList.remove("active");
            loader.classList.add("hidden");

            welcome.classList.remove("hidden");

            music.volume = 0.25;

        }, 1000);


    }, 3500);

};



// =====================================
// INICIAR HISTORIA
// =====================================


function startStory() {


    changeScene(
        welcome,
        support
    );


    const message = `

Mi Amor...

Sé que esta semana no ha sido fácil.

Sé que has tenido días cansados,
muchas responsabilidades,
muchas cosas en tu mente...

Pero quiero recordarte algo:

Eres una mujer increíble.

Y aunque a veces no puedas verlo...

yo sí lo veo.

❤️

`;


    typeWriter(message);



}



// =====================================
// EFECTO MÁQUINA DE ESCRIBIR
// =====================================


function typeWriter(text) {


    typingText.innerHTML = "";


    let i = 0;


    const interval = setInterval(() => {


        typingText.innerHTML += text.charAt(i);


        i++;


        if (i >= text.length) {


            clearInterval(interval);


            setTimeout(() => {


                goToLetter();


            }, 3000);


        }


    }, 45);


}



// =====================================
// IR A CARTA
// =====================================


function goToLetter() {


    changeScene(
        support,
        letterSection
    );
}

// =====================================
// IR A GALERÍA
// =====================================

function goToGallery() {

    changeScene(

        document.getElementById("letter-section"),

        document.getElementById("gallery")

    );

}

// =====================================
// ABRIR CARTA
// =====================================


function openLetter() {


    const envelope =
        document.querySelector(".envelope-container");


    envelope.classList.add("open");



    createHearts();



    setTimeout(() => {

        envelope.style.display = "none";

        letter.classList.remove("hidden");

        letter.classList.add("fade-in");

        createHearts();

    }, 1500);


}



// =====================================
// RAZONES
// =====================================

const reasons = [


    "Porque tu sonrisa puede cambiar completamente mi día ❤️",


    "Porque admiro la mujer fuerte que eres, incluso cuando tú no lo notas.",


    "Porque aunque estés cansada sigues dando amor a las personas que quieres.",


    "Porque me encanta la forma en que ves la vida.",


    "Porque contigo los momentos simples se vuelven recuerdos especiales.",


    "Porque tu voz tiene una forma increíble de darme tranquilidad.",


    "Porque eres esa persona que pienso cuando algo bonito pasa.",


    "Porque amo la forma en que me haces sentir querido.",


    "Porque tienes un corazón enorme.",


    "Porque me encanta verte luchar por tus sueños.",


    "Porque tus pequeños detalles significan mucho para mí.",


    "Porque puedo ser yo mismo contigo.",


    "Porque eres mi compañera, mi alegría y mi paz.",


    "Porque incluso en tus días difíciles sigues siendo increíble.",


    "Porque eres mi Reina ❤️",


    "Porque llegaste a mi vida para hacerla más bonita.",


    "Porque cada momento contigo vale oro.",


    "Porque me haces sonreír sin darte cuenta.",


    "Porque amo cuidarte y verte feliz.",


    "Porque simplemente eres tú... y eso es suficiente ❤️"


];


function showReason() {


    const text = document.getElementById("reason-text");


    text.style.animation = "none";


    setTimeout(() => {


        const random =
            Math.floor(Math.random() * reasons.length);


        text.innerHTML =
            reasons[random];


        text.style.animation =
            "reasonAppear .8s";


    }, 100);


}



// =====================================
// CORAZONES FLOTANDO
// =====================================


function createHearts() {


    for (let i = 0; i < 25; i++) {


        let heart = document.createElement("div");


        heart.innerHTML = "❤️";


        heart.style.position = "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.bottom = "-50px";


        heart.style.fontSize =
            (Math.random() * 20 + 15) + "px";


        heart.style.animation =
            "floatHeart 5s linear";


        heart.style.zIndex = "999";


        document.body.appendChild(heart);



        setTimeout(() => {


            heart.remove();


        }, 5000);


    }


}



// =====================================
// LLAMADA
// =====================================


function callMe() {


    createHearts();


    setTimeout(() => {


        window.location.href =
            `tel:+${phoneNumber}`;


    }, 1200);


}



// =====================================
// AGREGAR ANIMACIÓN CORAZONES
// =====================================


const style = document.createElement("style");


style.innerHTML = `


@keyframes floatHeart{


from{

transform:
translateY(0)
rotate(0deg);

opacity:1;

}


to{


transform:
translateY(-120vh)
rotate(360deg);


opacity:0;


}


}


`;


document.head.appendChild(style);

// =====================================
// CONTROL DE MÚSICA
// =====================================


function toggleMusic() {


    if (music.paused) {


        music.play();


        document.getElementById(
            "musicButton"
        ).innerHTML = "🔇 Pausar música";


    } else {


        music.pause();


        document.getElementById(
            "musicButton"
        ).innerHTML = "🎵 Música";


    }


}

// =====================================
// NAVEGACIÓN GALERÍA
// =====================================


function goToReasons() {


    changeScene(

        document.getElementById("gallery"),

        document.getElementById("reasons")

    );


}

// =====================================
// EFECTO AL TOCAR FOTOS
// =====================================


document.querySelectorAll(".photo-card")
    .forEach(photo => {


        photo.addEventListener("click", (e) => {

            if (e.target.tagName === "IMG") {
                return;
            }

            createHearts();

            photo.style.transform = "scale(1.1)";

            setTimeout(() => {

                photo.style.transform = "";

            }, 500);

        });



    });

// =====================================
// RESPIRACIÓN
// =====================================


const breathText =
    document.getElementById("breath-text");



let breathCounter = 0;



const breathingWords = [

    "Inhala... 🌸",

    "Mantén... ❤️",

    "Exhala... 🌙",

    "Relájate ✨"

];



setInterval(() => {


    if (breathText) {


        breathText.innerHTML =
            breathingWords[breathCounter];


        breathCounter++;


        if (breathCounter >= breathingWords.length) {

            breathCounter = 0;

        }

    }


}, 2000);



function goToFinal() {


    changeScene(

        document.getElementById("breathing"),

        document.getElementById("final")

    );



    createHearts();

    createStars();


}

// =====================================
// IR A RESPIRACIÓN
// =====================================

function goToBreathing() {


    changeScene(

        document.getElementById("reasons"),

        document.getElementById("breathing")

    );


}

// =====================================
// ESTRELLAS EXTRA
// =====================================


function createStars() {


    for (let i = 0; i < 40; i++) {


        const star =
            document.createElement("div");


        star.innerHTML = "✨";


        star.style.position = "fixed";


        star.style.left =
            Math.random() * 100 + "vw";


        star.style.top =
            Math.random() * 100 + "vh";


        star.style.fontSize =
            Math.random() * 20 + "px";


        star.style.opacity = ".7";


        star.style.zIndex = "1";


        document.body.appendChild(star);



        setTimeout(() => {

            star.remove();

        }, 4000);


    }

}

// =====================================
// CAMBIO DE ESCENAS SUAVE
// =====================================


function changeScene(from, to) {


    from.classList.add("fade-out");


    setTimeout(() => {


        from.classList.add("hidden");

        from.classList.remove("fade-out");


        to.classList.remove("hidden");


        to.classList.add("fade-in");


        setTimeout(() => {

            to.classList.remove("fade-in");

        }, 1000);



    }, 1000);


}

// =====================================
// ACTIVAR EXPERIENCIA
// =====================================


// =====================================
// INICIAR EXPERIENCIA COMPLETA
// =====================================

function activateExperience() {


    music.volume = 0.25;


    music.play()
        .then(() => {

            console.log("Música iniciada");

        })
        .catch(error => {

            console.log(
                "El navegador bloqueó el audio:",
                error
            );

        });



    startStory();


}
// =====================================
// VISOR DE FOTOS
// =====================================


document.querySelectorAll(".photo-card img")
    .forEach(img => {


        img.addEventListener(
            "click",
            () => {


                const viewer =
                    document.getElementById(
                        "photoViewer"
                    );


                const fullPhoto =
                    document.getElementById(
                        "fullPhoto"
                    );


                fullPhoto.src =
                    img.src;


                viewer.classList.remove(
                    "hidden"
                );


            });


    });



function closePhoto() {


    document.getElementById(
        "photoViewer"
    )
        .classList.add(
            "hidden"
        );


}