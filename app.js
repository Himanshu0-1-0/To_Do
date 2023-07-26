const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.set('view engine',"ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
var items =[];

app.get("/",function(req,res){
    res.render("list",{New_Item:items});
});

app.post("/",function(req,res){
    if(req.body.Input){
        item = req.body.Input;
        if(item != ""){
        items.push(item);
        }
    }
    if(req.body.inp2){
        const a = req.body.inp2;
        var i;
        for(i=0;i<items.length;i++){
            if(items[i]===a){
                break;
            }
        }
        if(i<items.length){
            items.splice(i,1);
        }
    }
    res.redirect("/");
});

app.listen(process.env.PORT||3000,function(){
    console.log("Server Started on port 3000");
});
