const express = require("express");
const cors = require('cors');

const app = express();
app.use(express.json({extended: false}));
app.use(express.static('public'));
const corsOptions ={
    origin:'http://localhost:3000',             
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.get("/", (req, res)=>{
    return res.send("Node Assignment")
})

app.use('/api/v1/user', require('./routes/api/v1/user'));
app.use('/api/v1/auth', require('./routes/api/v1/auth'));
app.use('/api/v1/article', require('./routes/api/v1/article'));

const PORT = process.env.PORT || 5000;
app.listen(PORT,  ()=> console.log(`Server started at port ${PORT}`))