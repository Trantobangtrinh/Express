class NewsController{

    //[GET] home
    index(req, res){
        res.render('news')
    }

    //[GET] search
    show(req, res){
        res.send('News Detail')
    }
}

module.exports = new NewsController;