const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers (IE11) choke on 204
}));
app.use(express.json()); //parse json bodies
app.use(morgan('dev'));




// mongoose.set('strictQuery', true);
//Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/mern_form', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then (() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connection to MongoDB:', err);
});
// Define MongoDB Schema and Model (Assuming Contact model)
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    location: String,
    message: String
  });

  const Contact = mongoose.model('Contact', contactSchema);

//POST endpoint to save contact form data
app.post('/api/contact', async (req, res) => {
 try {
    const { email, password, location, message } = req.body;
    const contact = new Contact ({ email, password, location, message });
    await contact.save();
    console.log('recieved data from:', {email, location, message});
    res.status(201).send('Contact form data successfully saved!');
 } catch (err) {
    console.error("Error saving contact form data: ", err);
    res.status(500).send()
 }
 });
const PORT = process.env.PORT || 8000;
//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

