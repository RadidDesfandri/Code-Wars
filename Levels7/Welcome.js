// Translate data dalam data

const leng = (language) => {
  const data = {
    english: "Welcome",
  };

  return data[language] || "Welcome";
};

console.log(leng("english"));

function greet(language) {
  const data = [
    ["english", "Welcome"],
    ["czech", "Vitejte"],
    ["danish", "Velkomst"],
    ["dutch", "Welkom"],
    ["estonian", "Tere tulemast"],
    ["finnish", "Tervetuloa"],
    ["flemish", "Welgekomen"],
    ["french", "Bienvenue"],
    ["german", "Willkommen"],
    ["irish", "Failte"],
    ["italian", "Benvenuto"],
    ["latvian", "Gaidits"],
    ["lithuanian", "Laukiamas"],
    ["polish", "Witamy"],
    ["spanish", "Bienvenido"],
    ["swedish", "Valkommen"],
    ["welsh", "Croeso"],
  ];

  let finds = data.find((e) => e[0] === language);
  return finds ? finds[1] : "Welcome";
}

console.log(greet("dutch"));
