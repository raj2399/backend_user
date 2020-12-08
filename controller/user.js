const User = require("../model/user");

exports.addUser = async function (req, res) {
    try {
        if (!req.body || !req.body.email || !req.body.name || !req.body.mobile) {
            return res.status(400).json({
                error: "Please Pass proper payload.",
            });
        }
        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            address: req.body.address
        });
        return res.status(200).json({
            data: user,
            message: "New User Created"
        })
    }
    catch (error) {
        return res.status(400).json({
            error: error
        });
        // throw error;
    }

}
exports.getAllUser = async function (req, res) {
    try {
        let user = await User.find({});
        return res.status(200).json({
            data: user,
            message: "List of Users"
        })
    }
    catch (error) {
        return res.status(400).json({
            error: error
        });
    }
}
