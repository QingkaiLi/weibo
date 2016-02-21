import RoutePattern from 'route-pattern'
import _ from 'lodash'

const RegHeadMap = [
    {reg: '/', title: "最新消息", name: 'index'},
    {reg: 'forward/*', title: "转发微博", name: 'forward'},
    {reg: 'publish', title: "发微博", name: 'publish'},
    {reg: 'comment/*', title: "写评论", name: 'comment'},
    {reg: 'detail/**', title: "微博正文", name: 'detail'},
    {reg: 'profileIndex', title: "个人主页", name: 'profileIndex'}
]
module.exports = {
    routeTitle: function(path) {
        var name="";
        var regHeadobj = RegHeadMap.filter(x =>{
            return RoutePattern.fromString(x.reg).matches(path)
        })
        if (regHeadobj && regHeadobj.length > 0)
            return regHeadobj[0].title;
        return '';
    },
    routeName: function(path) {
        var name="";
        var regHeadobj = RegHeadMap.filter(x =>{
            return RoutePattern.fromString(x.reg).matches(path)
        })
        if (regHeadobj && regHeadobj.length > 0)
            return regHeadobj[0].name;
        return '';
    },
    routeNav: function(path) {

    }
};