const authRouter = require('./user.router');
const categoryRouter = require('./category.router');
const itemRouter = require('./item.router');
const cartRouter = require('./cart.router');
function router(app) {
    app.use('/auth', authRouter);
    app.use('/admin', categoryRouter);
    app.use('/admin', itemRouter);
    app.use('/user', cartRouter);
}

module.exports = router;