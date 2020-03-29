/**
 * @author ly
 * @version 1.0.0
 * @description 校验input
 *
 */

// 路由跳转+参数验证
function check(params, success) {
    var flag;
    for (var key in params) {
        if (params[key] == null || params[key] == undefined || params[key] == '' || params[key] == "") {
            api.toast({
                message: '必填项，不能为空！',
                duration: 2000
            });
            flag = false;
        } else {
            flag = true;
        }
    }
    success(flag);
}
