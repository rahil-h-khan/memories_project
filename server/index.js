import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.use('/posts', postRoutes);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));

// mongoose.set('useFindAndModify', false);