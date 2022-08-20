/* CONST */

const listOfGame = document.querySelector(".body-table");
const form = document.querySelector("form");
const titleGame = document.querySelector("#title");
const typeOfGame = document.querySelector("#type");
const consoleTyoe = document.querySelector("#console");
const btnClearListOfGames = document.querySelector(".remove");
let newLineTable;

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
    pushNotification(
      `impossible d'ajouter votre jeu, veuillez renseigner tous les champs`,
      "red"
    );
  }
});

btnClearListOfGames.addEventListener("click", clearTableOfGames);

/* FUNCTION */

function addVideoGames() {
  newLineTable = document.createElement("tr");
  newLineTable.innerHTML = `
  <tr class="line">
    <td>${titleGame.value}</td>
    <td>${typeOfGame.value}</td>
    <td>${consoleTyoe.value}</td>
    </tr>
    `;

  listOfGame.appendChild(newLineTable);
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
  listOfGame.innerHTML = "";
}
