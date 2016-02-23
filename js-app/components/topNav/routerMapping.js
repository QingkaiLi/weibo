import RoutePattern from 'route-pattern'
import _ from 'lodash'
import {TopNavTool, TopNavButton} from './TopNavItem.jsx'

const RouteNameMap = {
    INDEX: 'index',
    FORWARD: 'forward',
    PUBLISH: "publish",
    COMMENT: "comment",
    DETAIL: "detail",
    PROFILE_INDEX: "profileIndex",
    FANS: "fans"
}
const RegHeadMap = [
    {reg: '/', title: "最新消息", name: RouteNameMap.INDEX},
    {reg: 'forward/*', title: "转发微博", name: RouteNameMap.FORWARD},
    {reg: 'publish', title: "发微博", name: RouteNameMap.PUBLISH},
    {reg: 'comment/*', title: "写评论", name: RouteNameMap.COMMENT},
    {reg: 'detail/**', title: "微博正文", name: RouteNameMap.DETAIL},
    {reg: 'profileIndex/**', title: "个人主页", name: RouteNameMap.PROFILE_INDEX},
    {reg: 'fans', title: "粉丝", name: RouteNameMap.PROFILE_INDEX}
]
const TopNavButtonsMap = {
    [RouteNameMap.INDEX]: [
        {component: TopNavTool, type: "refresh", loc: "right", action: 'reLoadBroad'},
        {component: TopNavTool, type: "compose", loc: "right", action: 'publishBroad'}
    ],
    [RouteNameMap.FORWARD]: [
        {component: TopNavButton, type: "goBack", loc: "left", action: 'goback', label: '取消'},
        {component: TopNavButton, type: "negative", loc: "right", action: 'confirmPublish', label: '发送'}
    ],
    [RouteNameMap.PUBLISH]: [
        {component: TopNavButton, type: "goBack", loc: "left", action: 'goback', label: '取消'},
        {component: TopNavButton, type: "negative", loc: "right", action: 'confirmPublish', label: '发送'}
    ],
    [RouteNameMap.COMMENT]: [
        {component: TopNavButton, type: "goBack", loc: "left", action: 'goback', label: '取消'},
        {component: TopNavButton, type: "negative", loc: "right", action: 'confirmPublish', label: '发送'}
    ],
    [RouteNameMap.DETAIL]: [
        {component: TopNavTool, type: "left-nav", loc: "left", action: 'toIndex'}
    ]
}
var getRegHead = function(path) {
    var name="";
    var regHeadobj = RegHeadMap.filter(x =>{
        return RoutePattern.fromString(x.reg).matches(path)
    })
    if (regHeadobj && regHeadobj.length > 0)
        return regHeadobj[0];
    return {};
}
var getRouteInfo = function(path) {
    var name="";
    var regHeadobj = RegHeadMap.filter(x =>{
        return RoutePattern.fromString(x.reg).matches(path)
    })
    if (regHeadobj && regHeadobj.length > 0)
        return regHeadobj[0];
    return {};
}
module.exports = {
    routeInfo: function(path) {
        return getRouteInfo(path);
    },
    navItems: function(path) {
        var routeInfo = getRouteInfo(path);
        return TopNavButtonsMap[routeInfo.name] || []
    },
    RouteNameMap: RouteNameMap
};