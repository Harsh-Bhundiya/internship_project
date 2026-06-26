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
/*  */
let selectedevent=localStorage.getItem("selectedevent");
let dropdown=document.querySelector("#eventselector");
let selectedrating=0;
if(selectedevent !== null){
    dropdown.value = selectedevent;
}
else{
    dropdown.value=selectedevent;
}


let stars=document.querySelectorAll(".star");

for(let i=0;i<stars.length;i++){
    console.log("click");
    stars[i].addEventListener("click",function(){
        selectedrating=i+1;
    //first remove all
    for(let k=0;k<stars.length;k++){
        stars[k].innerHTML="&#9734";
        stars[k].classList.remove("active");
    }
    
        for(let j=i;j>=0;j--){
            stars[j].innerHTML="&#9733";
            stars[j].classList.add("active");
        }
    })
}

let submit=document.querySelector("#submit_btn");

submit.addEventListener("click",async function(){
    let data={
        name:document.querySelector("#username").value,
        email:document.querySelector("#email").value,
        msg:document.querySelector("#specific").value,
        rating:selectedrating,
        eventname:document.querySelector("#eventselector").value,
    };
    if(data.name==="" || data.name===" "){
        alert("name is required");
        return;
    }
    if(data.email==="" || data.email===" "){
        alert("email is required");
        return;
    }
    if(data.msg==="" || data.msg===" "){
        alert("feedback is required");
        return;
    }

    await fetch("http://localhost:8080/feedback",
        {
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }
    )
    alert("your response is saved");
    
})
