const express = require('express');
const bodyParser = require('body-parser');


let router = express.Router();
module.exports = function () {

    router.use(bodyParser.urlencoded({extended: true}));
    // router.use('/', express.static('../dist/my-app'));
    router.use('/', express.static('dist/my-app/index.html'))
    router.get('/api/get-user-info/:id', (req, res, next) => {
        let id = req.params.id;
        let token = req.query.token;
        let userAuthInfo = req.body.info;
        console.log(req.body);
        res.send(userAuthInfo + " " + id + " " + token);
    })

    return router;
}