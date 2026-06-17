
let home=document.querySelector("#home_a");
let events=document.querySelector("#event_a");
let feedback=document.querySelector("#feedback_a");
let review=document.querySelector("#review_a");
let about=document.querySelector("#about_a");


let getstart=document.querySelector("#getstarted");
let sendfeedback=document.querySelector("#submitfeedback");
let exploreevents=document.querySelector("#exploreevent");

home.addEventListener("click",function(){
    window.location.href="home.html";
})
events.addEventListener("click",function(){
    window.location.href="events.html";
})
feedback.addEventListener("click",function(){
    window.location.href="feedback.html";
})
review.addEventListener("click",function(){
    window.location.href="review.html";
})

getstart.addEventListener("click",function(){
    window.location.href="events.html";
})
exploreevents.addEventListener("click",function(){
    window.location.href="events.html";
})
sendfeedback.addEventListener("click",function(){
    window.location.href="feedback.html";
})