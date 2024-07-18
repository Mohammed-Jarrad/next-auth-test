export function getCookieValue(cookies, cookieName) {
    const cookieValue = cookies
        ?.split(";")
        .find((cookie) => cookie.trim().startsWith(`${cookieName}=`));
    return cookieValue ? cookieValue.split("=")[1] : "";
}