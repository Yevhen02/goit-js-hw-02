function checkForSpam(message) {
  const spamVal = message.includes("spam");
  const spamVal2 = message.includes("SPAM");
  const spamVal3 = message.includes("sPaM");
  const spamVal4 = message.includes("[SPAM]");

  const saleVal = message.includes("sale");
  const saleVal2 = message.includes("SalE");

  if (spamVal || spamVal2 || spamVal3 || spamVal4 || saleVal || saleVal2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
