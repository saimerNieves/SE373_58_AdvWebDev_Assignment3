//ROUTER


const express = require('express') //importing express from express
const expressHandleBars = require('express-handlebars') //import express from expressHandlebars
const port = process.env.port || 3000 //adjusts based on the environment being used on
const app = express()

//set our view engine
//Expres templates do it for you

//Engine configurations*******************************
app.engine("hbs", expressHandleBars.engine({
    defaultLayout:"main",
    extname:".hbs",
    helpers:{ //helpers are functions we can use to help us
        getShortComment(comment){
            if(comment.length < 60){
                return comment;
            }
            else{
                return comment.substring(0, 60) + "...";
            }
        }
    }
})) //what engine we will be using

app.set("view engine", "hbs") //sets the engine

//2 parameters are route and callback function
app.get("/",(request,response)=>{ //route to render the page

    //render html page home
    response.render("home_Template", {
        posts:[
            {  //Passing in variables here an object of variables
                author:"Saimer Mil Nieves",
                image:"https://picsum.photos/500/500",
                comments:["comment 1", "comment 2", "Voluptate nulla enim exercitation officia aliquip voluptate. Qui qui cupidatat id qui laborum elit labore voluptate anim sit velit id. Dolore amet incididunt nisi esse labore adipisicing incididunt culpa commodo."]
            },
            {  //Passing in variables here an object of variables
                author:"Mil House",
                image:"https://picsum.photos/500/500?2",
                comments:[]
            },
            {  //Passing in variables here an object of variables
                author:"Elun Musk",
                image:"https://picsum.photos/500/500?3",
                comments:["Nice Pic", "Qui eu occaecat esse velit cillum fugiat eiusmod ullamco. Dolore ipsum culpa Lorem quis minim ut esse in id excepteur fugiat aute. Commodo consequat elit Lorem magna id nostrud in deserunt sit.", "Awesome ! "]
            }
        ]
    }
        )
})

//setup port for connection 
app.listen(port, ()=>{

    console.log("Connected on port 3005")
})