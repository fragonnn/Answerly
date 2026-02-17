// const ITEMS_SUGGESTION = [
//   "Lawyers",
//   "Doctors",
//   "Mechanics",
//   "Electronics Techs",
// ];

// const handleChat = (value) => {
//   const textarea = document.getElementById("chat");
//   textarea.value = `I'm the best ${value} in the word as me anything now`;
// };

// const handleElementClick = (item) => {
//   console.log("clicked on: ", item);
//   handleChat(item);
// };

// const modal = () => {
//   const prevModal = document.querySelector(".menu-modal");

//   if (prevModal) return prevModal.remove();
//   const div = document.createElement("div");
//   div.className = "menu-modal";

//   for (const item of ITEMS_SUGGESTION) {
//     const span = document.createElement("span");
//     span.innerHTML = item;
//     span.addEventListener("click", () => handleElementClick(item));
//     div.append(span);
//   }

//   const container = document.querySelector(".chat .suggestions");
//   container.append(div);
// };

// const handleMenuItems = () => {
//   const ul = document.querySelector(".suggestion-container");
//   const menuIcon = ul.querySelector(".menu-icon");
//   menuIcon.addEventListener("click", modal);
// };

// handleMenuItems();

const ITEMS_SUGGESTION = [
  "Lawyers",
  "Doctors",
  "Mechanics",
  "Electronics Techs",
];

const handleChat = (value) => {
  const textarea = document.getElementById("chat");
  textarea.value = `I'm the best ${value} in the world ask me anything now`;
};

const handleElementClick = (item) => {
  handleChat(item);
  closeModal(); // close after selection
};

let outsideClickListener = null;

const closeModal = () => {
  const modal = document.querySelector(".menu-modal");
  if (modal) modal.remove();

  if (outsideClickListener) {
    document.removeEventListener("click", outsideClickListener);
    outsideClickListener = null;
  }
};

const openModal = () => {
  const container = document.querySelector(".chat .suggestions");

  const div = document.createElement("div");
  div.className = "menu-modal";

  for (const item of ITEMS_SUGGESTION) {
    const span = document.createElement("span");
    span.innerHTML = item;
    span.addEventListener("click", () => handleElementClick(item));
    div.append(span);
  }

  container.append(div);

  // Delay so the click that opened it doesn't instantly close it
  setTimeout(() => {
    outsideClickListener = (event) => {
      if (!div.contains(event.target) && !event.target.closest(".menu-icon")) {
        closeModal();
      }
    };

    document.addEventListener("click", outsideClickListener);
  }, 0);
};

const toggleModal = () => {
  const existing = document.querySelector(".menu-modal");
  if (existing) {
    closeModal();
  } else {
    openModal();
  }
};

const handleMenuItems = () => {
  const menuIcon = document.querySelector(".menu-icon");
  if (!menuIcon) return;

  menuIcon.addEventListener("click", toggleModal);
};

handleMenuItems();
