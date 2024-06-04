const inputadd = document.querySelector("#input-addbook");

const btnAddBook = document.querySelector("#btn-addbook");

const ul = document.querySelector("ul");
const del = document.querySelector("#delete");
const checkbox = document.querySelector("#hide input");
const form = document.querySelector("#form input");

let spandelete = `<span class="delete">حذف</span>`;

btnAddBook.addEventListener("click", (e) => {
  const spanname = document.createElement("span");
  spanname.textContent = inputadd.value;
  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center border-r-4 mx-5 my-3 p-2 border-b-gray-400 hover:border-purple-500";

  li.innerHTML += spandelete;
  li.appendChild(spanname);
  ul.appendChild(li);

  storetolocalstorage(inputadd.value);

  inputadd.value = "";
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }
  for (let item of tasks) {
    const spanname = document.createElement("span");
    spanname.textContent = item;
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center border-r-4 mx-5 my-3 p-2 border-b-gray-400 hover:border-purple-500";

    li.innerHTML += spandelete;
    li.appendChild(spanname);
    ul.appendChild(li);
  }
});

function storetolocalstorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }
  tasks.push(task);
  localStorage.setItem("tasks", tasks);
}

ul.addEventListener("click", function (event) {
  if (event.target.className === "delete") {
    event.target.parentElement.remove();
    removeFromLocalStorage(event.target.parentElement.children[1].textContent);
  }
});
function removeFromLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = localStorage.getItem("tasks").split(",");
  }
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === task) {
      tasks.splice(i, 1);
    }
  }
  if (tasks.length === 0) {
    localStorage.clear();
  } else {
    localStorage.setItem("tasks", tasks);
  }
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked == true) {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
});

// form.addEventListener("keyup", (e) => {
//   for (let book of ul.children) {
//     if (book.lastElementChild.textContent.indexOf(form.value) !== -1) {
//       book.style.display = "block";
//     } else {
//       book.style.display = "none";
//     }
//   }
// });

form.addEventListener("keyup", (e) => {
  // Convert the value to lower case for case-insensitive comparison
  const searchTerm = form.value.toLowerCase();

  // Use Array.from to create an array from ul.children to use array methods
  Array.from(ul.children).forEach((book) => {
    // Use toLowerCase() for case-insensitive comparison
    if (book.lastElementChild.textContent.toLowerCase().includes(searchTerm)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
