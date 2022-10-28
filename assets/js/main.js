//Create script to get form data

//Add Listener on DOC
document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  //   Disable auto refresh on form submission
  document
    .getElementById("contactForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      console.log("OK");

      //Get data from form and create object to send to back-end
      const data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };
      console.log(data);

      //Send data
      const response = await axios.post(
        "https://site--form-back--nfqr62d7mh6n.code.run/form",
        data
      );
      console.log(response);
    });
});
