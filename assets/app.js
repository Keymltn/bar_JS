let bar = document.querySelector("#box_1")
let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#btn2")
console.log(btn);

btn.addEventListener("click" , () => {
    if(bar.style.display == "none"){
        bar.style.display = "block"
    }

    else{
        bar.style.display = "none"
    }
})
