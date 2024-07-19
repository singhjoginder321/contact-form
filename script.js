document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const messageSubject = document.getElementById("messageSubject").value;

    function isValidName(name) {
      for (let i = 0; i < name.length; i++) {
        const char = name[i];
        if (!isLetter(char) && char !== " ") {
          console.log("invalid name");
          return false;
        }
      }
      return true;
    }

    function isLetter(char) {
      return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
    }

    function isValidEmail(email) {
      const atSymbolIndex = email.indexOf("@");
      const dotIndex = email.lastIndexOf(".");

      if (
        atSymbolIndex < 1 ||
        dotIndex <= atSymbolIndex + 1 ||
        dotIndex >= email.length - 1
      ) {
        return false;
      }
      return true;
    }

    function isValidPhoneNumber(phone) {
      for (let i = 0; i < phone.length; i++) {
        if (!isDigit(phone[i])) {
          return false;
        }
      }

      if (phone.length > 10 || phone.length < 10) {
        return false;
      }
      return true;
    }

    function isDigit(char) {
      return char >= "0" && char <= "9";
    }

    if (!isValidName(firstName)) {
      alert("Invalid first name. Only letters and spaces are allowed.");
      isValid = false;
    }

    if (!isValidName(lastName)) {
      alert("Invalid last name. Only letters and spaces are allowed.");
      isValid = false;
    }

    if (!isValidEmail(email)) {
      alert("Invalid email address.");
      isValid = false;
    }

    if (!isValidPhoneNumber(phone)) {
      alert("Invalid phone number!");
      isValid = false;
    }

    if (isValid) {
      const formData = new FormData(this);
      const jsonData = {};
      formData.forEach((value, key) => {
        jsonData[key] = value;
      });
      let result = JSON.stringify(
        jsonData,
        [
          "firstName",
          "lastName",
          "email",
          "phone",
          "message",
          "messageSubject",
        ],
        2
      );
      console.log(JSON.stringify(jsonData, null, 2));

      alert(`Form submitted successfully! \n ${result}`);
      this.reset();
    }
  });
