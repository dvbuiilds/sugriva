const { createStore } = require("redux");
const { default: mainReducer } = require("./mainReducer");

const store = createStore(mainReducer);

export default store;