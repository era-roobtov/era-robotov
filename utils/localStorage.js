export const SCROLL_NODE = 'nodeToScroll';
export const SCROLL_SEPARATOR = ';';

class CustomLocalStorage {
    /**
     * Добавление тек. скролла в localStorage
     * @param url {string}
     * @param offsetY {number}
     */
    static loadScroll(url, offsetY) {
        localStorage.setItem(SCROLL_NODE, url + SCROLL_SEPARATOR + offsetY);
    }

    /**
     * Получаем тек.скролл, если он есть
     * @returns {{offset: string, url: string}|null}
     */
    static getScroll() {
        const scroll = localStorage.getItem(SCROLL_NODE);

        if (scroll) {
            const splitted = scroll.split(SCROLL_SEPARATOR);

            return {
                url: splitted[0],
                offset: splitted[1]
            }
        }

        return null;
    };

    /**
     * Чистим из LocalStorage скролл
     */
    static clearScroll() {
        localStorage.removeItem(SCROLL_NODE);
    }
}

export default CustomLocalStorage;
