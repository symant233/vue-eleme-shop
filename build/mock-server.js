const express = require('express');
const config = require('../config');
const cors = require('cors');

//加载json数据
const apiData = require('../src/common/mock/data.json');
const port = config.mock.port;
const seller = apiData.seller;
const goods = apiData.goods;
const ratings = apiData.ratings;

const app = express();
app.use(cors());
//得到路由器
const router = express.Router();
//注册路由
router.get('/seller', function(req, res) {
  res.json({
    code: 0, //0代表正确数据
    data: seller,
  });
});
router.get('/goods', function(req, res) {
  res.json({
    code: 0,
    data: goods,
  });
});
router.get('/ratings', function(req, res) {
  res.json({
    code: 0,
    data: ratings,
  });
});
//启用路由
app.use('/api', router);

const uri = 'http://127.0.0.1:' + port + '/api';
app.listen(port, () => {
  console.log('mock running on', uri);
});

module.exports = {
  close: () => {
    server.close();
  },
};
