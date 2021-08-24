/**
 * Gets the value associated with the supplied key.
 *
 * @param {*} key The name of the key to get value from.
 * @returns false if the localStorage doesn't have the key supplied. If key exists, it returns the value as JSON data.
 */
 export const getStorage = (key: string) => {
    const data = localStorage.getItem(key);

    if (data) {
        return JSON.parse(data);
    } else {
        return false;
    }
};

/**
 * Adds the supplied key and value to the localStorage of the browser.
 *
 * @param {*} key The name of the key.
 * @param {*} value The value associated with the key.
 */
export const setStorage = (key: string, value: string) => {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
};
