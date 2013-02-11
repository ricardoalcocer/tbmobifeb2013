var common=require('common');
var appdata=common.getAppData();

common.addMenuOptions(appdata.menuOptions,$.menuoptions);
common.addPhotos(appdata.mainPhotos,$.scrollableView);

$.logo.image="/logo.jpg"

function onMenuClick(e){
	alert(JSON.stringify(e.rowData));
}


$.index.open();
