const checkAuthorize = (permission) => {
    return async (req, res, next) => {
        try {
            const user = await req.user;
            for (let i = 0; i < user.length; i++) {
                console.log(user[i].permission);
                if (user[i].permission == permission) {
                    return next();
                }
            }

            return res.json({
                status: "fail",
                statusCode: 400,
                message: "You are not authorized to use this function"
            });
        } catch (error) {
            return res.json({
                status: "error",
                statusCode: 500,
                message: "An error has occurred"
            });
        }
    }
}

module.exports = {
    checkAuthorize
}