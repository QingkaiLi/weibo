module.exports = {
    path: 'commentDetail',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('../components/broad/detail/commentDetail.jsx'))
        })
    }
}