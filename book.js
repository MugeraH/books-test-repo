let booksArray = [
  {
    id: 1,
    name: "Harry potter",
    description: "Fiction",
  },
  {
    id: 2,
    name: "Dolphin",
    description: "Fantasy",
  },
  {
    id: 3,
    name: "Can you cook",
    description: "Recipies",
  },
];

let showBook = (id) => {
  let selectedBook = booksArray.filter((book) => {
    return book.id === parseInt(id);
  });

  document.getElementById("exampleModalLabel").innerHTML = selectedBook[0].name;
  document.getElementById("bookDescription").innerHTML =
    selectedBook[0].description;
};
