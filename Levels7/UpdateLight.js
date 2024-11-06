// return jika
// green ->  yellow
// yellow -> red
// red -> green


function updateLight(current) {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : "green";
}

console.log(updateLight("red"));
