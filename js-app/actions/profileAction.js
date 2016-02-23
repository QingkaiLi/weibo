var Reflux = require('reflux');

var profileAction = Reflux.createActions({
    load: {asyncResult: true}
});

profileAction.load.listen( (id=0) => {
    load(`/broad/profile/${id}`).then((data) => {
        profileAction.load.completed(data)
    }, () => {
        profileAction.load.failed()
    });
});

var load = (url) => {
    return new Promise((resolve, reject) => {
        $.getJSON( url)
            .done((data) => {
                resolve(data)
            }).fail((fails) =>{
                reject();
            });
    })
}

module.exports = profileAction;

