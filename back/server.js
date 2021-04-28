const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

require('dotenv').config();


const app= express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());




const uri = 'mongodb+srv://manu:test123@diet.qkfbq.mongodb.net/first?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true });


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const userRouter=require('./routes/user');
const exerciseRouter=require('./routes/exercise')

app.use('/exercise',exerciseRouter);
app.use('/users',userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});