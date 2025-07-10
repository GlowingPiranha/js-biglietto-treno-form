// const km = parseInt(prompt('inserisci i chilometri che vuoi percorrere'));
// const age = parseInt(prompt('inserisci la tua età'));
// console.log(km + ' ' + 'chilometri')
// console.log(age, 'anni')

// const ticket = parseInt(km * 0.21);

// if (age <= 17) {
//   const twentyp = ticket - ((ticket / 100) * 20);
//   const price = twentyp.toFixed(2);
//   console.log('il costo del bigletto è:' + ' ' + '€' + price)

// } else if (age >= 65) {
//   const twentyp = ticket - ((ticket / 100) * 40);
//   const price = twentyp.toFixed(2);
//   console.log('il costo del bigletto è:' + ' ' + '€' + price)

// } else {
//   const price = ticket.toFixed(2);
//   console.log('il costo del bigletto è:' + ' ' + '€' + price)
// }


const button = document.getElementById(`genera`);
button.addEventListener(`click`, (e) => {

  e.preventDefault();


  const nome = document.getElementById(`inputNome`).value;
  const chilometri = parseFloat(document.getElementById(`inputKilo`).value);
  const select = document.getElementById(`inputAge`);
  const eta = select.value;

  const ticket = parseInt(chilometri * 0.21);

  let price;

  if (eta === `2`) {
    price = ticket.toFixed(2);
  } else if (eta === `1`) {
    price = (ticket * 0.8).toFixed(2); // -20%
  } else if (eta === `3`) {
    price = (ticket * 0.6).toFixed(2); // -40%
  }

  console.log(`Nome: ${nome}, Prezzo: €${price}`);


})
