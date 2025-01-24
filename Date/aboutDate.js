const now = new Date();
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMinutes().toString().padStart(2, "0"));

// console.log(now.getMilliseconds());
// console.log(now);
// console.log(now.setHours(17, 0, 0, 0));
// const name = "Dylan pros";

// console.log(name.split(" ")[0]);

const startDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
const endDay = new Date(startDay);
endDay.setUTCDate(startDay.getUTCDate() + 1);
console.log(startDay);
console.log(endDay);


// console.log(startDay);
// console.log(endDay);

// const startDay = new Date();
// startDay.setHours(6, 0, 0, 0);
// const endDay = new Date();
// endDay.setHours(23, 59, 59, 999);
