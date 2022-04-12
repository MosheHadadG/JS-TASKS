const steps = function (n) {
  for (let i = 1; i <= n; i++) {
    console.log(`'${'#'.repeat(i) + ' '.repeat(n - i)}'`);
  }
}

steps(5);

const steps1 = function (n) {
  let arr = Array(n);
  arr.fill(' ');
  console.log(arr)
  for (let i = 0; i < n; i++) {
    arr[i] = `#`;
    console.log(`'${arr.join('')}'`);
  }
}

steps1(5);