"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get('/', (req, res) => {
  res.send({
    "hello": "world"
  });
});
app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});