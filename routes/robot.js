var express = require('express')
var router = express.Router()
const axios = require('axios')
const jwt = require('jsonwebtoken')

router.post('/sizhiRobot', async function (req, res) {
  const { msg, name = 'user' } = req.body
  const result = await axios.post('https://api.ownthink.com/bot', {
    spoken: msg,
    appid: '12acc0e2db6b04c1f9595149c5022ae2',
    userid: name,
  })
  res.json(result.data)
})

router.post('/weixinRobot', async function (req, res) {
  const { msg, name = 'user' } = req.body
  const signedData = jwt.sign({ userid: 'weixinRobot' }, 'e3oOAROLCRzkSvejDkY5VniQ6O0v5e8JWQ2Pspt9jtV')
  const result = await axios.post(`https://openai.weixin.qq.com/openapi/aibot/LI1AYIkKRnm4Eb5Ht9hp2I6MF4vpq6`, {
    signature: signedData,
    query: msg,
    env: 'debug',
  })
  res.json(result.data)
})

module.exports = router
