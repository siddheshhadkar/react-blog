const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json({ extended: false }));
app.use(express.static("public"));

const whitelist = [
  "http://localhost:3000",
  "https://react-blog-qa.herokuapp.com",
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("origin:", origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("origin acceptable");
      callback(null, true);
    } else {
      console.log("origin rejected");
    }
  },
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/", (req, res) => {
  return res.send("Node Assignment");
});

app.use("/api/v1/user", require("./routes/api/v1/user"));
app.use("/api/v1/auth", require("./routes/api/v1/auth"));
app.use("/api/v1/article", require("./routes/api/v1/article"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
