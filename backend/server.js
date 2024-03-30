const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();




const PORT = process.env.PORT || 5000;

//Enable CORS for all origins
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'POST',
    allowHeaders:['content-type']
}));


//Middleware
app.use(express.json()); //parse json bodies
// suppress warning message
mongoose.set('strictQuery', true);
//Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/mern_form', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
});
//defining routes
app.post('/api/contact', (req, res) => {
    //Handle form submission logic here
    const formData = req.body;
    console.log(formData); //log the form data received
//save form data to mongoDB or perform other operations
res.json({ message: 'Form submission successful'});
});

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

