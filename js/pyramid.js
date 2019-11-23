//  Pythagorean theorem
function PithTrinity(leg1, leg2) {
    this.leg1 = leg1;
    this.leg2 = leg2;
    this.hyp = Math.sqrt(leg1 * leg1 + leg2 * leg2);
}
// Pythagorean triples 
let pt1 = new PithTrinity(3, 4);
let pt2 = new PithTrinity(5, 12);
let pt3 = new PithTrinity(8, 15);
let pt4 = new PithTrinity(20, 21);
let pt5 = new PithTrinity(9, 40);
let trinities = [pt1, pt2, pt3, pt4, pt5];

// Constructing the Cone
function Pyramid(pt) {
    rand = (Math.floor(Math.random() * 3) + 1) / 2; // Random number between 0.5 and 2
    this.side = (pt.leg1 * rand) * 2;
    this.height = pt.leg2 * rand;
    this.slant = pt.hyp * rand;
    let vol = this.side * this.side * this.height / 3;
    this.volume = Math.round(vol * 100) / 100;
    let sur = this.side * this.side + 4 * this.side * this.slant / 2;
    this.surface = Math.round(sur * 100) / 100;
}

rand = (Math.floor(Math.random() * 1));
let pyramid = new Pyramid(trinities[rand]);


// Problems
let task1 = "The side of a right pyramid is " + pyramid.side + " cm and the slant height is " + pyramid.slant +
    " cm. Calculate the volume and the surface area.";
let task2 = "The perimeter of the base in a right pyramid is " + pyramid.side * 4 + " cm and the slant height is " + pyramid
    .slant + " cm. Calculate the volume and the surface area.";
let task3 = "The side of a right pyramid is " + pyramid.radius + " cm and the altitude is " + pyramid.height +
    " cm. Calculate the volume and the surface area.";
let task4 = "The perimeter of the base in a right pyramid is " + pyramid.side * 4 + " cm and the altitude is " + pyramid
    .height + " cm. Calculate the volume and the surface area.";
let task5 = "The altitude of a right circular cone is " + pyramid.height + " cm and the slant height is " + pyramid
    .slant + " cm. Calculate the volume and the surface area.";
// Choosing a problem
let tasks = [task1, task2, task3, task4, task5];
rand2 = (Math.floor(Math.random() * 5));

// Inserting the problem
document.getElementById("task").innerHTML = tasks[rand2];

// Checking the answers
function check() {
    surf = document.getElementById("surf").value;
    vol = document.getElementById("vol").value;
    surf = Number(surf);
    vol = Number(vol);
    if (pyramid.volume == vol) {
        document.getElementById("checkVol").src = "style/img/right.jpg";
    } else {
        document.getElementById("checkVol").src = "style/img/wrong.jpg";
    }
    if (pyramid.surface == surf) {
        document.getElementById("checkSurf").src = "style/img/right.jpg";
    } else {
        document.getElementById("checkSurf").src = "style/img/wrong.jpg";
    }
}
// Showing answers
function giveUp() {
    document.getElementById("solutions").innerHTML = "The volume is about " + pyramid.volume +
        " cm<sup>3</sup> and the surface area is about " + pyramid.surface + " cm<sup>2</sup>.";
}

// Generate new problem
function generate() {
    location.reload();
}