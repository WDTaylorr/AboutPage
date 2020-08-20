let buttons = Array.from(document.getElementsByClassName("aboutBtn"))


buttons.forEach(function(button){
  button.addEventListener("click",function(btn){
    // Make all buttons "invisible"
    buttons.forEach( function(btn) {btn.classList.remove("visibleBtn");btn.classList.add("invisibleBtn")})
    // Make clicked button highlighted
    button.classList.add("visibleBtn")
    button.classList.remove("invisibleBtn")


    // About Sections - Set all sections invisible
    let aboutSections = Array.from(document.getElementsByClassName("about-section"))
    aboutSections.forEach(function(section){
      section.classList.remove("visible")
      section.classList.add("invisible")
    })

    id = button.id
    // Set selected section visible
    if(id == "historyBtn"){
      document.getElementById("history").classList.add("visible")
    }else if(id == "visionBtn"){
      document.getElementById("vision").classList.add("visible")
    }else{
      document.getElementById("goals").classList.add("visible")
    }

  })
})