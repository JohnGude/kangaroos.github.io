import {kangaroo_team_profiles} from "./text.js";
import {industry_data} from "./text.js";
import {career_profiling} from "./text.js";
import {it_technologies} from "./text.js";
import {team_project} from "./text.js";
import {meetings} from "./text.js";
import {team_reflections} from "./text.js";
import {contacts} from "./text.js";



const pages = ["kangaroo_team_profiles","industry_data","career_profiling","it_technologies","team_project","meetings","team_reflections","contacts"]
const imports = [kangaroo_team_profiles,industry_data,career_profiling,it_technologies,team_project,meetings,team_reflections,contacts]

let element = document.getElementById("kangaroo_team_profiles");
element.classList.add("active")
document.getElementById("display_text").innerHTML = imports[0]





    window.onclick = e => {
    
        try{
        let element = document.getElementById(e.target.id).classList;
       // console.log(e.target.id)

        let index = 0
        while (index< pages.length){
           if (e.target.id == pages[index] && (e.target.id != "")){

        class_list() 
        element.add("active");
        contents(e.target.id)
        } index++
    
    }}
        catch(err){
        //   console.log("The Error is:"+ err)

        }

    }

    //Add page contents
    let contents =(target)=>{

        let index = 0
        
        while (index< pages.length){
            if (target===pages[index]){
                document.getElementById("display_text").innerHTML = imports[index]
                break
            }
        index ++
        
        }
    }
    
    //removes active page high lighted
    let class_list =()=>{
        const actives = document.querySelectorAll(".active");
    for (let i = 0; i< actives.length;i++){
        actives[i].classList.remove("active")
    }}

