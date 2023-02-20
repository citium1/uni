/* Date ------------------------------------------- */

const date = new Date(); //object of date()
y = date.getFullYear();
m = date.getMonth();
d = date.getDate();

let month = '';
switch (m) {
    case 0:
        month = '01';
        break;
    case 1:
        month = '02';
        break;
    case 2:
        month = '03';
        break;
    case 3:
        month = '04';
        break;
    case 4:
        month = '05';
        break;
    case 5:
        month = '06';
        break;
    case 6:
        month = '07';
        break;
    case 7:
        month = '08';
        break;
    case 8:
        month = '09';
        break;
    case 8:
        month = '09';
        break;
    case 9:
        month = '10';
        break;
    case 10:
        month = '11';
        break;
    case 11:
        month = '12';
        break;
    default:
        break;
}

document.getElementById("date").innerHTML = `Senast uppdaterat: ${y}-${month}-${d}`;

/* Mobile Menu ------------------------------------------- */

// function toggle() {
//     var menu = document.getElementById("menu");
//     menu.classList.toggle("hide");

// }


/* FOCUS FORM ------------------------------------ */

function focusFunction(x) {
    x.style.background = "#b58de8";
    console.log(x)
  }

/* Slideshow ------------------------------------------- */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);

}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("news-article");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* COUNTER --------------------------------------- */

class CountDown {
    constructor(expiredDate, onRender, onComplete) {
        this.setExpiredDate(expiredDate);
        this.onRender = onRender;
        this.onComplete = onComplete;
    }

    setExpiredDate(expiredDate) {
        const currentTime = new Date().getTime();
        this.timeRemaining = expiredDate.getTime() - currentTime;
        this.timeRemaining > 0 ?
            this.start() :
            this.complete();
    }

    complete() {
        if (typeof this.onComplete === 'function') {
            onComplete();
        }
    }

    getTime() {
        return {
            hours: Math.floor(this.timeRemaining / 1000 / 60 / 60) % 24,
            minutes: Math.floor(this.timeRemaining / 1000 / 60) % 60,
            seconds: Math.floor(this.timeRemaining / 1000) % 60,
            days: Math.floor(this.timeRemaining / 1000 / 60 / 60 / 24)
        }
    }


    update() {
        if (typeof this.onRender === 'function') {
            this.onRender(this.getTime());
        }

    }

    start() {
        this.update();

        const intervalId = setInterval(() => {
            this.timeRemaining -= 1000;

            if (this.timeRemaining < 0) {
                complete();

                clearInterval(intervalId);
            } else {
                this.update();
            }
        }, 1000);
    }
}


document.getElementById("date").innerHTML = `Senast uppdaterat: ${y}-${month}-${d}`;

const app = document.getElementById("timer");

//Set the end date
const getFinalTime = () => {
    const expiredDate = new Date('2023-03-21T17:00:00')
    // Tid kursen slutar :D
    return expiredDate;
};

//format date
const format = (t) => {
    return t < 10 ? '0' + t : t;
};

//Render count down
const render = (time) => {
    
   app.innerHTML =  `<div class="timer-render">
   <div class="dagar">
       <h1 ">${format(time.days)}</h1>
       <h5>Dagar</h5>
   </div>
   <div class="timmar">
       <h1>${format(time.hours)}</h1>
       <h5>Timmar</h5>
   </div>
   <div class="minuter">
       <h1>${format(time.minutes)}</h1>
       <h5>Minuter</h5>
   </div>
   <div class="sekunder">
       <h1>${format(time.seconds)}</h1>
       <h5>Sekunder</5>
   </div>
</div>`


};

const countDownTimer = new CountDown(
    getFinalTime(),
    render,
);