window.mds = {
  textField: textField,
  switch: noop,
  checkbox: noop,
  radioButton: noop
};

function textField(element) {
  let selectInput = element.querySelector(".mds-text-field__input");
  let label = element.querySelector(".mds-text-field__label");

  if (selectInput.value) {
    selectInput.classList.add("mds-text-field__input--active");
    label.classList.add("mds-text-field__label--active");
  }

  selectInput.addEventListener("input", function() {
    if (selectInput.value) {
      // Byt klass till mds-text-field--inputActive
      selectInput.classList.add("mds-text-field__input--active");
      label.classList.add("mds-text-field__label--active");
    } else if (selectInput.value === "") {
      // byt tillbaka till mds-text-field--inputActive
      selectInput.classList.remove("mds-text-field__input--active");
      label.classList.remove("mds-text-field__label--active");
    }
  });
}

function noop() {}

const container = document.querySelector(".mds-text-field");
mds.textField(container);

/* ---------------- Disabled ALL tillhör inte UC Lab - Bara för att Testa disabelmode. ------------------ */

function disabledAll() {
  let radios = document.querySelectorAll(".mds-radio__input");
  for (let i = 0; i < radios.length; i++) {
    let radio = radios[i];
    radio.setAttribute("disabled", true);
  }
  let checks = document.querySelectorAll(".mds-checkbox__input");
  for (let i = 0; i < checks.length; i++) {
    let check = checks[i];
    check.setAttribute("disabled", true);
  }

  document.querySelector(".mds-text-field__input").disabled = true;
  document.querySelector(".mds-switch__checkbox").disabled = true;
  document.querySelector(".main-header--main").style.background = "#757575";
}
function undisabledAll() {
  let radios = document.querySelectorAll(".mds-radio__input");
  for (let i = 0; i < radios.length; i++) {
    let radio = radios[i];
    radio.removeAttribute("disabled");
  }
  let checks = document.querySelectorAll(".mds-checkbox__input");
  for (let i = 0; i < checks.length; i++) {
    let check = checks[i];
    check.removeAttribute("disabled");
  }
  document.querySelector(".mds-text-field__input").disabled = false;
  document.querySelector(".mds-switch__checkbox").disabled = false;
  document.querySelector(".main-header--main").style.background = "#3700b2";
}
