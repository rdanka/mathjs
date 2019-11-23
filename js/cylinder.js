let height = Math.floor(Math.random() * 10) + 1;
let radius = Math.floor(Math.random() * 10) + 1;

// Constructing the Cone
function Cylinder() {
    this.radius = radius;
    this.height = height;
    let vol = this.radius * this.radius * Math.PI * this.height;
    this.volume = Math.round(vol * 100) / 100;
    let sur = 2 * (this.radius * this.radius * Math.PI) + this.height * (2 * Math.PI * this.radius);
    this.surface = Math.round(sur * 100) / 100;
}

rand = (Math.floor(Math.random() * 1));
let cylinder = new Cylinder();


// Problems
let task1 = "The radius of a right circular cylinder is " + cylinder.radius + " cm and the altitude is " + cylinder.height + " cm. Calculate the volume and the surface area.";
let task2 = "The diameter of a right circular cylinder is " + cylinder.radius * 2 + " cm and the altitude is " + cylinder.height + " cm. Calculate the volume and the surface area.";


// Choosing a problem
let tasks = [task1, task2];
rand2 = (Math.floor(Math.random() * 2));

// Inserting the problem
document.getElementById("task").innerHTML = tasks[rand2];

// Checking the answers
function check() {
    surf = document.getElementById("surf").value;
    vol = document.getElementById("vol").value;
    surf = Number(surf);
    vol = Number(vol);
    if (cylinder.volume == vol) {
        document.getElementById("checkVol").src = "style/img/right.jpg";
    } else {
        document.getElementById("checkVol").src = "style/img/wrong.jpg";
    }
    if (cylinder.surface == surf) {
        document.getElementById("checkSurf").src = "style/img/right.jpg";
    } else {
        document.getElementById("checkSurf").src = "style/img/wrong.jpg";
    }
}
// Showing answers
function giveUp() {
    document.getElementById("solutions").innerHTML = "The volume is about " + cylinder.volume +
        " cm<sup>3</sup> and the surface area is about " + cylinder.surface + " cm<sup>2</sup>.";
}

// Generate new problem
function generate() {
    location.reload();
}