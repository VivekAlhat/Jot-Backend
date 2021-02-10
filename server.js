const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");

const config = require("./db/config");

// Routes

const composeRouter = require("./routes/composeRouter");
const dashboardRouter = require("./routes/dashboardRouter");

// Mongodb cluster setup
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Successfully connected to database`))
  .catch(() => console.log(`Database connection error`));

// Init server
const port = 8000 || process.env.PORT;
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

app.use("/compose", composeRouter);
app.use("/dashboard", dashboardRouter);

app.listen(port, () => console.log(`Server is up and running on port ${port}`));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
