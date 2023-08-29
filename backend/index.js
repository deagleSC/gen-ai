import express from "express";
import cors from "cors";
import genRoutes from "./routes/gen.js"

const app = express();

app.use(cors())

app.use("/api/generate", genRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
