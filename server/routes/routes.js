const userController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post("/api/users/register", userController.register);
    app.post("/api/users/login", userController.login);

    app.get("/api/users/logout", authenticate, userController.logout);
    app.get("/api/users/loggedIn", authenticate, userController.loggedIn);
    app.get("/api/users", authenticate, userController.getAllUsers);
    app.get("/api/users/:id", userController.getOneUser);
    
    app.put("/api/users/:id", userController.updateUser);

    app.delete("/api/users/:id", userController.deleteUser);
}