const express=require("express");
const dotenv =require('dotenv');
// const userRoutes =require('./routes/userroutes');

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

 app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Server is ready");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
