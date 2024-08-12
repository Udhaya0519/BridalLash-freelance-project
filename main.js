const menuBar = document.querySelector(".bridal-lash-wrapper >div:nth-child(3)")
const ToSlideLeft = document.querySelector(".bridal-lash-wrapper>nav ")
const links = document.querySelectorAll(".bridal-lash-wrapper>nav>li>a")
const mediaQuery = window.matchMedia("(max-width:1200px)")
let a = false
function handleMediaQuery(e) {
    if (e.matches === true) {
        menuBar.addEventListener("click", () => {
            a = !a
            if (a === true) {
                ToSlideLeft.style.left = "-10%"
                ToSlideLeft.style.transition = "0.7s"

            } else if (a == false) {
                ToSlideLeft.style.left = "-100%"
                ToSlideLeft.style.transition = "1s"

            }

        })
        links.forEach((el) => {
            el.addEventListener("click", () => {
                a = !a
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



// Item Control

const ItemCtrl = (function () {
    const item = function (id, img, title, price) {
        this.id = id;
        this.img = img;
        this.title = title;
        this.price = price;
    }
    const data = {
        items: [],
        totalMoney: 0
    }
    return {
        getItem: function () {
            return data
        },
        setItem: function (title, price, img) {
            let Id;
            if (data.items.length > 0) {
                Id = data.items[data.items.length - 1].id + 1;
            } else {
                Id = 0;
            }

            const added = new item(Id, img, title, price);
            data.items.push(added);

        }
        ,
        removeItem: function (id) {
            if (data.items.length > 0) {


                return data.items.splice(id, 1)

            } else {
                return data.items = []
            }

        },
        moneyUpdate: function (val) {
            let money = 0
            if (data.items.length > 0) {
                data.items.forEach((el) => {
                    var toChange1 = el.price.split(",")
                    var toChange2 = toChange1.join("")
                    var price = parseInt(toChange2)
                    money += price


                })


                if (val != undefined) {
                    data.totalMoney = money * val

                } else {
                    data.totalMoney = money

                }
            } else if(data.items.length === 0){
                data.totalMoney =0

            }



        },

    }
})()

// UI control

const UICtrl = (function () {
    return {
        UITotalMoney: function (data) {
            var n = document.querySelectorAll(".list-wrapper ")


            document.querySelector(".amount").innerText = data.totalMoney

        },
        UIAddItem: function (title, price, img, data) {
            let Id;
            data.items.forEach((el) => {
                Id = el.id
            })



            if (document.getElementById(`item-${Id}`)) {
                console.log(document.getElementById(`item-${Id}`));

            }
            const div = document.createElement("div")
            div.id = `item-${Id}`
            div.innerHTML = `
                             
                              <div>
                                <img width="100%" height="100%" src=${img} alt="">
                            </div>
                            <div>
                                <div>
                                    <h4>${title}</h4>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgba(249,195,82,1)"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.5003 8C13.8278 8.43606 14.0625 8.94584 14.175 9.5H16V11H14.175C13.8275 12.7117 12.3142 14 10.5 14H10.3107L14.0303 17.7197L12.9697 18.7803L8 13.8107V12.5H10.5C11.4797 12.5 12.3131 11.8739 12.622 11H8V9.5H12.622C12.3131 8.62611 11.4797 8 10.5 8H8V6.5H16V8H13.5003Z"></path></svg>
                                        <span>${price}</span>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <svg class="minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M5 11V13H19V11H5Z"></path></svg>
                                        <span class="quantity">1</span>
                                        <svg class="plus"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
                                    </div>
                                    <span class="remove">Remove</span>
                                </div>
        
                            </div>
                        `
            document.querySelector(".list-wrapper").appendChild(div)
        },
        UIRemoveItem: function (idnum) {
            document.querySelectorAll(".list-wrapper >div").forEach((el) => {

                if (el.id === `item-${idnum}`) {

                    el.remove()
                }


            })
        },
        alertshow: function () {
            var alert = document.querySelector(".alert")
            alert.style.display = "flex"
            setTimeout(() => {
                alert.style.display = "none"

            }, 3000);
        },
        alertdanger: function () {
            document.querySelector(".alert").style.backgroundColor = "#ffcccb"
            document.querySelector(".alert").style.borderLeft = "8px solid red"
            document.querySelector(".msg").innerText = "Deleted sucessful!y"
            document.querySelector(".alert>div >svg:nth-child(1) ").style.color = "red"
            document.querySelector(".alert>div>div >svg:nth-child(1)").style.color = "red"

        },
        alertSuccess: function () {
            document.querySelector(".alert").style.backgroundColor = "#d4edda"
            document.querySelector(".alert").style.borderLeft = " 8px solid #28a745"
            document.querySelector(".msg").innerText = "Added successful!y"
            document.querySelector(".alert>div >svg:nth-child(1) ").style.color = "#28a745"
            document.querySelector(".alert>div>div >svg:nth-child(1)").style.color = "#28a745"
        },
        showsection:function(){
            document.querySelector(".list").style.display ="block"

        },
        hidesection:function(data){
             if( data.items.length ===0){
            document.querySelector(".list").style.display ="none"
             }
        }

    }

})()




// App Control

const AppCtrl = (function () {
    function loadEventListener() {
        document.querySelectorAll("section").forEach((el) => {
            el.addEventListener("click", (e) => {
                if (e.target.className === "addToList") {
                    const title = e.target.parentElement.children[1].innerText
                    const UIprice = e.target.parentElement.children[2].innerText
                    const img = e.target.parentElement.children[0].children[0].getAttribute('src')
                    ItemCtrl.setItem(title, UIprice, img)
                    ItemCtrl.moneyUpdate()
                    UICtrl.UITotalMoney(ItemCtrl.getItem())
                    UICtrl.UIAddItem(title, UIprice, img, ItemCtrl.getItem())
                    UICtrl.alertSuccess()
                    UICtrl.alertshow()
                  UICtrl.showsection()
                }
            })
        })

        document.addEventListener("DOMContentLoaded", function () {
            const removebtn = document.querySelector(".list-wrapper")

            removebtn.addEventListener("click", (e) => {
                if (e.target.className === "remove") {
                    var UiId = e.target.parentElement.parentElement.parentElement.id
                    let stringNumber = UiId.split("-")
                    let IdNumber = parseInt(stringNumber[1])
                    ItemCtrl.removeItem(IdNumber)
                    UICtrl.UIRemoveItem(IdNumber)
                    ItemCtrl.moneyUpdate()
                    UICtrl.UITotalMoney(ItemCtrl.getItem())
                    UICtrl.alertdanger()
                    UICtrl.alertshow()
                   UICtrl.hidesection(ItemCtrl.getItem())
                }


                if (e.target.className.baseVal === "minus" && parseInt(e.target.parentElement.children[1].innerText) > 1) {
                    let val = parseInt(e.target.parentElement.children[1].innerText);
                    val -= 1;
                    ItemCtrl.moneyUpdate(val)
                    e.target.parentElement.children[1].innerText = val;
                    UICtrl.UITotalMoney(ItemCtrl.getItem())
                } else if (e.target.className.baseVal === "plus") {
                    let val = parseInt(e.target.parentElement.children[1].innerText)
                    val += 1
                    ItemCtrl.moneyUpdate(val)
                    e.target.parentElement.children[1].innerText = val
                    UICtrl.UITotalMoney(ItemCtrl.getItem())

                }


            });
        })

        document.querySelector(".alert>div >svg:nth-child(1)").addEventListener("click", () => {
            var alert = document.querySelector(".alert")
            alert.style.display = "none"


        })

    }



    return {
        start: function () {
            loadEventListener()

        }


    }

})()

AppCtrl.start()









