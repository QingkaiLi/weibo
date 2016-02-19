module.exports = {
    path: 'forwardDetail',
    getComponent(location, cb) {
        require.ensure([], (require) => {
            cb(null, require('../components/broad/detail/forwardDetail.jsx'))
        })
    }
}