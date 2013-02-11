var Alloy=require('alloy');

var appdata={
	menuOptions:[
		{name: "Our Menu"},
		{name: "About Us"},
		{name: "Locations"}
	],
	mainPhotos:[
		{path:'img1.jpg'},
		{path:'img2.jpg'},
		{path:'img3.jpg'},
	]
}

exports.getAppData=function(){
	return appdata;
}

exports.addMenuOptions=function(data,target){
	tvData=[];
	totalOptions=data.length;
	
	for(var i=0;i<totalOptions;i++){
		var payload={
			id:i,
			name:data[i].name
		}
		var row=Alloy.createController('mainmenurow',payload).getView();	
		tvData.push(row);
	}
	target.setData(tvData);
}

exports.addPhotos=function(data,target){
	for(i=0;i<data.length;i++){
		target.addView(Ti.UI.createView({
			backgroundImage: data[i].path
		}))		
	}
}
