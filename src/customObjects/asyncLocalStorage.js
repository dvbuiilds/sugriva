const asyncLocalStorage = {
    setItem: async (key, value)=> {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: async (key)=> {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    }
};

export default asyncLocalStorage;