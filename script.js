const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const students = [
    {
        "name": "Adi Dzocaj",
        "image": "assets/images/students/adi-dzocaj.jpg",
    },
    {
        "name": "Alexander Bergquist",
        "image": "assets/images/students/alexander-bergquist.jpg",
    },
    {
        "name": "Alexander Kocman",
        "image": "assets/images/students/alexander-kocman.jpg",
    },
    {
        "name": "Benjamin Benson",
        "image": "assets/images/students/benjamin-benson.jpg",
    },
    {
        "name": "Benjamin Tsubarah",
        "image": "assets/images/students/benjamin-tsubarah.jpg",
    },
    {
        "name": "Calle Nilsson",
        "image": "assets/images/students/calle-nilsson.jpg",
    },
    {
        "name": "Chikage Takahashi Molander",
        "image": "assets/images/students/chikage-takahashi-molander.jpg",
    },
    {
        "name": "Daniel Be",
        "image": "assets/images/students/daniel-be.jpg",
    },
    {
        "name": "Daniel Carlsson",
        "image": "assets/images/students/daniel-carlsson.jpg",
    },
    {
        "name": "Elin Ahlgren",
        "image": "assets/images/students/elin-ahlgren.jpg",
    },
    {
        "name": "Emma Käck",
        "image": "assets/images/students/emma-kack.jpg",
    },
    {
        "name": "Eric Ståhl",
        "image": "assets/images/students/eric-stahl.jpg",
    },
    {
        "name": "Frans Gustavson Påsse",
        "image": "assets/images/students/frans-gustavson-passe.jpg",
    },
    {
        "name": "Glafira Veretennikova",
        "image": "assets/images/students/glafira-veretennikova.jpg",
    },
    {
        "name": "Gustaf Grönlund",
        "image": "assets/images/students/gustaf-gronlund.jpg",
    },
    {
        "name": "Hanna Håkanson",
        "image": "assets/images/students/hanna-hakanson.jpg",
    },
    {
        "name": "Heidi Sjöberg",
        "image": "assets/images/students/heidi-sjoberg.jpg",
    },
    {
        "name": "Hugo Carzborn",
        "image": "assets/images/students/hugo-carzborn.jpg",
    },
    {
        "name": "Jesper Kling",
        "image": "assets/images/students/jesper-kling.jpg",
    },
    {
        "name": "Johan Ranestam",
        "image": "assets/images/students/johan-ranestam.jpg",
    },
    {
        "name": "Johanna Bäckström",
        "image": "assets/images/students/johanna-backstrom.jpg",
    },
    {
        "name": "Johanna Jönsson",
        "image": "assets/images/students/johanna-jonsson.jpg",
    },
    {
        "name": "Jona Torsson",
        "image": "assets/images/students/jona-torsson.jpg",
    },
    {
        "name": "Josefine Ahlstedt",
        "image": "assets/images/students/josefine-ahlstedt.jpg",
    },
    {
        "name": "Julia Jespersdotter Högman",
        "image": "assets/images/students/julia-jespersdotter-hogman.jpg",
    },
    {
        "name": "Julia Nemell",
        "image": "assets/images/students/julia-nemell.jpg",
    },
    {
        "name": "Linus Lindberg",
        "image": "assets/images/students/linus-lindberg.jpg",
    },
    {
        "name": "Malin Olsson",
        "image": "assets/images/students/malin-olsson.jpg",
    },
    {
        "name": "Maria Haara-Lundhammar",
        "image": "assets/images/students/maria-haara-lundhammar.jpg",
    },
    {
        "name": "Maria Lövgren",
        "image": "assets/images/students/maria-lovgren.jpg",
    },
    {
        "name": "Nikola Dimitrijoski",
        "image": "assets/images/students/nikola-dimitrijoski.jpg",
    },
    {
        "name": "Paulina Kiendys",
        "image": "assets/images/students/paulina-kiendys.jpg",
    },
    {
        "name": "Raymond Lam",
        "image": "assets/images/students/raymond-lam.jpg",
    },
    {
        "name": "Robin Karlsson",
        "image": "assets/images/students/robin-karlsson.jpg",
    },
    {
        "name": "Sara Almqvist",
        "image": "assets/images/students/sara-almqvist.jpg",
    },
    {
        "name": "Tim Nilsson",
        "image": "assets/images/students/tim-nilsson.jpg",
    },
    {
        "name": "Tirapat Sukjit",
        "image": "assets/images/students/tirapat-sukjit.jpg",
    },
    {
        "name": "Tobias Silfverberg",
        "image": "assets/images/students/tobias-silfverberg.jpg",
    },
    {
        "name": "Wiktoria Dobrzewinska",
        "image": "assets/images/students/wiktoria-dobrzewinska.jpg",
    },
];

const missing_students = [
    {
        "name": "Andjela Saponjic",
        "image": null,
    },
    {
        "name": "Cazpian Levén",
        "image": null,
    },
    {
        "name": "Frida Lam",
        "image": null,
    },
    {
        "name": "Maxim Khnykin",
        "image": null,
    },
    {
        "name": "Philip Le",
        "image": null,
    },
];

shuffleArray(students);

// const studentNames = students.map(item => item.name);


let person1 = students[0];
let person2 = students[1];
let person3 = students[2];
let person4 = students[3];

const bild1El = document.querySelector(".bild1");
bild1El.innerHTML = `<p>${person1.name}</p> <img src="${person1.image}" alt="">`;

const altEl = document.querySelectorAll(".alt")


htmlArray = [
    `<button class="btn btn-primary">${person1.name}</button>`,
    `<button class="btn btn-primary">${person2.name}</button>`,
    `<button class="btn btn-primary">${person3.name}</button>`,
    `<button class="btn btn-primary">${person4.name}</button>`,
]

shuffleArray(htmlArray);

let i = 0;
altEl.forEach(item => {
    item.innerHTML = htmlArray[i];
    i++;
});

const altContainerEl = document.querySelector(".alt-container");
altContainerEl.addEventListener('click', e => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.innerText === person1.name) {
          console.log("Du gissade rätt!")  
        } else {console.log("Du gissade fel!")};
    };
});

// const alt1El = document.querySelector(".alt1");
// alt1El.innerHTML=`<p>${studentNames[Math.floor(Math.random()*studentNames.length)]}<p>`;
// const alt2El = document.querySelector(".alt2");
// alt2El.innerHTML=`<p>${studentNames[Math.floor(Math.random()*studentNames.length)]}<p>`;
// const alt3El = document.querySelector(".alt3");studentNames
// alt3El.innerHTML=`<p>${studentNames[Math.floor(Math.random()*studentNames.length)]}<p>`;
// const alt4El = document.querySelector(".alt4");
// alt4El.innerHTML=`<p>${person1.name}<p>`;

// let i = 0;
// altEl.forEach(alt => {

//     alt.innerHTML=`<p>${studentNames[i]}</p>`
//     i++;

// });