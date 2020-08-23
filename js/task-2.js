const calculateEngravingPrice = (message = "", pricePerWord = 0) =>
  message.split(" ").length * pricePerWord; // Write code in this line
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80
