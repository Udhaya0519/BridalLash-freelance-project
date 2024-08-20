
const AppCtrl = (function () {
    function loadEventListener() {
        //  event for  edit  
        var boxWrapper = document.querySelectorAll(".box-wrapper")
        boxWrapper.forEach((el) => {
            el.addEventListener("click", (e) => {
                if (e.target.className.baseVal === "edit") {
                    var oldElement = e.target.parentElement.parentElement.children[0].children[1]
                    var newElement = document.createElement("input");
                    newElement.className = "inputbox";
                    newElement.placeholder = "Price"
                    newElement.type = "number"
                    // var value = newElement.value


                    // Make sure the container contains the oldElement
                    var container = oldElement.parentElement;

                    // Replace oldElement with newElement
                    container.replaceChild(newElement, oldElement);

                }
            })

        })

        // Event for save changes

        // code working  

        // Event for save changes
        document.querySelectorAll('.box-wrapper').forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                if (e.target.className === 'save') {
                    const input = document.querySelector('.inputbox').value;
                    const newElement = document.createElement('span');
                    newElement.className = 'price';
                    const oldElement = document.querySelector('.inputbox');

                    if (input.length > 0) {
                        const bridaltitle = e.target.parentElement.parentElement.parentElement.children[1].children[0].innerText;
                        const url = new URL(window.location.href);

                        // Retrieve existing parameters
                        let currentInputs = [];
                        let currentTitles = [];

                        if (url.searchParams.has('input')) {
                            try {
                                currentInputs = JSON.parse(decodeURIComponent(atob(url.searchParams.get('input'))));
                            } catch (error) {
                                console.error("Error decoding inputs: ", error);
                            }
                        }

                        if (url.searchParams.has('bridaltitle')) {
                            try {
                                currentTitles = JSON.parse(decodeURIComponent(atob(url.searchParams.get('bridaltitle'))));
                            } catch (error) {
                                console.error("Error decoding titles: ", error);
                            }
                        }

                        // Add new values
                        currentInputs.push(input);
                        currentTitles.push(bridaltitle);

                        // Encrypt and encode parameters
                        const encryptedInputs = btoa(encodeURIComponent(JSON.stringify(currentInputs)));
                        const encryptedTitles = btoa(encodeURIComponent(JSON.stringify(currentTitles)));



                        // Update the UI



                        newElement.innerText = input
                        oldElement.parentElement.replaceChild(newElement, oldElement);

                        // Store parameters in sessionStorage
                        sessionStorage.setItem('input', encryptedInputs);
                        sessionStorage.setItem('bridaltitle', encryptedTitles);
                    } else {
                        newElement.innerText = 0;
                        oldElement.parentElement.replaceChild(newElement, oldElement);
                    }
                }
            });
        });

        // Function to navigate to the client page
        function navigateToClientPage() {
            const encryptedInputs = sessionStorage.getItem('input');
            const encryptedTitles = sessionStorage.getItem('bridaltitle');

            if (encryptedInputs && encryptedTitles) {
                const clientUrl = `index.html?input=${encodeURIComponent(encryptedInputs)}&bridaltitle=${encodeURIComponent(encryptedTitles)}`;
                window.location.href = clientUrl;
            }
        }

        // Event for goClient button
        document.getElementById('goClient').addEventListener('click', e => {
            e.preventDefault();
            navigateToClientPage();
        });

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




login.addEventListener("click", (e) => {
    e.preventDefault()
    if (user.value === "stalin" && password.value === "123456") {
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


var xmark = document.querySelector(".xmark")
xmark.addEventListener("click", () => {
    const encryptedInputs = sessionStorage.getItem('input');
    const encryptedTitles = sessionStorage.getItem('bridaltitle');
    const clientUrl = `index.html?input=${encodeURIComponent(encryptedInputs)}&bridaltitle=${encodeURIComponent(encryptedTitles)}`;
    window.location.href = clientUrl;
})

