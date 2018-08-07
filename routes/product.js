const 
    express = require('express'),
    router = express.Router()

router.get('/',
    function(req,res,next){
        var params = {
            title: 'Product',
            productCount: 20
        }
        res.render('product',params)
    }
)

module.exports = router;