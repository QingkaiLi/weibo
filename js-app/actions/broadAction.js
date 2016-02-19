var Reflux = require('reflux');

var broadAction = Reflux.createActions({
    load: {asyncResult: true},
    get: {asyncResult: true},
    refreshStart: {}
});

broadAction.load.listen( (page) => {
    load(page).then((data) => {
        broadAction.load.completed(data)
    }, () => {
        broadAction.load.failed()
    });
});

broadAction.get.listen( (id) => {
    get(id).then((data) => {
        broadAction.get.completed(data)
    }, () => {
        broadAction.get.failed()
    });
});

var load = (page=1) => {
    var loadingURL = `/broad/list/${page}`;
    return new Promise((resolve, reject) => {
        $.getJSON( loadingURL)
            .done((data) => {
                resolve(data)
            }).fail((fails) =>{
                reject();
            });
    })
}

var get = (id=0) => {
    var loadingURL = `/broad/get/${id}`;
    return new Promise((resolve, reject) => {
        $.getJSON( loadingURL)
            .done((data) => {
                resolve(data)
            }).fail((fails) =>{
                reject();
            });
    })
}

module.exports = broadAction;

