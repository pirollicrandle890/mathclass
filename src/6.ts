function random() {
  let x = Math.floor(Math.random() * 10) + 1;
  if (x % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
