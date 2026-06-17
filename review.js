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
let evetnselector=document.querySelector("#eventselector");
let reveiwfor=document.querySelector("#reviewfor");
let reviewslist=document.querySelector("#reviews_list");

/*for serching selected event */
evetnselector.addEventListener("change",async function search(){
    let event=evetnselector.value;
    reveiwfor.innerText = event;
    reviewslist.innerHTML = "";


    console.log("rq sending");
    let res=await fetch( `http://localhost:8080/feedback?eventname=${event}`);
    
    let data=await res.json();


    let events=data.events;
    let totalreviews = document.querySelector("#total_reviews");
    let avgrating = document.querySelector("#avg_rating");
    let positivefeedback = document.querySelector("#positive_feedback");

    totalreviews.innerText = data.totalfeedback;

    avgrating.innerText = data.avgrating + " / 5";

    positivefeedback.innerText =
    data.positivefeedback + "%";


    let ratingDistribution =
    document.querySelector("#rating_distribution");

    ratingDistribution.innerHTML = `
    <div class="rating_row">
        <span>5 Star</span>
        <span>${data.distribution.star5}</span>
    </div>

    <div class="rating_row">
        <span>4 Star</span>
        <span>${data.distribution.star4}</span>
    </div>

    <div class="rating_row">
        <span>3 Star</span>
        <span>${data.distribution.star3}</span>
    </div>

    <div class="rating_row">
        <span>2 Star</span>
        <span>${data.distribution.star2}</span>
    </div>

    <div class="rating_row">
        <span>1 Star</span>
        <span>${data.distribution.star1}</span>
    </div>
    `;
    for(let i=0;i<events.length;i++){
        updatehtml(events[i]);
    }
});


    function updatehtml(data){

    let card = document.createElement("div");
    card.classList.add("review_card");

    card.innerHTML = `
    
    <div class="review_top">

        <div class="review_user">

            <div class="avatar">
                ${data.name.slice(0,2).toUpperCase()}
            </div>

            <div class="user_info">
                <h3>${data.name}</h3>
                <p>${data.email}</p>
            </div>

        </div>

        <div class="review_rating">
            ${"⭐".repeat(data.rating)}
        </div>

    </div>

    <p class="review_text">
        ${data.msg}
    </p>

    `;

    reviewslist.append(card);
}

