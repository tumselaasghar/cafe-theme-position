// for get id name from html in varaibles means get class and store it in varaible

const bar = document.getElementById("bars");
const cross = document.getElementById("cross");
const navbar = document.getElementById("navbar");

// now add addevent listener means click drag whatever u what ever u want
// then add class where to add class active and then remove class from cross
// class

bar.addEventListener("click", () =>{
    // console.log("tamsila");
    navbar.classList.add("active")
    // bar.classList.add("remove")

})
cross.addEventListener("click", () =>{
    // console.log("tamsila");
    navbar.classList.remove("active")
})


