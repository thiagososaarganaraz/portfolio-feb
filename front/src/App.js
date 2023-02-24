import React, { useEffect, useState } from "react";
import "./App.css";
import profilePhoto from "./img/profilePhoto.png";
import project1 from "./img/projects/Ecommerce.jpg";
import project2 from "./img/projects/colibriweb.png";
import project3 from "./img/projects/wcweb.png";
import project4 from "./img/projects/golf.png";

const App = () => {
  const projects = [
    {
      name: "Sistema de Gestión de Negocio",
      stack: ["C#", "SQL", ".NET"],
      description:
        "Sistema de gestión de negocio para la empresa RV. Se trata de un sistema que controla el arqueo de caja, los usuarios, compras, ventas, proveedores y clientes.",
      repository: "https://github.com/thiaguetas/SISTEMA_PUNTO_DE_VENTAS",
      img: project1,
    },
    {
      name: "E-commerce Colibri",
      stack: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Redux",
        "Node",
        "Express",
        "Sequelize",
        "postgreSQL",
      ],
      description:
        "E-commerce para negocio de indumentaria sublimada. Posee carrito, vista de productos, login y signup, dashboard para administrar los productos y usuarios. Tambien se le integró la API de MercadoPago para hacer checkout seguro de pagos.",
      repository: "https://github.com/thiaguetas/ecommerceDeRopa",
      img: project2,
    },
    {
      name: "GOLF Landing Page",
      stack: ["HTML", "CSS", "Javascript", "React", "Figma"],
      description:
        "Landing page para la marca GOLF. Diseño y maquetado realizado en Figma, Desarrollada en React.",
      repository: "https://github.com/thiaguetas/golflandingpage",
      img: project3,
    },
    {
      name: "Qatar World Cup Stats",
      stack: ["HTML", "CSS", "Javascript", "React", "Node", "Express", "API"],
      description:
        "Pagina de datos en tiempo real sobre el mundial de Qatar 2022. Se trata de un proyecto el cual presenté como proyecto final para la materia Programación IV de la carrera de Programación Universitaria",
      repository: "https://github.com/thiaguetas/qatar-wc",
      img: project4,
    },
  ];

  const [num, setNum] = useState(0);
  const [qualification, setQualification] = useState(true);

  const handleNext = (e) => {
    setNum(num + 1);
  };

  const handlePrevious = (e) => {
    setNum(num - 1);
  };

  if (num == projects.length) setNum(0);
  if (num == -1) setNum(projects.length - 1);

  useEffect(() => {}, [num]);

  return (
    <div className="main-container">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">THIAGO.</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">WHY ME</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView();
                }}
              >
                CONTACT ME
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="home">
        <div className="main-first-wrapper">
          <div className="title-wrapper">
            <h3 className="title">FULLSTACK DEVELOPER</h3>
            {/* <div className="fullstack-line"></div> */}
            <h1>MAKE YOUR</h1>
            <h1>IDEAS COME TRUE</h1>
            <h3>
              MY NAME IS THIAGO, I'M A FULLSTACK DEVELOPER, UNIVERSITY
              TECHNICIAN IN PROGRAMMING AND TECHNOLOGY PASSIONATE.
            </h3>
          </div>
          <div className="cv-button-wrapper">
            <button>↓</button>
            <h4>DOWNLOAD CV</h4>
          </div>
          <div className="home-bottom-left-wrapper">
            <div className="experience-wrapper">
              <div>
                <button>+2</button>
                <h2>YEARS OF EXPERIENCE</h2>
              </div>
              <div>
                <button>+10</button>
                <h2>COMPLETED PROJECTS</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="main-second-wrapper">
          <div className="main-profile-photo">
            <img src={profilePhoto} />
          </div>
          <ul>
            <li>
              <a
                href="https://linkedin.com/in/thiago-sosa-arganaraz"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/thiaguetas" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/thhiagososa" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="stack" id="stack">
        <h3 className="title">STACK</h3>
        <div className="stack-wrapper">
          <div>
            <h2>FRONTEND</h2>
            <div className="frontend-stack-wrapper">
              <h4>
                <i className="fa-brands fa-html5"></i>HTML
              </h4>
              <h4>
                <i className="fa-brands fa-css3"></i>CSS
              </h4>
              <h4>
                <i className="fa-brands fa-square-js"></i>JAVASCRIPT
              </h4>
              <h4>
                <i className="fa-brands fa-react"></i>REACT JS
              </h4>
              <h4>
                <i className="fa-solid fa-square-check"></i>REDUX
              </h4>
              <h4>
                <i className="fa-solid fa-square-check"></i>MATERIAL UI
              </h4>
              <h4>
                <i className="fa-brands fa-figma"></i>FIGMA
              </h4>
              <h4>
                <i className="fa-solid fa-square-check"></i>ILLUSTRATOR
              </h4>
              <h4>
                <i className="fa-brands fa-git-alt"></i>GIT
              </h4>
              <h4>
                <i className="fa-brands fa-bootstrap"></i>BOOTSTRAP
              </h4>
            </div>
          </div>
          <div>
            <h2>BACKEND</h2>
            <div className="backend-stack-wrapper">
              <h4>
                <i className="fa-brands fa-node"></i>NODE JS
              </h4>
              <h4>
                <i className="fa-solid fa-square-check"></i>EXPRESS JS
              </h4>
              <h4>
                <i className="fa-solid fa-square-check"></i>SEQUELIZE
              </h4>
              <h4>
                <i className="fa-solid fa-square-check"></i>MYSQL
              </h4>
              <h4>
                <i className="fa-solid fa-square-check"></i>SQL SERVER
              </h4>
              <h4>
                <i className="fa-solid fa-square-check"></i>POSTGRESQL
              </h4>
              <h4>
                <i className="fa-solid fa-square-check"></i>C#
              </h4>
              <h4>
                <i className="fa-solid fa-square-check"></i>.NET
              </h4>
              <h4>
                <i className="fa-solid fa-p"></i>POSTMAN
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="projects" id="projects">
        <h3 className="title">PROJECTS</h3>
        <div className="project-wrapper">
          <button onClick={handlePrevious}>←</button>
          <div className="project-viewer">
            <div>
              <img src={projects[num]?.img} />
            </div>
            <section>
              <h2>{projects[num]?.name}</h2>
              <h4>STACK:</h4>
              <ul>
                {projects[num]?.stack.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
              <h4>DESCRIPTION:</h4>
              <p>{projects[num]?.description}</p>
              <a href={projects[num]?.repository}>Repository</a>
            </section>
          </div>
          <button onClick={handleNext}>→</button>
        </div>
      </div>
      <div className="qualification" id="qualification">
        <h3 className="title">QUALIFICATION</h3>
        <h2>MY CAREER</h2>
        <div className="qualification-wrapper">
          {!qualification ? (
            <div className="qualification-grid">
              <div>
                <h1>1</h1>
                <h2>2021-2023</h2>
                <h3>UNIVERSITY PROGRAMMING TECHNICIAN</h3>
                <h4>NATIONAL TECHNOLOGICAL UNIVERSITY</h4>
              </div>
              <div>
                <h1>2</h1>
                <h2>2021-2022</h2>
                <h3>B1 ENGLISH</h3>
                <h4>RUSH ENGLISH INSTITUTE</h4>
              </div>
              <div>
                <h1>3</h1>
                <h2>2020</h2>
                <h3>FULLSTACK DEVELOPER</h3>
                <h4>NUCBA BOOTCAMP</h4>
              </div>
              <div>
                <h1>4</h1>
                <h2>2011-2018</h2>
                <h3>PERSONAL AND PROFESSIONAL INFORMATICAL TECHNICIAN</h3>
                <h4>SANTA LUCIA'S 1ST TECHNICAL SCHOOL</h4>
              </div>
            </div>
          ) : (
            <div className="qualification-grid">
              <div>
                <h1>1</h1>
                <h2>2020</h2>
                <h3>SOFTWARE DEVELOPER</h3>
                <h4 style={{ fontSize: "22px" }}>RV</h4>
              </div>
              <div>
                <h1>2</h1>
                <h2>2020-2021</h2>
                <h3>SOFTWARE MANTAINANCE</h3>
                <h4 style={{ fontSize: "22px" }}>RV</h4>
              </div>
              <div>
                <h1>3</h1>
                <h2>2022-2023</h2>
                <h3>FULLSTACK DEVELOPER</h3>
                <h4 style={{ fontSize: "22px" }}>FREELANCE, COLIBRI</h4>
              </div>
              <div>
                <h1>4</h1>
                <h2>2023</h2>
                <h3>FRONTEND DEVELOPER</h3>
                <h4 style={{ fontSize: "22px" }}>GOLF</h4>
              </div>
            </div>
          )}
          <section>
            <button
              style={
                qualification
                  ? {
                      backgroundColor: "#000",
                      color: "#fff",
                    }
                  : {}
              }
              onClick={() => setQualification(false)}
            >
              EDUCATION
            </button>
            <button
              style={
                !qualification
                  ? {
                      backgroundColor: "#000",
                      color: "#fff",
                    }
                  : {}
              }
              onClick={() => setQualification(true)}
            >
              EXPERIENCE
            </button>
          </section>
        </div>
      </div>
      <div className="contact" id="contact">
        <h3 className="title">CONTACT</h3>
        <div className="contact-wrapper">
          <form>
            <h1>GET IN TOUCH</h1>
            <input type="text" placeholder="YOUR NAME" />
            <input type="text" placeholder="YOUR EMAIL" />
            <input type="text" placeholder="ENTER YOUR MESSAGE HERE" />
            <button>SEND</button>
          </form>
        </div>
        <a
          className="whatsapp-button"
          href="https://wa.me/543863693540?text=Hola!%20Me%20gustaria%20que%20me%20ayudaras%20con%20mi%20proyecto!"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp"></i>
          Whatsapp
        </a>
      </div>
      <footer>
        <h2>THIAGO.</h2>
        <ul className="nav-footer">
          <li>
            <a href="#">WHY ME</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://linkedin.com/in/thiago-sosa-arganaraz"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/thiaguetas" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/thhiagososa" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
        <h4>All rights reserved © 2023</h4>
      </footer>
    </div>
  );
};

export default App;
