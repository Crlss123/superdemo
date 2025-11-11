import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/postRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/api/posts/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(201).json({
    hola: "hola",
  });
});
