function sockMerchant(n, ar) {
  // Write your code here

  n = 0;

  const counter = [];

  for (let i = 0; i < ar.lenght; i++) {
    const color = ar[i];
    console.log(color);
    if (counter[color] > 0) {
      console.log(counter[color]);
      n++;
      counter[color] = 0;
    } else {
      counter[color] = 1;
    }
  }

  return n;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
