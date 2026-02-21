import { cache } from "react";

const getLocaleStore = cache(() => {
    return { current };
});

export function setRequestLocale(locale) {
    getLocaleStore().current = locale;
}

export function getRequestLocale() {
    const locale = getLocaleStore().current;
    if (!locale) {
        throw new Error('The locale has not been initialized. Call setRequestLocale in your layout.');
    }
    return locale;
}