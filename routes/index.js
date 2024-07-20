const router = require("express").Router()
const demoRoute = require("./demoRoutes")

router.use('/demo', demoRoute)

module.exports = router