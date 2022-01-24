// let checkbox = document.querySelector('input[name="theme"]');
// let htmlElement = document.documentElement;

// why we not get id  here instead of input name theme


// checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {

//         //function call method

//         smoothTrans();
//         htmlElement.setAttribute("data-theme", "dark");
//     }
//     else{
//         smoothTrans();
//         htmlElement.setAttribute("data-theme", "light");
//     }
// });

// //function defined

// let smoothTrans = () => {
//     htmlElement.classList.add("transition");

//    // settimeout method 1000milisec = 1sec 
//    //1000 is the time of  settime out 1000 means 1s
//    // we cxant define value here in direct seconds
//    //settimeout automatically remove class after completeing  this time which given

//     window.setTimeout(() => {
//         htmlElement.classList.remove("transition");
//     }, 5000);
// };


let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;

checkbox.addEventListener("change", () => {
    if(checkbox.checked){
        smoothTrans();
        htmlElement.setAttribute("data-theme", "dark");
    }
    else{
        smoothTrans();
        htmlElement.setAttribute("data-theme", "light");
    }

});


let smoothTrans = () => {
   htmlElement.classList.add("transition");
   window.setTimeout(() => {
       htmlElement.classList.remove("transition");
   }, 5000);
};