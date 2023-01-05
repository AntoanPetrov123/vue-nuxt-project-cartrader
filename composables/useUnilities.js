export const useUnilities = () => {
    function toTitleCase(str) {
        return str.replace(/\w\S*/g, txt => {
            return txt.charAt(0).toLocaleUpperCase() + txt.substr(1).toLocaleLowerCase();
        });
    }

    return {
        toTitleCase
    }
};
