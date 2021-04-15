const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("express-handlebars");
const path = require("path");
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.set("views", path.join(__dirname, "/app/views"));

app.engine("handlebars", hbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});

app.post("/", function (req, res) {
  var body = req.body;
  res.render("maze", {
    width: body.width,
    height: body.height,
    bricks: body.bricksNumber,
    startX: body.startCoordinatesX,
    startY: body.startCoordinatesY,
    endX: body.endCoordinatesX,
    endY: body.endCoordinatesY,
  });
});

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("Server is running at: ", port);
});
