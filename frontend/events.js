let home=document.querySelector("#home_a");
let events=document.querySelector("#event_a");
let feedback=document.querySelector("#feedback_a");
let review=document.querySelector("#review_a");
let about=document.querySelector("#about_a");



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
/* */
let sendfeedback=document.querySelectorAll(".btn");
console.log(sendfeedback);
for(let i=0;i<sendfeedback.length;i++){
    sendfeedback[i].addEventListener("click",function(){
        let event=sendfeedback[i].dataset.event;

        localStorage.setItem(
            "selectedevent",event
        );

        window.location.href="feedback.html";
    })
}