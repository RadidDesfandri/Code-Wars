// Hapus tanda seru(!)

function removeExclamationMarks(s) {
  return s.split("!").join("");
}

console.log(removeExclamationMarks("Hello word!"));
