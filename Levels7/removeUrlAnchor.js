// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  return url.split("#").shift();
}

console.log(removeUrlAnchor("www.codewars.com?page=1"));
