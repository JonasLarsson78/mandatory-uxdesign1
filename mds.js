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

/* ---------------- Disabled ------------------ */

function disabledAll() {
  document.querySelector(".mds-text-field__input").disabled = true;
  document.querySelector(".mds-switch__checkbox").disabled = true;
  document.querySelector(".mds-checkbox__checkbox").disabled = true;
}
function undisabledAll() {
  document.querySelector(".mds-text-field__input").disabled = false;
  document.querySelector(".mds-switch__checkbox").disabled = false;
  document.querySelector(".mds-checkbox__checkbox").disabled = false;
}
