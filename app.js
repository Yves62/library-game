/* CONST */

const listOfGame = document.querySelector(".body-table");
const form = document.querySelector("form");
const titleGame = document.querySelector("#title");
const typeOfGame = document.querySelector("#type");
const consoleTyoe = document.querySelector("#console");
const btnClearListOfGames = document.querySelector(".remove");

/**
 * create generic class Game
 */
class Game {
  constructor(title, type, console) {
    this.title = title;
    this.type = type;
    this.console = console;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    titleGame.value != "" &&
    typeOfGame.value != "" &&
    consoleTyoe.value != ""
  ) {
    addVideoGames();
    resetForm();
    pushNotification("votre jeu a été ajouté", "green");
  } else if (
    titleGame.value === "" ||
    typeOfGame.value === "" ||
    consoleTyoe.value === ""
  ) {
    pushNotification(`impossible d'ajouter votre jeu`, "red");
  }
});

btnClearListOfGames.addEventListener("click", clearTableOfGames);

/* FUNCTION */

function addVideoGames() {
  const game = new Game(titleGame.value, typeOfGame.value, consoleTyoe.value);
  newLineTable = document.createElement("tr");
  newLineTable.innerHTML = `
  <tr class="line">
    <td>${titleGame.value}</td>
    <td>${typeOfGame.value}</td>
    <td>${consoleTyoe.value}</td>
    </tr>
    `;

  listOfGame.append(newLineTable);
}

function resetForm() {
  titleGame.value = "";
  typeOfGame.value = "";
  consoleTyoe.value = "";
}

function pushNotification(message, color) {
  const notification = document.createElement("p");
  notification.textContent = message;
  notification.style.color = "white";
  notification.style.backgroundColor = color;
  notification.style.width = "60%";
  notification.style.margin = "10px auto 0";
  notification.style.padding = "5px";
  notification.style.textAlign = "center";
  notification.style.borderRadius = "5px";
  document.body.append(notification);

  setTimeout(() => {
    notification.remove();
  }, 2500);
}

function clearTableOfGames() {
  listOfGame.remove();
}
