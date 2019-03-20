window.mds = {
  textField: textField,
  switch: noop,
  checkbox: noop,
  radioButton: noop
};

function textField(element) {
  let selectInput = element.querySelector(".mds-text-field__input");
  let label = element.querySelector(".mds-text-field__label");

  selectInput.addEventListener("focus", function() {
    label.classList.remove("mds-text-field__label--active__color");
    if (selectInput) {
      label.classList.add("mds-text-field__label--active");
    }
  });

selectInput.addEventListener("blur", function() {
  label.classList.add("mds-text-field__label--active__color");
  if (selectInput.value === "") {
    label.classList.remove("mds-text-field__label--active");
  }
  });
}

function noop() {

}
/* ---------------- Disabled ALL tillhör inte UX Lab - Bara för att Testa disabelmode. ------------------ */

function disabledAll() {
  let radios = document.querySelectorAll(".mds-radio__input");
  for (let radio of radios) {
    radio.setAttribute("disabled", true);
  }
  let checks = document.querySelectorAll(".mds-checkbox__input");
  for (let check of checks) {
    check.setAttribute("disabled", true);
  }
  let texts = document.querySelectorAll(".mds-text-field__input");
  for (let text of texts) {
    text.setAttribute("disabled", true);
  }
  let labels = document.querySelectorAll(".mds-text-field__label");
  for (let label of labels) {
    label.style.background = "darkgray";
  }
  
  document.querySelector(".mds-switch__checkbox").disabled = true;
  document.querySelector(".main-header--main").style.background = "#757575";
  document.querySelector(".main-header--disabled").style.visibility = "visible";
}

function undisabledAll() {
    let radios = document.querySelectorAll(".mds-radio__input");
    for (let radio of radios) {
    radio.removeAttribute("disabled");
  }
  let checks = document.querySelectorAll(".mds-checkbox__input");
  for (let check of checks) {
    check.removeAttribute("disabled");
  }
  let texts = document.querySelectorAll(".mds-text-field__input");
  for (let text of texts) {
    text.removeAttribute("disabled");
  }
  let labels = document.querySelectorAll(".mds-text-field__label");
  for (let label of labels) {
    label.style.background = "white";
  }
  document.querySelector(".mds-text-field__input").disabled = false;
  document.querySelector(".mds-switch__checkbox").disabled = false;
  document.querySelector(".main-header--main").style.background = "#3700b2";
  document.querySelector(".main-header--disabled").style.visibility = "hidden";
}
