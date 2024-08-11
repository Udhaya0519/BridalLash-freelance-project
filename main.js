const menuBar = document.querySelector(".bridal-lash-wrapper >div:nth-child(3)")
const ToSlideLeft = document.querySelector(".bridal-lash-wrapper>nav ")
const links = document.querySelectorAll(".bridal-lash-wrapper>nav>li>a")
const mediaQuery = window.matchMedia("(max-width:1200px)")
let a =false
function handleMediaQuery(e) {
    if (e.matches === true) {
        menuBar.addEventListener("click", () => {
          a=!a
          if(a===true){
           ToSlideLeft.style.left = "-10%"
            ToSlideLeft.style.transition = "0.7s"
            
          } else if(a==false){
               ToSlideLeft.style.left = "-100%"
                ToSlideLeft.style.transition = "1s"
            
          }
          
        })
        links.forEach((el) => {
            el.addEventListener("click", () => {
                ToSlideLeft.style.left = "-100%"
                ToSlideLeft.style.transition = "1s"

            })
        })
    }


}

handleMediaQuery(mediaQuery)
mediaQuery.addEventListener("change", handleMediaQuery)




links.forEach((el) => {
    el.addEventListener("click", () => {
        document.querySelectorAll(".bridal-lash-wrapper>nav>li>a").forEach(el => el.style.color = "#ffffff")
        el.style.color = "#f9c352"
        el.style.transition = "0.4s"


    })
})     