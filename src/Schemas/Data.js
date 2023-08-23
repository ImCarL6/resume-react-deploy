export const Data = {
  profile: {
    name: "Carlos Silva",
    ocupation: "FullStack Software Developer",
    location: "Sao Paulo, Brasil",
    email: "carlosaparecidolds@gmail.com",
    telephone: "+55 12997799743",
    image: "images/profile.png",
  },
  aboutMe: {
    label: "Profile",
    description:
    "I'm an experienced back-end developer specializing in microservices and API gateway development, and currently beginner front-end dev, skilled in OOP, JavaScript, TypeScript, and integrated testing (Mocha, JEST). Proficient in Azure and AWS deployment, Apigee, Api gateway for route exposure, Swagger documentation, and SQL/NoSQL integration. Agile practitioner (SCRUM, KANBAN) with Azure DevOps familiarity. I'm passionate about scalability, best practices, TDD, and BDD, ready to enhance your team's success.",
  },
  skills: {
    technicalLabel: "Technologies",
    softLabel: "Skills",
    technicalSkills: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Nodejs",
      "Nestjs",
      "SQL",
      "Git",
      "React",
    ],
    softSkills: [
      "Programming.",
      "Critical thinking.",
      "Adaptability.",
      "Time management.",
      "Collaboration.",
      "Communication.",
      "Self-learning."
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "Carlos Silva",
        name: "linkedin",
        url: "https://www.linkedin.com/in/carlos-aparecido/",
        className: "bxl-linkedin-square",
      },
      {
        label: "ImCarL6",
        name: "github",
        url: "https://github.com/ImCarL6",
        className: "bxl-github",
      }
    ],
  },
  experience: {
    works: [
      {
        title: "BACKEND DEVELOPER",
        period: "Aug. 2022 - Currently",
        company: "Sensedia",
        description: [
          "Development of microservices with JavaScript and Node.js",
          "Integrated testing with Mocha",
          "Deployment via Azure Pipeline",
          "Route exposure using Apigee gateway",
          "Swagger API documentation development",
          "SCRUM",
          "Azure DevOps"
        ],
      },
      {
        title: "INTERN BACKEND DEVELOPER",
        period: "Fev. 2022 - Aug. 2022",
        company: "Sensedia",
        description: [
          "Development using the NestJS framework and TypeScript",
          "Integrated testing with JEST",
          "Deployment via AWS Pipeline",
          "Exposure in API Gateway (Sensedia API Gateway)",
          "Swagger API documentation development",
          "Integration with SQL and NoSQL databases",
          "Agile methods SCRUM and KANBAN"
        ],
      },
    ],
    academic: [
      {
        career: "Bachelor's degree in Computer Science",
        date: "Ending in dez. 2023",
        institution: "Cruzeiro do Sul University",
      },
    ],
    proyects: [
      {
        name: "PagoNxt Merchant Solutions",
        company: "Santander",
        period: "Aug. 2022 - Currently",
        description: [
          "The project involves creating microservices using NodeJS and Javascript, exposing routes in the Apigee API Gateway, creating Swagger API documentation, and providing consultancy on solutions for partners",
        ],
      },
      {
        name: "Grupo Zelo",
        company: "Grupo Zelo Funerarias",
        period: "Fev. 2022 - Aug. 2022",
        description: [
          "The project involved converting the company's legacy into a more recent and readable stack using the NestJS framework, building microservices in TypeScript, performing unit tests, and deploying using AWS",
        ],
      }
    ],
  },
};
