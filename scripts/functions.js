function changeColor(button_type) {
  const button = document.getElementById("link-button-" + button_type);

    if (button.style.backgroundColor === "rgb(227, 166, 58)")
      button.style.backgroundColor = "rgb(243, 243, 243)";
    else 
      button.style.backgroundColor = "rgb(227, 166, 58)";

}