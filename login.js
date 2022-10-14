const passwordFunction = function() {
  let pass_input = document.getElementById('psw').value;
  let password = pass_input;

  switch (password) {
    case "js_password":
      alert("Successfully Logged in!");
      break;

      default:
        alert("Wrong password!");
        location.reload();
        break;
  }
};