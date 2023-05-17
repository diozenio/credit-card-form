function cardNumberMask(inputValue) {
  const numericValue = inputValue.replace(/\D/g, "");
  const values = numericValue.match(/.{1,4}/g);
  return values ? values.join(" ") : "";
}

function expirationDateMask(inputValue) {
  const numericValue = inputValue.replace(/\D/g, "");
  const values = numericValue.match(/.{1,2}/g);
  return values ? values.join("/") : "";
}

function cvvMask(inputValue) {
  return inputValue.replaceAll(/\D/g, "");
}

function handleCardNumberInput() {
  const cardNumberInput = document.getElementById("card-number-input");
  const imageCardNumber = document.getElementById("card-number");
  let newImageCardNumberText = "**** **** **** ****";
  const maskedValue = cardNumberMask(cardNumberInput.value);
  cardNumberInput.value = maskedValue;
  for (let i = 0; i < maskedValue.length; i++) {
    newImageCardNumberText =
      newImageCardNumberText.slice(0, i) +
      maskedValue[i] +
      newImageCardNumberText.slice(i + 1);
  }
  updateImageText(imageCardNumber, newImageCardNumberText);
}

function handleExpirationDateInput() {
  const expirationDateInput = document.getElementById("expiration-date-input");
  const imageExpirationDate = document.getElementById("expiration-date");
  const maskedValue = expirationDateMask(expirationDateInput.value);
  expirationDateInput.value = maskedValue;
  updateImageText(
    imageExpirationDate,
    maskedValue.length ? maskedValue : "mm/aa"
  );
}

function handleCvvInput() {
  const cvvInput = document.getElementById("cvv-input");
  const maskedValue = cvvMask(cvvInput.value);
  cvvInput.value = maskedValue;
}

function handleCardHolderInput() {
  const cardHolderInput = document.getElementById("cardholder-input");
  const imageCardHolder = document.getElementById("cardholder");
  updateImageText(
    imageCardHolder,
    cardHolderInput.value.length ? cardHolderInput.value : "Seu nome aqui"
  );
}

function updateImageText(element, text) {
  element.innerText = text;
}

function validateCardNumber(cardNumber) {
  const cardNumberWithoutSpaces = cardNumber.replaceAll(" ", "");
  const cardNumberArray = cardNumberWithoutSpaces.split("");
  const cardNumberArrayReversed = cardNumberArray.reverse();
  const cardNumberArrayReversedWithDoubledNumbers = cardNumberArrayReversed.map(
    (number, index) => {
      if (index % 2 !== 0) {
        const doubledNumber = number * 2;
        if (doubledNumber > 9) {
          return doubledNumber - 9;
        }
        return doubledNumber;
      }
      return number;
    }
  );
  const sumOfNumbers = cardNumberArrayReversedWithDoubledNumbers.reduce(
    (acc, number) => acc + Number(number),
    0
  );
  const isValid = sumOfNumbers % 10 === 0;
  isValid ? {} : alert("Número do cartão inválido");
}
