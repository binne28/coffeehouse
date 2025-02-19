const authRouter = require('./user.router');
const categoryRouter = require('./category.router');
function router(app) {
    app.use('/auth', authRouter);
    app.use('/admin', categoryRouter);
    
}

module.exports = router;