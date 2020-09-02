const fruits = [
  "Acai",
  "Apple",
  "Akee",
  "Apricot",
  "Avocado",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Black sapote",
  "Blueberry",
  "Boysenberry",
  "Buddhas hand",
  "Crab apples",
  "Currant",
  "Cherry",
  "Cherimoya",
  "Chico fruit",
  "Cloudberry",
  "Coconut",
  "Cranberry",
  " Cucumber",
  "Damson",
  "Date",
  "Dragonfruit",
  "Pitaya",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Goji berry",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  " Jackfruit",
  "Jambul",
  "Japanese plum",
  "Jostaberry",
  "Jujube",
  "Juniper berry",
  "Kiwano",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Blood orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Prune",
  "Pineapple",
  "Pineberry",
  "Plumcot",
  "Pomegranate",
  "Pomelo",
  "Purple mangosteen",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salal",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star apple",
  "Star fruit",
  "Strawberry",
  "Surinam cherry",
  "Tamarillo",
  "Tamarind",
  "Ugli fruit",
  "White currant",
  "White sapote",
  "Yuzu",
  "Avocado",
  "Bell pepper",
  "Chili pepper",
  "Corn kernel",
  "Cucumber",
  "Eggplant",
  "Olive",
  "Pea",
  "Pumpkin",
  "Squash",
  "Tomato",
  "Zucchini",
];

printList(fruits);

function filterFruits() {
  const input = document.getElementById("myInput");
  const fruitValue = input.value.toLowerCase();

  if (fruitValue === "") {
    printList(fruits);
  } else {
    const rem = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(fruitValue)
    );
    printList(rem);
  }
}

function printList(myList) {
  const root = document.getElementById("root");

  let fruitList = "";
  myList.forEach((fruit) => {
    fruitList += `<p class='list'>${fruit}</p>`;
  });

  root.innerHTML = fruitList;
}
