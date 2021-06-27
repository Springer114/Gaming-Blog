    const mongoose = require('mongoose');

    const YourSchema = new mongoose.Schema({
        // go buck wild with your schema
    }, { timestamps: true });

    const Your = mongoose.model("Your", YourSchema);

    module.exports = Your;