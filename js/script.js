// True Learning slider section
const trueLearningSwiper = new Swiper(".mySwipercustom", {});

// Get in touch and Intern form
// const baseURL = "http://localhost:5000";  // Uncomment for Development
const baseURL = "http://13.127.229.36/api";

// Recent Work
const projectDescriptions = [
  {
    title: "Electric Vehicle",
    para: [
      "Adopting cutting-edge technology to manufacture an EV, that offers enhanced battery efficiency through EV charging mobility. ",
      "Redesigning EV solutions that meet the challenging requirements and offer a better range and strength.",
    ],
  },
  {
    title: "RVM Academy",
    para: [
      "RVM academy offers a unique teaching and learning process, that makes learning more fun and interactive. ",
      "We offer valuable learning experiences through accessible and responsive teaching methods and guide you towards an optimistic direction.",
    ],
  },
  {
    title: "Bio Identification",
    para: [
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    ],
  },
];

// Side Navigation hamburger
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// FORM Success Message
const notifySuccess = () =>
  Toastify({
    text: "Successfully Submitted!",
    duration: 5000,
    newWindow: true,
    close: false,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #198754, #198754)",
    },
  }).showToast();

const internContact = (e) => {
  e.preventDefault();

  const formEl = e.currentTarget;
  const payloadKeys = ["name", "email", "phone", "message", "role"];
  const formData = new FormData();
  const url = `${baseURL}/contact`;

  for (const key of payloadKeys) {
    const keyEl = formEl.querySelector(`#${key}`);
    if (keyEl && keyEl.value) {
      formData.append(key, keyEl.value);
      continue;
    }
    throw new Error(`Required Field ${key}`);
  }
  let resume = formEl.querySelector("#resume");
  resume = resume.files[0];
  if (resume) {
    formData.append("resume", resume);
  } else {
    throw new Error("Required Field resume");
  }

  fetch(url, {
    method: "POST",
    body: formData,
  }).then((res) => {
    $("#intern-form").modal("hide");
    notifySuccess();
  });
};

// Get in touch
const getInTouch = (e) => {
  e.preventDefault();

  const formEl = e.currentTarget;
  const payloadKeys = ["name", "email", "phone", "message"];
  const payload = {};
  const url = `${baseURL}/contact`;

  for (const key of payloadKeys) {
    const keyEl = formEl.querySelector(`#${key}`);
    if (keyEl && keyEl.value) {
      payload[key] = keyEl.value;
      continue;
    }
    throw new Error(`Required Field ${key}`);
  }

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    $("#get-in-touch-modal").modal("hide");
    notifySuccess();
  });
};

// On Scroll top fixed nav & empowering nav pills button & True learning slider
$(function () {
  $(window).scroll(function () {
    // Scroll Menu
    if ($(this).scrollTop() > 10) {
      $(".scrolltop:hidden").stop(true, true).fadeIn();
    } else {
      $(".scrolltop").stop(true, true).fadeOut();
    }
    if ($(this).scrollTop() < 1) {
      requestAnimationFrame(() => {
      $(".navbar-two").css("background-color", "rgba(240, 240, 240, 0)");
      $(".menu-font-two").removeAttr("style");
      $(".menu-bar-two").attr("src", "./images/Assests/Logo/white__menu.svg");
      $(".navbar-brand-img").attr(
        "src",
        "./images/Assests/nav-bar/RVM-logo-white-final.svg"
      );
      });
    }
    else if ($(this).scrollTop() > 5) {
        $(".navbar-two").css(
          "background-color",
          "rgba(240, 240, 240, 0.99)",
          // "box-shadow",
          // "0 16px 56px 0 rgba(0, 0, 0, 0.17)"
        );
        $(".navbar-two").css("margin-top", "0px");
        $(".menu-font-two").css("color", "#000000");
        $(".menu-bar-two").attr("src", "./images/Assests/nav-bar/menu.svg");
        $(".navbar-brand-img").attr(
          "src",
          "./images/Assests/nav-bar/RVM-logo-2022.svg"
        );
    }
    // else {
    //   $(".navbar-two").css(
    //     "background",
    //     "transparent",
    //     "box-shadow",
    //     "0 16px 56px 0 rgba(0, 0, 0, 0.17)"
    //   );
    //   $(".navbar-two").css("margin-top", "0px");
    //   $(".menu-font-two").css("color", "#000000");
    //   $(".menu-bar-two").attr("src", "./images/Assests/nav-bar/menu.svg");
    //   $(".navbar-brand-img").attr(
    //     "src",
    //     "./images/Assests/nav-bar/RVM-logo-2022.svg"
    //   );
    // }
  });

  $(".scrolltop").click(function () {
    $("html,body").animate({ scrollTop: $(".top").offset().top }, "300");
    return false;
  });
  const prevTabBtn = document.getElementById("backbtn");

  const nextTabBtn = document.getElementById("nextbtn");

  prevTabBtn.addEventListener("click", goToPrevTab);

  nextTabBtn.addEventListener("click", goToNextTab);

  const buttonnextpage1 = document.getElementById("button-next");
  const buttonnextpage2 = document.getElementById("button-next2");
  const buttonnextpage3 = document.getElementById("button-next3");
  const buttonnextpage4 = document.getElementById("button-next4");
  const buttonnextpage5 = document.getElementById("button-next5");
  const buttonnextpage6 = document.getElementById("button-next6");
  const buttonnextpage7 = document.getElementById("button-next7");
  const buttonnextpage8 = document.getElementById("button-next8");

  const buttonprevpage1 = document.getElementById("button-prev");
  const buttonprevpage2 = document.getElementById("button-prev2");
  const buttonprevpage3 = document.getElementById("button-prev3");
  const buttonprevpage4 = document.getElementById("button-prev4");
  const buttonprevpage5 = document.getElementById("button-prev5");
  const buttonprevpage6 = document.getElementById("button-prev6");
  const buttonprevpage7 = document.getElementById("button-prev7");
  const buttonprevpage8 = document.getElementById("button-prev8");

  buttonnextpage1.addEventListener("click", goToNextTab);
  buttonnextpage2.addEventListener("click", goToNextTab);
  buttonnextpage3.addEventListener("click", goToNextTab);
  buttonnextpage4.addEventListener("click", goToNextTab);
  buttonnextpage5.addEventListener("click", goToNextTab);
  buttonnextpage6.addEventListener("click", goToNextTab);
  buttonnextpage7.addEventListener("click", goToNextTab);
  buttonnextpage8.addEventListener("click", goToNextTab);

  buttonprevpage1.addEventListener("click", goToPrevTab);
  buttonprevpage2.addEventListener("click", goToPrevTab);
  buttonprevpage3.addEventListener("click", goToPrevTab);
  buttonprevpage4.addEventListener("click", goToPrevTab);
  buttonprevpage5.addEventListener("click", goToPrevTab);
  buttonprevpage6.addEventListener("click", goToPrevTab);
  buttonprevpage7.addEventListener("click", goToPrevTab);
  buttonprevpage8.addEventListener("click", goToPrevTab);

  const projectDescriptionEle = $("#project-description");
  const projectNameElement = $(".project-names");

  // Adding Listeners for all the projects
  projectNameElement.each((projectIndex, projEle) => {
    projEle.addEventListener("mouseover", () =>
      setTimeout(() => {
        projectDescriptionEle.empty();

        const project = projectDescriptions[projectIndex];
        const title = document.createElement("h3");
        title.innerText = project.title;

        projectDescriptionEle.append(title);

        project.para.forEach((paraContent) => {
          const paraEle = document.createElement("p");
          paraEle.innerText = paraContent;
          projectDescriptionEle.append(paraEle);
        });

        // projectDescriptionEle.append(`
        // <a href="/">
        //   <span class="circle circle_rd rvm_tech">
        //     <div id="arrow_1" class="arrow-wrapper">
        //       <div class="arrow arrow--right">
        //         <span></span>
        //       </div>
        //     </div>
        //   </span>
        // </a>
        // `);

        projectDescriptionEle.css("visibility", "visible");
        projectDescriptionEle.css("opacity", 1);
      }, 5)
    );

    projEle.addEventListener("mouseout", () => {
      projectDescriptionEle.removeAttr("style");
    });
  });

  projectDescriptionEle.on("mouseover", () => {
    projectDescriptionEle.css("visibility", "visible");
    projectDescriptionEle.css("opacity", 1);
  });

  projectDescriptionEle.on("mouseout", () => {
    projectDescriptionEle.removeAttr("style");
  });

  const trueLearningSection = document.querySelector(".true-learning");
  const trueLearningArticles = trueLearningSection.querySelectorAll("article");
  const prevBtn = trueLearningSection.querySelector("#true-learning-prev");
  const nextBtn = trueLearningSection.querySelector("#true-learning-next");

  prevBtn.addEventListener("click", () => {
    trueLearningArticles[0].classList.add("active");
    trueLearningArticles[1].classList.remove("active");
    trueLearningSwiper.slidePrev();
  });

  nextBtn.addEventListener("click", () => {
    trueLearningArticles[1].classList.add("active");
    trueLearningArticles[0].classList.remove("active");
    trueLearningSwiper.slideNext();
  });
});

// Empowering Next Pervious Section

function getCurrentTabLinks() {
  const empowering_industries = document.querySelector("#empowering_slide");
  const empowering_list = [
    ...empowering_industries.querySelectorAll(".nav-link"),
  ];
  const currentIdx = empowering_list.findIndex((linkEl) =>
    linkEl.classList.contains("active")
  );

  return [empowering_list, currentIdx];
}

const goToNextTab = () => {
  // const nextTabBtn = document.getElementById("nextbtn");
  // nextTabBtn.removeEventListener("click", goToNextTab);
  const [tabLinks, currIdx] = getCurrentTabLinks();
  const nextIdx = (currIdx + 1) % tabLinks.length;
  tabLinks.at(nextIdx).click();
  console.log("clicked");
  // nextTabBtn.addEventListener("click", goToNextTab);
};

const goToPrevTab = () => {
  // const prevTabBtn = document.getElementById("backbtn");
  // prevTabBtn.removeEventListener("click", goToPrevTab);
  const [tabLinks, currIdx] = getCurrentTabLinks();
  const prevIdx = currIdx - 1;
  tabLinks.at(prevIdx).click();
  // prevTabBtn.addEventListener("click", goToPrevTab);
};

// Press Release R&D
var Press_Release = new Swiper(".mySwiper_custom", {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 500,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});

// Domain We working on R&D
var Domain_working_on = new Swiper(".mySwiper_right", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 0,
  speed: 500,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Resp domain r&d
const domain_resp = new Swiper(".swiper-container_resp", {
  centeredSlides: true,
  loop: true,
  speed: 500,
  slidesPerView: 1.5,
 

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   640: {
  //     slidesPerView: 1,
  //   },
  //   768: {
  //     slidesPerView: 2.75,
  //   },
  //   1080: {
  //     slidesPerView: 2.25,
  //   },
  //   1280: {
  //     slidesPerView: 2.75,
  //   },
  // },
});

// Intern Slider
const Intern_Testimonials = new Swiper(".swiper-container", {
  centeredSlides: true,
  loop: true,
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.75,
    },
    1080: {
      slidesPerView: 2.25,
    },
    1280: {
      slidesPerView: 2.75,
    },
  },
});

// Marquee
document.getElementById("content1").addEventListener("mouseover", function () {
  document.getElementById("content2").style.animationPlayState = "paused";
  document.getElementById("content1").style.animationPlayState = "paused";
});
document.getElementById("content1").addEventListener("mouseout", function () {
  document.getElementById("content2").style.animationPlayState = "running";
  document.getElementById("content1").style.animationPlayState = "running";

  //  var test = document.getElementById("content2").style.animationPlayState;
  // document.getElementById("content1").style.animationPlayState = "pause";
});

document.getElementById("content2").addEventListener("mouseover", function () {
  document.getElementById("content1").style.animationPlayState = "paused";
  document.getElementById("content2").style.animationPlayState = "paused";
});
document.getElementById("content2").addEventListener("mouseout", function () {
  document.getElementById("content2").style.animationPlayState = "running";
  document.getElementById("content1").style.animationPlayState = "running";

  // var test1=  document.getElementById("content1").style.animationPlayState;
});

// Empowering next-previous

$(".btnNext").click(function () {
  $(".nav-pills > .active").next("li").find("a").trigger("click");
});

$(".btnPrevious").click(function () {
  $(".nav-pills > .active").prev("li").find("a").trigger("click");
});

// Home Awards
const awardSwiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  // spaceBetween: 10,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 1500,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    325: {
      slidesPerView: 1.12,
    },

    640: {
      slidesPerView: 1.08,
    },

    768: {
      slidesPerView: 1.25,
    },

    992: {
      slidesPerView: 1.06,
    },
    1024: {
      slidesPerView: 1.1,
    },
    1080: {
      slidesPerView: 1.03,
    },

    1280: {
      slidesPerView: 1.07,
    },
  },
});

$(function () {
  const identifiers = [
    ".innovation",
    ".special-kudos",
    ".user-experience",
    ".user-interference",
  ];

  identifiers.map((val, idx) => {
    const handler = () => awardSwiper.slideTo(idx);
    $(val).each((index, ele) => {
      $(ele).on("click", handler);
    });
  });
});
// Recent Works Mobile
var Recent_Works_mobile = new Swiper(".mySwiper-project", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
  },
});

// resp domain
// var Domain_working_on_responsive = new Swiper(".mySwiper_right-resp", {
//   centeredSlides: true,
//   loop: true,
//   speed: 500,
//   slidesPerView: 1,
//   spaceBetween: 40,
//   autoplay: { delay: 3000 },
//   navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
//   breakpoints: {
//     640: { slidesPerView: 2 },
//     768: { slidesPerView: 2.75 },
//     1080: { slidesPerView: 2.25 },
//     1280: { slidesPerView: 2.75 },
//   },
// });


