const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector(".button-close");
const newTaskButton = document.querySelector("new-task");
const editable = document.querySelector(".editable");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

editable.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Yarp");
  }
});
