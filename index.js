const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");

const app = express();
app.use(express.static("assets"));
nunjucks.configure("views", {
    autoescape: true,
    express: app,
  });  
const port = 5000;

// sample schools
schools = [
  {
    Name: "School of Medicine",
  },
  {
    Name: "Whiting School of Engineering",
  },
];

// sample terms
terms = [
  {
    Name: "Fall 2020",
  },
  {
    Name: "Summer 2020",
  },
  {
    Name: "Spring 2020",
  },
];

// sample courses
courses = [
  {
    OfferingName: "EN.601.226",
    SectionName: "01",
    Title: "Data Structures",
    Instructors: "A. Madooei",
  },
  {
    OfferingName: "EN.601.226",
    SectionName: "02",
    Title: "Data Structures",
    Instructors: "A. Madooei",
  },
  {
    OfferingName: "EN.601.280",
    SectionName: "01",
    Title: "Full-Stack JavaScript",
    Instructors: "A. Madooei",
  },
  {
    OfferingName: "EN.601.280",
    SectionName: "02",
    Title: "Full-Stack JavaScript",
    Instructors: "A. Madooei",
  },
];

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

// index.js file
app.get("/dashboard", (req, res) => {
    let data = {
      uname: req.query.uname,
    };
    res.render("dashboard.njk", data);
  });
  
app.get("/api/schools", (req, res) => {
  res.json(schools);
});

app.get("/api/terms", (req, res) => {
  res.json(terms);
});

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});