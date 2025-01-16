// 2, 3, 5, 7, 11

function bilanganPrima(angka) {
  let hasil = [];
  
  angka.forEach((number) => {
    let prima = true;

    if (number < 2) {
      prima = false;
    }

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        prima = false;
      }
    }

    if (prima) {
      hasil.push(number);
    }
  });

  return hasil;
}

console.log(bilanganPrima([1, 2,  3, 4, 5, 6, 7, 8, 9, 10, 11]));
