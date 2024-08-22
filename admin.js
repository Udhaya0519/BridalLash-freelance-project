function encodeData(data) {
    return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}

function decodeData(encodedData) {
    return decodeURIComponent(escape(atob(encodedData)));
}







let package = JSON.parse(localStorage.getItem("package")) || [];
let customize = JSON.parse(localStorage.getItem("customize")) || []
let details = [{
  name:"stalin",
  password:"123456",
 contact:"7639097966"
}]


localStorage.setItem("details", btoa(JSON.stringify(details)))







const AppCtrl = (function () {
    function loadEventListener() {
        //  event for  editbtn
        var boxWrapper = document.querySelectorAll(".box-wrapper")
        boxWrapper.forEach((el) => {
            el.addEventListener("click", (e) => {
                if (e.target.className.baseVal === "edit") {
                    var oldElement = e.target.parentElement.parentElement.children[0].children[1]
                    var newElement = document.createElement("input");
                    newElement.className = "inputbox";
                    newElement.placeholder = "Price"
                    newElement.type = "number"
                    var container = oldElement.parentElement;
                    container.replaceChild(newElement, oldElement);
                }

                // event for packagesave btn      
                if (e.target.className === "save") {
                    let userPrice = e.target.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[1]
                    var enteredValue = userPrice.value


                    if (enteredValue.length > 0) {
                        var oldElement = document.querySelector(".inputbox")
                        var newElement = document.createElement("span");
                  let imgElement  =  e.target.parentElement.parentElement.parentElement.children[0].children[0]
                        let imgSrc = imgElement.getAttribute('src');   
                    let name = e.target.parentElement.parentElement.parentElement.children[1].children[0].innerText    
                        
                        var temp = {
                            id: e.target.parentElement.parentElement.id,
                            price: enteredValue,
                           img:imgSrc,
                           title:name
                        }

                        let exist = false
                        package.forEach((el) => {
                            if (el.id === temp.id) {
                                exist = true
                                el.price = temp.price
                                 console.log(package)
                            }
                        })
                        if (!exist) {
                            package.push(temp)
                            
                        }
                        newElement.innerText = temp.price
                        var container = oldElement.parentElement;
                        container.replaceChild(newElement, oldElement);
                        
                        
                        localStorage.setItem("package", JSON.stringify(package))
                    } else {
                        var oldElement = document.querySelector(".inputbox")
                        var newElement = document.createElement("span");
                        newElement.innerText = 0
                        var container = oldElement.parentElement;
                        container.replaceChild(newElement, oldElement);
                    }
                }

              //  event customize save btn
              if (e.target.className === "savecustomize") {
                let userPrice = e.target.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[1]
                var enteredValue = userPrice.value


                if (enteredValue.length > 0) {
                    var oldElement = document.querySelector(".inputbox")
                    var newElement = document.createElement("span");
              let imgElement  =  e.target.parentElement.parentElement.parentElement.children[0].children[0]
                    let imgSrc = imgElement.getAttribute('src');   
                let name = e.target.parentElement.parentElement.parentElement.children[1].children[0].innerText    
                    
                    var temp = {
                        id: e.target.parentElement.parentElement.id,
                        price: enteredValue,
                       img:imgSrc,
                       title:name
                    }

                    let exist = false
                    customize.forEach((el) => {
                        if (el.id === temp.id) {
                            exist = true
                            el.price = temp.price
                        }
                    })
                    if (!exist) {
                        customize.push(temp)
                        
                    }
                    newElement.innerText = temp.price
                    var container = oldElement.parentElement;
                    container.replaceChild(newElement, oldElement);
                    
                    
                    localStorage.setItem("customize", JSON.stringify(customize))
                } else {
                    var oldElement = document.querySelector(".inputbox")
                    var newElement = document.createElement("span");
                    newElement.innerText = 0
                    var container = oldElement.parentElement;
                    container.replaceChild(newElement, oldElement);
                }
            }


            })
        })







    }

    return {
        start: function () {


            loadEventListener()
        }
    }

})()

AppCtrl.start()


var user = document.querySelector(".username")
var password = document.querySelector(".password")
var login = document.querySelector(".login")



var encodedDetails = localStorage.getItem("details")
const jsonString = atob(encodedDetails);

// Parse the JSON string back into an object
const decodedDetails = JSON.parse(jsonString);


login.addEventListener("click", (e) => {
    e.preventDefault()
    if (user.value === decodedDetails[0].name && password.value === decodedDetails[0].password) {
        var box = document.querySelectorAll(".box")
        box.forEach((el) => {
            el.style.display = "block"
        })
        var bridallash = document.querySelector(".bridal-lash")
        bridallash.style.display = "block"
        var popup = document.querySelector(".popup")
        popup.style.display = "none"


    }

})


 



 window.onload =()=>{

   
    let  package = JSON.parse(localStorage.getItem("package"))   
let output=''
var boxWrapper1 = document.querySelector("#package")


     package.forEach(el => {
  output +=`  <div>
                    <div>
                        <img width="100%" height="100%" src=${el.img} alt="">
                    </div>
                    <div>
                        <h1>${el.title}</h1>
                        <div>
                            <div>
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgba(249,195,82,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z"></path></svg>
                             <span class="price">${el.price}</span>
                            </div>
                             <div>
                                <svg  class="edit"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.7574 2.99677L14.7574 4.99677H5V18.9968H19V9.23941L21 7.23941V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99677C3 3.44448 3.44772 2.99677 4 2.99677H16.7574ZM20.4853 2.09727L21.8995 3.51149L12.7071 12.7039L11.2954 12.7063L11.2929 11.2897L20.4853 2.09727Z"></path></svg>
                             </div>                                
                         </div>
                      </div>
                          <div id=${el.id}>
                            <button><a href="#" class="save">SAVE CHANGES</a></button>
                          </div>           
                  </div>`
       })
       boxWrapper1.innerHTML = output
       
    let  customize = JSON.parse(localStorage.getItem("customize"))   
    let output1=''
    var boxWrapper2 = document.querySelector("#customize")
    customize.forEach(el => {
        output1 +=`  <div>
                          <div>
                              <img width="100%" height="100%" src=${el.img} alt="">
                          </div>
                          <div>
                              <h1>${el.title}</h1>
                              <div>
                                  <div>
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgba(249,195,82,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z"></path></svg>
                                   <span class="price">${el.price}</span>
                                  </div>
                                   <div>
                                      <svg  class="edit"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M16.7574 2.99677L14.7574 4.99677H5V18.9968H19V9.23941L21 7.23941V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99677C3 3.44448 3.44772 2.99677 4 2.99677H16.7574ZM20.4853 2.09727L21.8995 3.51149L12.7071 12.7039L11.2954 12.7063L11.2929 11.2897L20.4853 2.09727Z"></path></svg>
                                   </div>                                
                               </div>
                            </div>
                                <div id=${el.id}>
                                  <button><a href="#" class="savecustomize">SAVE CHANGES</a></button>
                                </div>           
                        </div>`
             })
             boxWrapper2.innerHTML = output1
    }











var xmark = document.querySelector(".xmark")
xmark.addEventListener("click", () => {
    window.location.href = "index.html"
})



document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
