const authorize = (requiredRoles) => (req, res, next) => {
    console.log('api call in ##############');
    const currentUser = req.currentUser;

    if (!currentUser) {
        return res.status(401).json({ error: "Unauthorized: User not authenticated" });
    }

    if (!requiredRoles.some((role) => currentUser.roles.includes(role))) {
       
        return res.status(403).json({ error: "Forbidden: User does not have required role(s)" });
    }

    next();
};

export default authorize;
