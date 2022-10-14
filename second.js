let a = (new Date().getDay())

switch (a) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    alert("No valid day!")
    break;
  }


const passFunction = function () {
  let pass = document.getElementById("psw").value;
  let finalPassword = pass;

  switch (finalPassword) {

  case "WD20P-SC":
    alert('Successfully Logged in!');
    break;

  default:
    alert("Wrong password!");
    break;
  }
}