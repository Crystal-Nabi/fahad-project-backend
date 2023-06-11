const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const XLSX = require("xlsx");
const path = require("path");
const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

//connect mongodb
const db = require("./src/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, "catagory.xlsx");
  },
});

const upload = multer({ storage });

app.post("/catagory", upload.single("file"), async (req, res) => {
  try {
    const fileName = "./uploads/catagory.xlsx";
    if (fs.existsSync(fileName)) {
      const workbook = XLSX.readFile(fileName);
      const sheetNameList = workbook.SheetNames;
      const xlData = XLSX.utils.sheet_to_json(
        workbook.Sheets[sheetNameList[0]]
      );

      await db.catagories.deleteMany({}).then((res) => {
        db.catagories
          .insertMany(xlData, { site: "Site" })
          .then(() => console.log("insert success"))
          .catch((err) => console.log(err));
      });

      res.status(200).send(JSON.stringify(xlData));
    } else {
      console.log("Does not exist file.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("error");
  }
});

app.get("/catagory", async (req, res) => {
  const result = await db.catagories
    .find()
    .then((catagories) => res.status(200).send(catagories))
    .catch((err) => console.error(err));
});

app.get("/files/download", (req, res) => {
  const fileName = "catagory.xlsx";
  const filePath = path.join(__dirname, "./uploads/", fileName);
  res.download(filePath, fileName);
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
