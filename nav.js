function nav() {
    var x = document.getElementsByClassName("hide")
  
    
     for (let i = 0; i< x.length;i++){
        if (x[i].style.display==="none"){
         x[i].style.display="block"

        }else{
            x[i].style.display="none"

        }

    } 
    }
  
    const width = document.querySelector("#width span")
    window.onload = function() {
       
        my_width = window.innerWidth;
 
    };
    

    window.onresize = function() {
           my_width = window.innerWidth;
           var x = document.getElementsByClassName("hide")
                if (my_width>600){ 
                    for (let i = 0; i< x.length;i++){
                        if (x[i].style.display==="none"){
                        x[i].style.display="block"}}}
                    
                if (my_width<600){
                
                    for (let i = 0; i< x.length;i++){
                             x[i].style.display="none"
}}}