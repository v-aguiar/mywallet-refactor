import jwt from "jsonwebtoken";

export async function validateToken(req, res, next) {
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");

    if (!token) {
        return res.sendStatus(401);
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);
    if (!user) {
        return res.sendStatus(401);
    }

    res.locals.user = user;
    next();
}
