

 export function currencyFormat(num) {
  const rupeeSymbol = "~";
  return rupeeSymbol + num.toFixed(2).replace(/(\d)(?=(\d{2})+\d\.)/g, '₹1,')
}

