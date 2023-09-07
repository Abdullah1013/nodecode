import express from "express";
import { config } from 'dotenv';
import router from "./controllers/usercontroller";
import user_Router from './routes/userroutes'
// config(); THAT WAS THE MISTAKE, UNNECESSARY CONFIG! SAD:(
const port = process.env.PORT || 5000;

const app = express();

 app.use('/api/users', user_Router);

app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
