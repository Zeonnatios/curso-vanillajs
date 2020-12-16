function media(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw Error("Informar apenas números")
  } else {
    return (n1 + n2) / 2;
  }
}

console.log(media(8, 12));
