// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation) {
  if (employed == vacation) {
    return false;
  } else if (employed == false) {
    return false;
  } else {
    return true;
  }
}

console.log(setAlarm(true, false));
