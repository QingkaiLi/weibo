var Reflux = require('reflux');

var detailAction = Reflux.createActions({
    loadForwards: {asyncResult: true},
    loadComments: {asyncResult: true}
});

detailAction.loadForwards.listen( (id, page=1) => {
    load(`/broad/${id}/forward/${page}`).then((data) => {
        detailAction.loadForwards.completed(data)
    }, () => {
        detailAction.loadForwards.failed()
    });
});

detailAction.loadComments.listen( (id, page=1) => {
    load(`/broad/${id}/comment/${page}`).then((data) => {
        detailAction.loadComments.completed(data)
    }, () => {
        detailAction.loadComments.failed()
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

module.exports = detailAction;

