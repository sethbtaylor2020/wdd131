const form = document.querySelector("#checkoutForm");

function isCardNumberValid(num) {
  return num === "1234123412341234";
}

function isNotExpired(mm, yy) {
  const month = Number(mm);
  const year = Number(yy);

  if (!Number.isInteger(month) || month < 1 || month > 12) return false;
  if (!Number.isInteger(year) || year < 0 || year > 99) return false;

  const now = new Date();
  const currentYear = now.getFullYear();       
  const currentMonth = now.getMonth() + 1;     

  const fullYear = 2000 + year;                

  if (fullYear < currentYear) return false;
  if (fullYear === currentYear && month < currentMonth) return false;

  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const rawCard = document.querySelector("#cardnumber").value;
  const card = rawCard.replace(/\s/g, "");
  const mm = document.querySelector("#month").value.trim();
  const yy = document.querySelector("#year").value.trim();

  let errors = [];


  if (!isCardNumberValid(card)) {
    errors.push("Card number is not valid.");
  }


  if (!isNotExpired(mm, yy)) {
    errors.push("Card is expired (or expiration is invalid).");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return;
  }
  form.submit();
});