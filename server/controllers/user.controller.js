const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();

module.exports = {
    register: (req, res) => {
        User.exists({username: req.body.username})
            .then(UserExists => {
            if(UserExists){
                return Promise.reject({ errors: { name:  { message: "A User with that name already exists."}}});
            } else {
                return User.create(req.body);
            }})
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.FIRST_SECRET_KEY);

                res
                    .cookie("usertoken", userToken, process.env.FIRST_SECRET_KEY, {
                        httpOnly: true
                    })
                    .json({ msg: "success!", user: user });
            })
            .catch(err => res.json({ message: "error", errors: err.errors }));
    },
    login: async(req, res) => {
        const user = await User.findOne({ email: req.body.email });
        console.log(user);
        if(user === null) {
            // email not found in users collection
            return res.sendStatus(400);
        }

        // if we made it this far, we found a user with this email address
        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);

        if(!correctPassword) {
            // password wasn't a match!
            return res.sendStatus(400);
        }

        // if we made it this far, the password was correct
        const userToken = jwt.sign({
            id: user._id
        },  process.env.FIRST_SECRET_KEY);

        // note that the response object allows chained calls to cookie and json
        res
            .cookie("usertoken", userToken, process.env.FIRST_SECRET_KEY, {
                httpOnly: true
            })
            .json({ msg: "success!" });
    },
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
    getAllUsers: (req, res) => {
        User.find()
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    getOneUser: (req, res) => {
        User.findById(req.params.id)
            .then(data => res.status(200).json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
    updateUser: (req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}));
    },
    deleteUser: (req, res) => {
        User.findOneAndDelete({_id: req.params.id})
            .then(data => res.json({message: "success", results: data}))
            .catch(err => res.json({message: "error", errors: err.errors}))
    },
}