import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import userControllers from "./controllers/users.controller";
import Router from "./routes/users.routes";

dotenv.config();

let app = express();
let port = process.env.PORT;
let username = process.env.DATABASE_USERNAME;
let password = process.env.PASSWORD;
let uri = `mongodb+srv://${username}:${password}@sandbox.ibylc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/", Router);

class connect {
  static Connect() {
    let client = new MongoClient(uri).connect();
    return client;
  }
}

connect
  .Connect()
  .then((client) => {
    userControllers.usersClient(client);
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening at http:localhost://${port}`);
    });
  })
  .catch((_e) => {
    process.exit(1);
  });

//validate user data
//jwt token
