const authRouter = require('./user.router');
const categoryRouter = require('./category.router');
const itemRouter = require('./item.router');
function router(app) {
    app.use('/auth', authRouter);
    app.use('/admin', categoryRouter);
    app.use('/admin', itemRouter);
}

module.exports = router;