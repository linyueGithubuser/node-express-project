/**
 * ajax 统一封装
 * v 1.0.0
 * author LY
 * method function
 */
// init url
var root = "http://yxsp1.sc.ctc.com/sandTable";

// init ajax loading
function init(method, url, params, callback) {
    api.showProgress({
        style: 'default',
        animationType: 'fade'
    });
    var methods = method ? method : "get"; //请求方法设定
    if (params) {
        params = filterNull(params); //过滤请求参数
    }
    api.ajax({
        url: root + url, // 请求路径
        method: methods, // 请求方法
        data: {
            values: params
        }, // 过滤后的参数
        dataType: "json", // 请求参数类型
        // 请求头
        timeout: 10, //请求超时时间
    }, function(ret, err) {
        if (ret) {
            callback(ret); // 回调请求数据
            api.hideProgress();

        } else {
            if (err.code == 1) {
                api.toast({
                    msg: '请求超时，请检查网络',
                    duration: 2000,
                    location: 'bottom'
                });
            } else {
                api.toast({
                    msg: '请求失败，请联系管理员',
                    duration: 2000,
                    location: 'bottom'
                });
            }

            api.hideProgress();
            return false;
        }
    });
}

// again ajax
function again(method, url, params, callback) {
    var methods = method ? method : "get"; //请求方法设定
    if (params) {
        params = filterNull(params); //过滤请求参数
    }
    api.ajax({
        url: root + url, // 请求路径
        method: methods, // 请求方法
        data: {
            values: params
        }, // 过滤后的参数
        dataType: "json", // 请求参数类型
        // 请求头
        timeout: 10, //请求超时时间
    }, function(ret, err) {
        if (ret) {
            callback(ret); // 回调请求数据
            api.hideProgress();

        } else {
            if (err.code == 1) {
                api.toast({
                    msg: '请求超时，请检查网络',
                    duration: 2000,
                    location: 'bottom'
                });
            } else {
                api.toast({
                    msg: '请求失败，请联系管理员',
                    duration: 2000,
                    location: 'bottom'
                });
            }
            api.hideProgress();
            return false;
        }
    });
}


// 参数过滤
function filterNull(o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}

// 参数类型
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 缓存处理
function doCache(folder, id, url, params, method, callback) {
    readFile('/' + folder + '/' + id + '.json', function(ret, err) {
        if (ret.status) {
            var cacheData = ret.data;
            callback(JSON.parse(cacheData));
            again(method, url, params, function(ret) {
                if (ret) {
                    if (cacheData != JSON.stringify(ret)) {
                        callback(ret);
                        writeFile(ret, id, folder);
                    } else {
                        // alert("数据未更新")
                    }
                }
            })
        } else {
            init(method, url, params, function(ret) {
                if (ret) {
                    callback(ret);
                    writeFile(ret, id, folder);
                }
            })
        }
    })
}
// 读取文件内容
function readFile(path, callback) {
    var cacheDir = api.cacheDir;
    api.readFile({
        path: cacheDir + path
    }, function(ret, err) {
        callback(ret, err)
    });
}
// 写入文件内容
function writeFile(json, id, path) {
    var cacheDir = api.cacheDir;
    api.writeFile({
        path: cacheDir + '/' + path + '/' + id + '.json',
        data: JSON.stringify(json)
    }, function(ret, err) {
        // 暂时不做其他处理

    });
}
