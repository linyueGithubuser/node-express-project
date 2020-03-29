/**
 * @module historydate
 * @description 历史数据模块
 * @author ly
 */
function lsp(dataid) {
    this.dataid = dataid;
    return this;
};

lsp.prototype = {
    add: function(dataval) {
        this.dataval = dataval || [];
        localStorage.setItem(this.dataid, JSON.stringify(this.dataval));
    },
    get: function() {
        return JSON.parse(localStorage.getItem(this.dataid));
    },
    remove: function() {
        localStorage.removeItem(this.dataid);
    },
    clear: function() {
        localStorage.clear();
    }
};

function init(val, callback) {
    // var gn = val
    // api.showProgress({
    //     style: 'default',
    //     animationType: 'fade',
    //     modal: true
    // });
    var nlsp = new lsp(val)
    var gn = nlsp.get();
    callback(gn);
    // api.hideProgress();

}
