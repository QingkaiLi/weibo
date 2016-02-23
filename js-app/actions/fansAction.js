var Reflux = require('reflux');

var fansAction = Reflux.createActions({
    load: {asyncResult: true}
});

fansAction.load.listen( () => {
    load().then((data) => {
        fansAction.load.completed(data)
    }, () => {
        fansAction.load.failed()
    });
});

var load = () => {
    var loadingURL = `/broad/fans`;
    return new Promise((resolve, reject) => {
        $.getJSON( loadingURL)
            .done((data) => {
                resolve(data)
            }).fail((fails) =>{
                reject();
            });
    })
}

module.exports = fansAction;

