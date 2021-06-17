const mongoose = require('mongoose');
    
mongoose.connect('mongodb://localhost/insertdbnamehere', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connection established"))
    .catch(err => console.log("Error connecting to DB", err));