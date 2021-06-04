window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var header = document.getElementById("header");
var headerInfo = document.getElementById("header__info");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const createEleDivWithClassAndContent = (className, content = null) => {
  const ele = document.createElement("div");
  ele.classList.add(className);
  if (content) {
    let newContent = document.createTextNode(content);
    ele.appendChild(newContent);
  }
  return ele;
};

//skills
// const skillsMap = new Map();
// skillsMap.set(
//   "Languages",
//   "Java, JavaScript, TypeScript, HTML 5, CSS3, Python, C++"
// );
// skillsMap.set(
//   "Frameworks",
//   "React, Redux, Spring Boot, jQuery, Node.js, Bootstrap, Material UI, Express API, Flask, Axios, Jest"
// );
// skillsMap.set("IDE", "IntelliJ, Eclipse, Visual Studio Code, Atom");
// skillsMap.set("Database", "PostgreSQL, Hibernate");
// skillsMap.set(
//   "Other Tools",
//   "Photoshop, Google DevTool, Wordpress, GitHub, Postman, Dbeaver, Trello"
// );
// skillsMap.set("Web Services", "AWS BeanStalk, EC2, RDS, Pipeline, S3");
// skillsMap.set("Dev Methodology", "Agile-Scum");

// var skillDetail = document.getElementById("skills-detail");

// for (let [key, value] of skillsMap) {
//   //create div
//   const element = createEleDivWithClassAndContent("skills-detail__row");

//   const element2 = createEleDivWithClassAndContent(
//     "skills-detail__key",
//     `${key}:`
//   );

//   const element3 = createEleDivWithClassAndContent(
//     "skills-detail__properties",
//     value
//   );

//   element.append(element2, element3);

//   skillDetail.appendChild(element);
// }

// //Experience
// const ExperienceMap = new Map([
//   [
//     1,
//     {
//       place: "Revature",
//       time: "April 20 - present",
//       position: "associate",
//       location: "Reston, Virginia",
//       experience: [
//         "Applied my experience working with React, PostgreSQL, Node.js, and Express.js to build a full-stack application",
//         "Worked with Java to create an API application with Spring Boot framework",
//         "Used Hibernate to automatically map out the database structure",
//         "Collaborated with my team members to implement the Resource Management System application for Revature",
//         "Wrote custom SQL statements to fetch data from RDS",
//         "Utilized AWS CI/CD pipeline to automate the software deployment process",
//         "Worked with React-Redux to manage states in a TypeScript application",
//         "Utilized Git to track changes in the source code and push them to GitHub",
//       ],
//     },
//   ],
//   [
//     2,
//     {
//       place: "Brewtopia",
//       time: "August 19 - March 20",
//       position: "manager + intern",
//       location: "Brooklyn, New York",
//       experience: [
//         "Implement security practice to PostgreSQL and web application",
//         "Manage two interns in exploring and executing SEO strategies for the company’s sites",
//       ],
//     },
//   ],
// ]);

// const resumeDetail = document.getElementById("experience-detail");
// for (let [key, value] of ExperienceMap) {
//   const elementArray = [
//     createEleDivWithClassAndContent(
//       "experience-details__place",
//       `${value["place"]} `
//     ),
//     createEleDivWithClassAndContent(
//       "experience-details__time",
//       `(${value["time"]})`
//     ),
//     document.createElement("br"),
//     createEleDivWithClassAndContent(
//       "experience-details__position",
//       `${value["position"]}, `
//     ),
//     createEleDivWithClassAndContent(
//       "experience-details__location",
//       `${value["location"]}`
//     ),
//     document.createElement("br"),
//   ];
//   let element = createEleDivWithClassAndContent(
//     "experience-details__experience-list"
//   );

//   const elementArray2 = [];
//   for (let experience of value["experience"]) {
//     elementArray2.push(
//       createEleDivWithClassAndContent(
//         "experience-details__experience",
//         experience
//       )
//     );
//   }

//   element.append(...elementArray2);

//   elementArray.push(element);

//   resumeDetail.append(...elementArray);
// }
// //Education
// const EducationMap = new Map([
//   [
//     1,
//     {
//       name: "Oracle Certified Associate (OCA)",
//       time: "August 2020",
//       nameInfo: "Java SE 8 Programer",
//       location: "New York, NY",
//     },
//   ],
//   [
//     2,
//     {
//       name: "Brooklyn College",
//       time: "June 2005",
//       nameInfo: "BA in Accounting",
//       location: "Brooklyn, NY",
//     },
//   ],
// ]);

// const educationDetail = document.getElementById("education-detail");

// for (let [key, value] of EducationMap) {
//   let elementArray = [
//     createEleDivWithClassAndContent(
//       "education-details__name",
//       `${value["name"]} `
//     ),
//     createEleDivWithClassAndContent(
//       "education-details__time",
//       `${value["time"]} `
//     ),
//     document.createElement("br"),
//     createEleDivWithClassAndContent(
//       "education-details__name-info",
//       `${value["nameInfo"]}, `
//     ),
//     createEleDivWithClassAndContent(
//       "education-details__location",
//       `${value["location"]} `
//     ),
//     document.createElement("br"),
//   ];

//   console.log(value["education"]);
//   if (typeof value["education"] !== "undefined") {
//     element = createEleDivWithClassAndContent("education-details__item-list");

//     const elementArray2 = [];
//     for (let educationItem of value["education"]) {
//       console.log(educationItem);
//       elementArray2.push(
//         createEleDivWithClassAndContent(
//           "education-details__item",
//           educationItem
//         )
//       );
//     }

//     element.append(...elementArray2);

//     elementArray.push(element);
//   }

//   educationDetail.append(...elementArray);
// }

{
  /* <div class="education-details__name">ORACLE CERTIFIED ASSOCIATE (OCA)</div>
              <div class="education-details__time">(August 2020)</div>
              <br>
              <div class="education-details__name-info">JAVA SE 8 PROGRAMMER, </div>
              <div class="education-details__location">New York, NY</div>
              <div class="education-details__item-list">
                <div class="education-details__item">score 90%</div>
                <div class="education-details__item">score 90%</div>
              </div> */
}

// window.addEventListener('DOMContentLoaded', () => {

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const id = entry.target.getAttribute('id');
//       // console.log(entry)
//       console.log(id)
//       console.log(entry)
//       if (entry.target.scrollTop == 0) {
//         document.querySelector(`.nav li a[href="#${id}"]`).parentElement.classList.add('active');
//       } else {
//         console.log(id)
//         console.log("hello")
//         document.querySelector(`.nav a[href="#${id}"]`).parentElement.classList.remove('active');
//       }
//     });
//   });
//   // Track all sections that have an `id` applied
//   document.querySelectorAll('section[id]').forEach((section) => {
//     console.log(section)
//     console.log(section.scrollHeight)
//     console.log(section.scrolltop)
//     observer.observe(section);
//   });
// });

let mainNavLinks = document.querySelectorAll(".nav-links__link");
console.log(mainNavLinks);
// mainNavLinks.forEach(link => {
//   link.addEventListener("click", event => {
// event.preventDefault();
// let target = document.querySelector(event.target.hash);
// target.scrollIntoView({
//   behavior: "smooth",
//   block: "start"
// });
//   });
// });

let mainSections = document.querySelectorAll("section");
let lastId;
let cur = [];

const changeActive = () => {
  let fromTop = window.scrollY;

  console.log(mainNavLinks);
  for (let i = 0; i < mainNavLinks.length; i++) {
    let section = document.querySelector(mainNavLinks[i].hash);
    let targetSpan = mainNavLinks[i].querySelector("span");
    let targetParent = mainNavLinks[i].closest("li");
    let dropDown = document.querySelector(".dropdown-content");

    if (
      section.offsetTop - 75 < fromTop &&
      section.offsetTop + section.offsetHeight - 75 >= fromTop
    ) {
      console.log(section.offsetTop, section.offsetHeight, fromTop);
      targetSpan.classList.add("active");
      targetParent.classList.add("activeP");

      section.id == "experience" && dropDown.classList.add("activeP");
      console.log(section.id);
    } else {
      targetSpan.classList.remove("active");
      targetParent.classList.remove("activeP");
      section.id == "experience" && dropDown.classList.remove("activeP");
    }

    // let section2 = document.querySelector(mainNavLinks[i+1]?.hash);
    // let targetSpan2 = mainNavLinks[i+1]?.querySelector("span");
    // let targetParent2 = mainNavLinks[i+1]?.parentElement;
    // console.log(section2)
    // if (
    //   section2?.offsetTop < fromTop &&
    //   (section2?.offsetTop + section2?.offsetHeight) >= fromTop
    // ) {
    //   console.log(section2?.offsetTop, section2?.offsetHeight, fromTop)
    //   targetSpan2?.classList.add("active");
    //   targetParent2?.classList.add("activeP");
    // } else {
    //   targetSpan2?.classList.remove("active");
    //   targetParent2?.classList.remove("activeP")
    // }
  }
};
window.addEventListener("scroll", changeActive);
// window.addEventListener("click", changeActive);

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropDown").classList.toggle("show");
// }
// function myFunction2() {
//   document.getElementById("myDropDown").classList.toggle("show");
// }

// let myDropDown = document.getElementById("myDropDown")

// myDropDown.addEventListener('mouseover', ()=> myDropDown.classList.add("show"))

// Close the dropdown if the user clicks outside of it
// window.addEventListener('mouseover',function(event) {
//   console.log('helo')
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// })

const icon_github = document.getElementsByClassName("icon-github");
const overlay = document.getElementsByClassName("project__video-overlay");

for (let i = 0; i < icon_github.length; i++) {
  icon_github[i].addEventListener("mouseover", () => {
    overlay[i].classList.add("github");
  });

  icon_github[i].addEventListener("mouseout", () => {
    overlay[i].classList.remove("github");
  });
}

const icon_browser = document.getElementsByClassName("icon-browser");
// const overlay = document.getElementsByClassName("project__video-overlay");

for (let i = 0; i < icon_browser.length; i++) {
  icon_browser[i].addEventListener("mouseover", () => {
    overlay[i].classList.add("browser");
  });

  icon_browser[i].addEventListener("mouseout", () => {
    overlay[i].classList.remove("browser");
  });
}

const icon_info = document.getElementsByClassName("icon-info");
const project = document.getElementsByClassName("project");
const project_side_back = document.getElementsByClassName(
  "project__side--back"
);

for (let i = 0; i < icon_info.length; i++) {
  icon_info[i].addEventListener("mouseover", () => {
    overlay[i].classList.add("info");
  });

  icon_info[i].addEventListener("mouseout", () => {
    overlay[i].classList.remove("info");
  });
}

for (let i = 0; i < icon_info.length; i++) {
  icon_info[i].addEventListener("click", () => {
    console.log("click");
    project[i].classList.toggle("disable");
  });
}

for (let i = 0; i < project_side_back.length; i++) {
  project_side_back[i].addEventListener("mouseleave", () => {
    console.log(project[i]);
    project[i].classList.toggle("disable");
  });
}

const infos = document.getElementsByClassName("resume__info");

for (let info of infos) {
  info.addEventListener("mouseover", () => {
    info.classList.add("highlight");
  });
}

for (let info of infos) {
  info.addEventListener("mouseleave", () => {
    info.classList.remove("highlight");
  });
}

const nav_links = document.getElementsByClassName("nav__hamburger_nav-links__link");
const navi_toggle = document.getElementById("navi-toggle");

for(let link of nav_links){
  link.addEventListener("click", () => {
    navi_toggle.click();
  })
}

const container = document.querySelectorAll(".container");
container[0].addEventListener("click", () => {
  if(navi_toggle.checked){
    navi_toggle.click();
  }
  })