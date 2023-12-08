import User from '../models/user.model.js';
import createError from '../utils/createError.js';

export const getUser = async (req, res, next) => {

    try {

        const user = await User.findById(req.params.id);
        res.status(200).send(user);

    } catch (err) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {

    try {

        const user = await User.findById(req.params.id);

        if (req.userId !== user._id.toString())
            next(createError(403, "You can only delete your account!"));

        await User.findByIdAndDelete(req.params.id);

        res.status(200).send("User deleted successfully.");


    } catch (err) {
        next(err);
    }
}