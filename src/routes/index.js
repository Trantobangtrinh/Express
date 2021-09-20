const newsRouter = require('./news.js')
const siteRouter = require('./site.js')

function route(app) {


    app.use('/news', newsRouter);

    app.use('/', siteRouter);    

    // app.post('/search', (req, res) => {
    //     //form data là .body
    //     //form query là .query
    //     console.log(req.body);
    //     res.send('');
    // })
}

module.exports = route;