import express from 'express';
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import healthRoutes from "./routes/health";
import mongoose from "mongoose";
import userRoutes from "./infraestructure/http/routes/userRoutes";

const app = express();
app.use(cors({
  credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/clean-architecture")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use('/api', userRoutes);
app.use('/api/health', healthRoutes);

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});
