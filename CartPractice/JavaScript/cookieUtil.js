export class CookieUtil {
    static get(name) {
        let cookieName = `${encodeURIComponent(name)}=`,
        cookieStart = document.cookie.indexOf(cookieName), cookieValue = null;
        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    }

    static set(name, value, valid_days) {
        const expires = valid_days * 1000 * 60 * 60 * 24;
        let date = new Date()
        date.setTime(date.getTime() + expires);
        let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        if (date instanceof Date) {
            cookieText += `; expires=${date.toUTCString()}`;
        }
        document.cookie = cookieText;
    }

    static unset(name) {
        CookieUtil.set(name, '');
    }
};