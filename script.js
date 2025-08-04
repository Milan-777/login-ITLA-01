function stop(event) {
  event.preventDefault();
  success();
}

function success() {
  const inputs = document.querySelectorAll(".F .L input");
  inputs.forEach(input => {
    input.value = ""; // Clear each input field
  });
}









const outbox = document.querySelector(".wrraper");
const loginform = document.querySelector(".loginform");
const signupform = document.querySelector(".signupform");
// function show(){
//     document.querySelector(".wrraper").style.transform = "scale(1)";
// }

/*alternative*/

function show() {
  outbox.style.height = "400px";
  loginform.style.left = "0px";
  signupform.style.left = "400px";

  outbox.style.transform = "scale(0)";
  outbox.style.transition = "transform .2s ease";
  setTimeout(() => {
    outbox.style.transform = "scale(1)";
  }, 300);
}





document.querySelector(".icon").addEventListener("click", () => {
  outbox.style.transform = "scale(0)";
  outbox.style.transition = "transform .3s ease";
});

document.querySelector(".signuplink a").addEventListener("click", () => {
  outbox.style.height = "450px";
  outbox.style.transition = "height .3s ease";
  loginform.style.left = "-400px";
  signupform.style.left = "0px";
});

document.querySelector(".loginlink a").addEventListener("click", () => {
  outbox.style.height = "400px";
  outbox.style.transition = "height .3s ease";
  loginform.style.left = "0px";
  signupform.style.left = "400px";
});




// document.querySelector(".F form").addEventListener("submit", function () {
//   const name = document.querySelector(".loginform .username input").value.trim();
//   const passs = document.querySelector(".loginform .password input").value.trim();
//   const uname = document.querySelector(".signupform .username input").value.trim();
//   const passss = document.querySelector(".loginform .password input").value.trim();
//   const email = document.querySelector(".loginform .gmail input").value.trim(); 

//   if (!name || !email || !passs || !uname || !passss) {
//     alert("Please fill out all fields.");
//   } else {
//     // Here you can add form submission logic if all fields are filled
//     alert("Form submitted successfully!");
//   }
// });


              // ???????????????????????????????????????????????

// now i want a new thing that is that if user fill any fild & if there is atleaast 1 fileld is empty at that time if user press enter or submit button the filled out filleds get erased i dnt want it i want them stay & pop up a sms that please fill out other fileds.