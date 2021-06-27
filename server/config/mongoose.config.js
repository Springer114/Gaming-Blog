const mongoose = require('mongoose');
    
mongoose.connect('mongodb://localhost/dftc_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connection established"))
    .catch(err => console.log("Error connecting to DB", err));