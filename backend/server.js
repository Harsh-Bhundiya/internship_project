const express=require("express");
const mongoose=require("mongoose");
const feedback=require("./models/schema.js");
const methodOverride = require("method-override");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/feedback");
}
main()
.then(function(){
    console.log("connection esatablished");
})
.catch(function(errr){
    console.log(errr);
})
app.set("view engine","ejs");
app.use(express.static("public"));


let port=8080;

app.listen(port,function(){
    console.log("app is listning");
})
app.get("/home",function(req,res){
    res.send("server is on");
})
app.get("/feedback",async function(req,res){
    let event=req.query.eventname;
    let events=await feedback.find({eventname:event});
    console.log(events);
    let avgrating=findavaragerating(events);
    let postivefeedback=findpostivefeedback(events);
    let totalfeedback=events.length;
    let distribution=finddistribution(events);
    res.send({
        events: events,
        avgrating: avgrating,
        positivefeedback: postivefeedback,
        totalfeedback: totalfeedback,
        distribution:distribution
    });
})

app.post("/feedback", async function(req,res){
    let newfeedback=new feedback();
    newfeedback.name=req.body.name;
    newfeedback.eventname=req.body.eventname;
    newfeedback.email=req.body.email;
    newfeedback.rating=req.body.rating;
    newfeedback.msg=req.body.msg;

    console.log("before save");
    await newfeedback.save();
    console.log("after save");
    res.send("feedback send successfully");
    console.log(req.body);
})

function findavaragerating(data){
    if(data.length==0){
        return 0;
    }
    let sum=0;
    for(let i=0;i<data.length;i++){
        sum+=data[i].rating;
    }
    return sum/data.length;
}
function findpostivefeedback(data){
    if(data.length==0){
        return 0;
    }
    let sumgt4=0;
    let sumeq3=0;
    for(let i=0;i<data.length;i++){
        if(data[i].rating>=4){
            sumgt4++;
        }
        if(data[i].rating==3){
            sumeq3++;
        }
    }
    let positivefeedback=sumgt4+(sumeq3/2);
    return ((positivefeedback/data.length)*100).toFixed(0);
}
function finddistribution(data){
    let distribution = {
        star5: 0,
        star4: 0,
        star3: 0,
        star2: 0,
        star1: 0
    };

    for(let i=0;i<data.length;i++){

        if(data[i].rating == 5){
            distribution.star5++;
        }
        else if(data[i].rating == 4){
            distribution.star4++;
        }
        else if(data[i].rating == 3){
            distribution.star3++;
        }
        else if(data[i].rating == 2){
            distribution.star2++;
        }
        else if(data[i].rating == 1){
            distribution.star1++;
        }

    }

    return distribution;
}
