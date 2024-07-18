import { Router } from "express";

const router = Router();

router.post("/api/login", async (_req, res, _next) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    res.cookie("token", "yes", {
        maxAge: 60 * 60 * 24 * 30 /* 1 day */,
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 1000),
    });
    res.cookie("name", JSON.stringify({ username: "mohammed", role: "admin" }), {
        maxAge: 60 * 60 * 24 * 30 /* 1 day */,
        expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 1000), // 1 month
        httpOnly: true,
    });
    res.json({ message: "success" });
});

router.post("/api/logout", (req, res, _next) => {
    res.cookie("token", "", { maxAge: -1 });
    res.json({ message: "success" });
});

function getCookieValue(cookies, cookieName) {
    const cookieValue = cookies
        ?.split(";")
        .find((cookie) => cookie.trim().startsWith(`${cookieName}=`));
    return cookieValue ? cookieValue.split("=")[1] : "";
}
router.get("/api/user-info", (req, res, _next) => {
    try {
        // check if the req cookies has the token
        const token = getCookieValue(req.headers.cookie, "token");
        if (token === "yes") {
            res.status(200).json({
                message: "success",
                userInfo: {
                    name: "Mohammed Jarrad",
                    email: "mohammedjarrad@me.com",
                    role: "Admin",
                },
            });
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        res.status(401).json({ message: error.message || "fail" });
    }
});

export default router;
