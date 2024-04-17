module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        console.log(req.session.isLoggedIn, "AUTHENTICATION");
        return res.redirect("/login");
    }
    next();
};
