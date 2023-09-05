let li = document.querySelectorAll("li");
let navbarBtn = document.querySelector("#navbarBtn");
let navbar = document.querySelector("#navbar");
let hide = document.querySelector("#hide");

let days = document.querySelector("#days");
let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");

li.forEach(items =>{
    items.addEventListener("click" , ()=>{
        
        li.forEach(remove =>{
            remove.classList.remove("active");
        });       
    
        items.classList.add("active");
    });
});

navbarBtn.addEventListener("click" , ()=>{
    navbar.style.display = "grid";
});


hide.addEventListener("click" , ()=>{
    navbar.style.display = "none";
});


let countdown = new Date("oct 14, 2023 10:30:00").getTime();


let interval = setInterval(()=>{


let now = new Date().getTime();

let distance = countdown - now;

// time calculation for days, hours minutes and seconds 
// mili seconds in 1 second = 1000;
// seconds in 1 minute = 60
// minutes in 1 hour = 60
// hours in 1 day = 24
let day = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
let seconds = Math.floor(distance % (1000 * 60) / 1000);


days.innerHTML = day + "<b>d</b>";
hrs.innerHTML = hours + "<b>h</b>";
mins.innerHTML = minutes + "<b>m</b>";
secs.innerHTML = seconds + "<b>s</b>";

if(distance < 0){
    clearInterval(interval);
    // change text
}
},1000);