const startslide = ()=>{
    const slidebutton= document.querySelectorAll(".before-slide .after.slide");
     slidebutton.forEach(button => {

        button.addEventListener("click",()=>{
            console.log(button)
        })
        
     });

}
window.addEventListener("load", startslide);