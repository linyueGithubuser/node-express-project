/* 项目配置.基于默认配置,可以通过
 http://www.example.com/PUBLIC_PATH/web_adapter/adapter.html
访问自己的 app.如有修改,请对应变换访问地址即可.

服务器静态部署目录 PUBLIC_PATH,默认为用户 appId
*/

/* ==================== 用户相关配置.可根据需要,灵活修改. ============= */
/* app 入口文件. */
var APP_INDEX_PATH = 'index.html'

/* ====================== 以下适配器相关配置,一般不需要修改.=================== */
/* 适配器入口文件. */
var WEB_ADAPTER_INDEX_PATH = 'web_adapter/adapter.html'

/* 适配器核心js文件. */
var WEB_ADAPTER_CORE_JS_PATH = 'web_adapter/script/adapter.js'

/* =================== 应用和模块相关信息.一般由 APICloud 服务器自动生成.============= */
var PUBLIC_PATH = '/A6085130473688/'

var APP_INFO = {
  appId: 'A6085130473688',
  version: '1.2.23',
  appVersion: '00.00.01',
  appName: 'LOVEs'
}

var MODULES_INFO = [{
  "name":"addressView",
  "class":"addressView",
  "methods":["open","show"]
 }

  



,{
 "name":"bMap",
 "class":"UZBMap",
 "methods":["initMapSDK","open","getCurrentLocation","setRect","close","show","hide","getLocation","stopLocation","getLocationServices","setLocation","getCoordsFromName","getNameFromCoords","getDistance","showUserLocation","setCenter","getCenter","setZoomLevel","setZoomEnable","getZoomLevel","setRotation","setOverlook","setMapAttr","setRegion","getRegion","transCoords","zoomIn","zoomOut","addEventListener","removeEventListener","addAnnotations","getAnnotationCoords","setAnnotationCoords","annotationExist","setBubble","popupBubble","closeBubble","addBillboard","removeAnnotations","addLine","addPolygon","addCircle","addArc","addImg","removeOverlay","searchRoute","drawRoute","setRoutePlan","removeRoute","searchBusRoute","drawBusRoute","removeBusRoute","autocomplete","searchInCity","searchNearby","searchInBounds","moveAnnotation","setScaleBar","setCompass","setTraffic","setHeatMap","setBuilding","addMobileAnnotations","moveAnotation","isPolygonContantsPoint","getHotCityList","getOfflineCityList","searchCityByName","getAllUpdateInfo","getUpdateInfoByID","start","update","pause","remove","addOfflineListener","removeOfflineListener","getShowMapPoi","setShowMapPoi","setMaxAndMinZoomLevel","setIndoorMap","addIndoorListener","switchIndoorMapFloor","indoorSearch"]
 }
,{
     "name":"bmLocation",
     "class":"UZBMLocation",
     "methods":["getPermissionState","configManager","singleLocation","start","stopLocation","trans","judge"],
     "launchClassMethod":"launchBMLocation"
 }
,{
     "name":"dialogBox",
     "class":"dialogBox",
     "methods":["alert","sendMessage","scene","evaluation","raffle","taskPlan","receipt","tips","discount", "share","actionMenu","input","amount","list","webView","popupAlert","confirm","close"]
}
,{
	 "name":"FNScanner",
	 "class":"UZFNScanner",
	 "methods":["open","openScanner","openView","closeView","decodeImg","encodeImg","switchLight","setFrame","onPause","onResume"]
 }
,{
	 "name":"touchID",
	 "class":"UZTouchID",
	 "methods":["verify","isValid"]
 }
, {
     "name":"UIPullRefreshMotive",
     "class":"UIPullRefreshMotive",
     "methods":["setCustomRefreshHeaderInfo","refreshHeaderLoading","refreshHeaderLoadDone"]
 }
,
 {
 "name":"UIScrollPicture",
 "class":"UZUIScrollPicture",
 "methods":["open","close","setCurrentIndex","hide","show","reloadData","addEventListener","clearCache"]
 }
, {
	 "name":"wx",
	 "class":"UZWX",
	 "methods":["isInstalled","shareText","shareImage","shareMusic","shareVideo","shareWebpage","shareProgram","launchMiniProgram","auth","getToken","getUserInfo","refreshToken"]
 }
]
