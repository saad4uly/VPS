const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser")
const port = 8000;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/VPS', {useNewUrlParser: true});
}

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
  });

const Contact = mongoose.model('Contact', contactSchema);  

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views')) 

app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('simple.pug', params);
})
app.get('/about', (req, res)=>{
    const params = { }
    res.status(200).render('simple.pug', params);
})
app.get('/trust', (req, res)=>{
    const params = { }
    res.status(200).render('trust.pug', params);
})
app.get('/gallery', (req, res)=>{
    const params = { }
    res.status(200).render('simple.pug', params);
})
app.get('/testimonials', (req, res)=>{
    const params = { }
    res.status(200).render('simple.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('simple.pug', params);
})
app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("Your details have been saved")
    }).catch(()=>{
        res.status(400).send("Your's details have not been saved")
    });
})

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});