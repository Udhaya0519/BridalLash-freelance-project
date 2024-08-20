// Item control

const ItemCtrl = (function () {
    return {

    }
})()



const UICtrl = (function () {

})()



const AppCtrl = (function () {
    function loadEventListener() {
        //  event for  edit  
        var boxWrapper = document.querySelectorAll(".box-wrapper")
        boxWrapper.forEach((el) => {
            el.addEventListener("click", (e) => {
                if (e.target.className.baseVal === "edit") {
                    var oldElement = e.target.parentElement.children[0]



                    var newElement = document.createElement("input");
                    newElement.className = "inputbox";

                    // Make sure the container contains the oldElement
                    var container = oldElement.parentElement;

                    // Replace oldElement with newElement
                    container.replaceChild(newElement, oldElement);

                }
            })

        })

        // event for savechanges
        var boxWrapper = document.querySelectorAll(".box-wrapper")
        boxWrapper.forEach((el) => {
            el.addEventListener("click", (e) => {
                if (e.target.className === "save") {
                    var oldElement = e.target.parentElement.parentElement.parentElement.children[2].children[0]
                    var value = oldElement.value
                    var newElement = document.createElement("span")
                    newElement.innerText = value
                    var container = oldElement.parentElement;
                    container.replaceChild(newElement, oldElement);
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