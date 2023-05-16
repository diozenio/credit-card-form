function cardNumberMask() {
  const cardNumberInput = document.getElementById("card-number");
  const values = cardNumberInput.value.replaceAll(/\D/g, "").match(/.{1,4}/g);
  cardNumberInput.value = values ? values.join(" ") : "";
}

function expirationDateMask() {
  const expirationDateInput = document.getElementById("expiration-date");
  const values = expirationDateInput.value
    .replaceAll(/\D/g, "")
    .match(/.{1,2}/g);
  expirationDateInput.value = values ? values.join("/") : "";
}

function cvvMask() {
  const cvvInput = document.getElementById("cvv");
  cvvInput.value = cvvInput.value.replaceAll(/\D/g, "");
}
