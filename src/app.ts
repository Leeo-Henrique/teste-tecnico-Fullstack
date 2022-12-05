import express from "express";
import cors from "cors";
import { userRoutes } from "./routes";
import { UserRegister } from "./routes/userAdm.routes";
import { userLogin } from "./routes/login.routes";
import { emailRoutes } from "./routes/email.routes";
import { telefoneRoutes } from "./routes/telefone.routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/register", UserRegister());
app.use("/users", userRoutes());
app.use("/login", userLogin());
app.use("/email", emailRoutes());
app.use("/telefone", telefoneRoutes());

export default app;
