const books = [
  "the_four_winds",
  "the_good_sister",
  "the_survivors",
  "untamed",
  "such_a_fun_age",
  "the_nightingale",
  "the_guest_list",
  "dear_emmie_blue",
  "foundation",
  "in_five_years"
];

const rootDiv = document.getElementById("root");
const ul = document.createElement("ul");
function addList(arr) {
  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.innerText = arr[i];
    ul.appendChild(li);
    rootDiv.appendChild(ul);
  }
}

// addList(books);

const booksInfo = {
  "the_four_winds": {
    title: "The Four Winds",
    language: "English",
    author: "KRISTIN HANNAH"
  },
  "the_good_sister": {
    title: "The Good Sister",
    language: "English",
    author: "SALLY HEPWORTH"
  },
  "the_survivors": {
    title: "The Survivors",
    language: "English",
    author: "JANE HARPER"
  },
  "untamed": {
    title: "Untamed",
    language: "English",
    author: "GLENNON DOYLE"
  },
  "such_a_fun_age": {
    title: "Such a Fun Age",
    language: "English",
    author: "KILEY REID"
  },
  "the_nightingale": {
    title: "The Nightingale",
    language: "English",
    author: "KRISTIN HANNAH"
  },
  "the_guest_list": {
    title: "The Guest List",
    language: "English",
    author: "LUCY FOLEY"
  },
  "dear_emmie_blue": {
    title: "Dear Emmie Blue",
    language: "English",
    author: "LIA LOUIS"
  },
  "foundation": {
    title: "Foundation",
    language: "English",
    author: "ISAAC ASIMOV"
  },
  "in_five_years0": {
    title: "In Five Years",
    language: "English",
    author: "REBECCA SERLE"
  }
};

const ul1 = document.createElement("ul");
function getBooksInfo(obj) {
  for (let item in obj) {
    let li = document.createElement("li");
    // console.log(obj[item]);
    li.innerHTML += `<h2>${obj[item].title}</h2><p>${obj[item].author}</p><p>${obj[item].language}</p>`;
    ul1.appendChild(li);
  }
  rootDiv.appendChild(ul1);
}

//getBooksInfo(booksInfo);

const bookImgs = {
  "001":
    "https://www.booklistqueen.com/wp-content/uploads/the-four-winds-kristin-hannah.jpg",
  "002":
    "https://www.booklistqueen.com/wp-content/uploads/the-good-sister-sally-hepworth.jpg",
  "003":
    "https://www.booklistqueen.com/wp-content/uploads/the-survivors-jane-harper.jpg",
  "004":
    "https://www.booklistqueen.com/wp-content/uploads/untamed-glennon-doyle.jpg",
  "005":
    "https://www.booklistqueen.com/wp-content/uploads/such-a-fun-age-kiley-reid.jpg",
  "006":
    "https://www.booklistqueen.com/wp-content/uploads/the-nightingale-kristin-hannah.jpg",
  "007":
    "https://www.booklistqueen.com/wp-content/uploads/the-guest-list-lucy-foley.jpg",
  "008":
    "https://www.booklistqueen.com/wp-content/uploads/dear-emmie-blue-lia-louis.jpg",
  "009":
    "https://www.booklistqueen.com/wp-content/uploads/foundation-isaac-asimov.jpg",
  "010":
    "https://www.booklistqueen.com/wp-content/uploads/in-five-years-rebecca-serle.jpg"
};

function getBookImgs(obj) {
  getBooksInfo(booksInfo);
  const img = document.createElement("img");
  const lis = document.querySelectorAll("li");
  const imgKeys = Object.keys(obj);
  const imgValues = Object.values(obj);
  for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute("id", imgKeys[i]);
    lis[i].innerHTML += `<img src=${imgValues[i]}>`;
    console.log(lis);
  }
}

getBookImgs(bookImgs);
