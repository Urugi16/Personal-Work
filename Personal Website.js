function sendMessage() {
  let message = document.getElementById("message").value;
  if (message.trim() === "") {
      alert("Please enter a message!");
  } else {
      alert("Message sent: " + message);
      document.getElementById("message").value = "";
  }
}

