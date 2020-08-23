function checkForSpam(str) {
  "use strict";
  // Write code under this line
  let message = str.toLowerCase();
  let spam = "spam";
  let sale = "sale";
  return message.includes(spam) || message.includes(sale);
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
