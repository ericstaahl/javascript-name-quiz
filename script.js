
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

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
};

let studentsFiltered = [...students];

const studentNames = students.map(student => student.name)

const altContainerEl = document.querySelector(".alt-container");
const image1El = document.querySelector("#image-1");
const altEl = document.querySelectorAll(".name-button")
const scoreTrackerEl = document.querySelector("#score-tracker")
const playAgainEl = document.querySelector(".play-again");

let person2;
let person3;
let person4;
let person1;

let correctAnswers = 0;
let imageNr = 0;

const updateScoreTracker = () => {
    scoreTrackerEl.innerText = `Bild nr. ${imageNr}/10. Nuvarande poäng: ${correctAnswers}/10`
};

updateScoreTracker();

let initialArrayLength = studentsFiltered.length;

const nextImage = function () {
    imageNr++;
    updateScoreTracker();
    shuffleArray(studentsFiltered);
    shuffleArray(studentNames);

    person2 = studentNames[1];
    person3 = studentNames[2];
    person4 = studentNames[3];
    person1 = studentsFiltered.find(student => student.name != person2 && student.name != person3 && student.name != person4);

    image1El.src = person1.image;

    htmlArray = [
        person1.name,
        person2,
        person3,
        person4,
    ];

    shuffleArray(htmlArray);

    let i = 0;
    altEl.forEach(item => {
        item.innerHTML = htmlArray[i];
        i++;
    });
};

const checkName = function (e) {
    if (e.target.tagName === "BUTTON") {
        studentsFiltered = studentsFiltered.filter(student => student != person1);
        if (e.target.innerText === person1.name) {
            console.log("Du gissade rätt!");
            correctAnswers++;
        }
        else {
            console.log("Du gissade fel!")
        };
        // scoreTrackerEl.innerText = `Bild nr. ${imageNr}/10. Nuvarande poäng: ${correctAnswers}/10`;
        // altContainerEl.removeEventListener('click', checkName);
        if (studentsFiltered.length > (initialArrayLength - 10)) {
            nextImage();
        }
        else {
            console.log(`Du fick ${correctAnswers}/10 poäng!`)
            scoreTrackerEl.innerText = `Du fick ${correctAnswers}/10 poäng!`;
            altContainerEl.removeEventListener('click', checkName);
        };
    };
};

altContainerEl.addEventListener('click', checkName);

const playAgain = function () {
    studentsFiltered = [...students];
    correctAnswers = 0;
    imageNr = 0;
    altContainerEl.addEventListener('click', checkName);
    nextImage();
};
playAgainEl.addEventListener('click', e => {
    playAgain();
});
nextImage();
