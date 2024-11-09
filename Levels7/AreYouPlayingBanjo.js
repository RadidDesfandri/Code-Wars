// Jika dalam nama terdapat huruf R/r tampilkan:
// name + " plays banjo"
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}
console.log(areYouPlayingBanjo("ringo"));
