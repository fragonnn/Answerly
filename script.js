// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const MAX_VALUE = 1000;
let prevValue;

const errorHandled = (element, error) => {
  element.innerHTML = error;
};

const counter = (event) => {
  console.log("prevValue: ", prevValue);
  const value = event.target.value;
  const textError = document.querySelector(".textarea-error");
  const counterElement = document.querySelector("#text-conter");
  const wordsLength = value.length;
  const form = document.querySelector("form");
  const button = form.querySelector(".submit");

  if (!value) {
    event.target.value = "";
    prevValue = "";
    counterElement.innerHTML = `0/${MAX_VALUE}`;
    return button.setAttribute("disabled", true);
  }
  // if (wordsLength > 1000) {
  //   event.target.value = prevValue;
  //   return errorHandled(textError, "You've reach max lenght");
  // }
  if (wordsLength > MAX_VALUE) {
    event.target.value = value.slice(0, MAX_VALUE);
    errorHandled(textError, "You've reached max length");
    return;
  }

  counterElement.innerHTML = `${wordsLength}/${MAX_VALUE}`;
  prevValue = value;
  textError.innerHTML = "";
  button.removeAttribute("disabled");
};

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
};

const handleCounter = () => {
  const form = document.querySelector("form");
  const submitContainer = document.querySelector("form .field-container");
  const input = submitContainer.querySelector("#chat");
  const button = form.querySelector(".submit");
  if (!prevValue) button.setAttribute("disabled", true);
  input.addEventListener("input", counter);
  form.addEventListener("submit", handleSubmit);
};

handleCounter();

document.getElementById("joinBtn").addEventListener("click", function () {
  document.getElementById("pricing").scrollIntoView({
    behavior: "smooth",
  });
});
// document.addEventListener("DOMContentLoaded", () => {
//   const swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     spaceBetween: 40,
//     loop: true,
//     centeredSlides: true,
//     grabCursor: true,
//     navigation: {
//       nextEl: ".custom-next",
//       prevEl: ".custom-prev",
//     },

//   });
// });

new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,

  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 1.4,
    },
    1024: {
      slidesPerView: 1.6,
    },
    1200: {
      slidesPerView: "auto",
    },
  },
});
// new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 25,
//   centeredSlides: true,
//   loop: true,
//   grabCursor: true,

//   navigation: {
//     nextEl: ".custom-next",
//     prevEl: ".custom-prev",
//   },
// });
// const testimonials = [
//   {
//     text: "The service exceeded my expectations. I was able to connect with a medical expert in just a few minutes, and the guidance they provided was incredibly detailed and helpful. It felt like a one-on-one consultation",
//     name: "Jerome Bell",
//     role: "Medical Assistant",
//     image: "./assets/images/jerome bell.png",
//     large: true,
//   },
//   {
//     text: "The entire process was incredibly smooth. I connected with a doctor who specialized in my specific concern.",
//     name: "Kathryn Murphy",
//     role: "President of Sales",
//     image: "./assets/images/kathryn murphy.png",
//   },
//   {
//     text: "From start to finish, the experience was seamless. I had a question about a recurring health issue.",
//     name: "Floyd Miles",
//     role: "Web Designer",
//     image: "./assets/images/floyd miles.png",
//   },
//   {
//     text: "I can't express how grateful I am for this service. I had a medical concern late at night and didn't want to wait until morning to see my regular doctor. I connected with an expert who listened to my symptoms and provided a detailed response within minutes.",
//     name: "Brooklyn Simmons",
//     role: "Dog Trainer",
//     image: "./assets/images/Brooklyn Simmons.png",
//     large: true,
//   },
//   {
//     text: "I had some concerns about the side effects of a new medication I was taking, and my local pharmacy couldn't give me the answers I needed. I reached out through this service and received a thorough explanation from a qualified doctor.",
//     name: "Marvin McKinney",
//     role: "Marketing Coordinator",
//     image: "./assets/images/Marvin McKinney.png",
//     large: true,
//   },
//   {
//     text: "As a mother, I constantly worry about my child's health, especially when unexpected symptoms appear.",
//     name: "Savannah Nguyen",
//     role: "Nursing Assistant",
//     image: "./assets/images/Savannah Nguyen.png",
//   },
// ];

// const grid = document.getElementById("testimonialsGrid");

// testimonials.forEach((item) => {
//   const card = document.createElement("div");
//   card.classList.add("card");

//   if (item.large) {
//     card.classList.add("large");
//   }

//   card.innerHTML = `
//       <p class="text">${item.text}</p>
//       <div class="user">
//         <img src="${item.image}" alt="${item.name}" />
//         <div>
//           <h4>${item.name}</h4>
//           <span>${item.role}</span>
//         </div>
//       </div>
//     `;

//   grid.appendChild(card);
// });
const testimonials = [
  {
    text: "The service exceeded my expectations. I was able to connect with a medical expert in just a few minutes, and the guidance they provided was incredibly detailed and helpful. It felt like a one-on-one consultation.",
    name: "Jerome Bell",
    role: "Medical Assistant",
    image: "./assets/images/jerome bell.png",
    large: true,
  },
  {
    text: "The entire process was incredibly smooth. I connected with a doctor who specialized in my specific concern.",
    name: "Kathryn Murphy",
    role: "President of Sales",
    image: "./assets/images/kathryn murphy.png",
  },
  {
    text: "From start to finish, the experience was seamless. I had a question about a recurring health issue.",
    name: "Floyd Miles",
    role: "Web Designer",
    image: "./assets/images/floyd miles.png",
  },
  {
    text: "I can't express how grateful I am for this service. I had a medical concern late at night and didn't want to wait until morning to see my regular doctor. I connected with an expert who listened to my symptoms and provided a detailed response within minutes.",
    name: "Brooklyn Simmons",
    role: "Dog Trainer",
    image: "./assets/images/Brooklyn Simmons.png",
    large: true,
  },
  {
    text: "I had some concerns about the side effects of a new medication I was taking, and my local pharmacy couldn't give me the answers I needed. I reached out through this service and received a thorough explanation from a qualified doctor.",
    name: "Marvin McKinney",
    role: "Marketing Coordinator",
    image: "./assets/images/Marvin McKinney.png",
    large: true,
  },
  {
    text: "As a mother, I constantly worry about my child's health, especially when unexpected symptoms appear.",
    name: "Savannah Nguyen",
    role: "Nursing Assistant",
    image: "./assets/images/Savannah Nguyen.png",
  },
];

const grid = document.getElementById("testimonialsGrid");

// Create testimonial cards dynamically
testimonials.forEach(({ text, name, role, image, large }) => {
  const card = document.createElement("div");
  card.classList.add("card");
  if (large) card.classList.add("large");

  card.innerHTML = `
    <p class="text">${text}</p>
    <div class="user">
      <img src="${image}" alt="${name}" />
      <div>
        <h4>${name}</h4>
        <span>${role}</span>
      </div>
    </div>
  `;

  grid.appendChild(card);
});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active");
        faq.querySelector(".icon").textContent = "+";
      }
    });

    item.classList.toggle("active");
    const icon = item.querySelector(".icon");

    if (item.classList.contains("active")) {
      icon.textContent = "x";
    } else {
      icon.textContent = "+";
    }
  });
});

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");
const header = document.querySelector(".header");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  header.classList.toggle("menu-open");
});
