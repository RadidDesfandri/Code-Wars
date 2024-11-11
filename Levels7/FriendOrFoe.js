// Cari input nama yang hurufnya hanya 4 karakter
// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}

function friend(friends) {
  return friends.filter((e) => e.length === 4);
}
console.log(friend(["Ryan", "Kieran", "Mark"]));
