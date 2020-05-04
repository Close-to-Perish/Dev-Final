//create XMLHttpRequest object

var xhr = new XMLHttpRequest();

//when readystate changes:

xhr.onload = function() {
    responseObject = JSON.parse(xhr.responseText);
    
	//new string for new material
    var newMaterial = '';
	
	//for loop throughout content
    for (var i = 0; i < responseObject.infoData.length; i++) {
		newMaterial += '<h3><u><b>' + responseObject.infoData[i].aheader + '</b></u></h3>';
        newMaterial += '<h4>' + responseObject.infoData[i].bheader + '</h4>';
	        newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.infoData[i].uno + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].uno1 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].uno2 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].uno3 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].uno4 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].uno5 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].uno6 + '</li>';
		newMaterial += '</ul>';
		newMaterial += '<h4>' + responseObject.infoData[i].dos + '</h4>';
	        newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.infoData[i].dos1 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].dos2 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].dos3 + '</li>';
	        newMaterial += '</ul>';
		newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.infoData[i].tres + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].tres1 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].tres2 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].tres3 + '</li>';
		newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.infoData[i].tres4 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].tres5 + '</li>';
		newMaterial += '</ul>';
		newMaterial += '<li>' + responseObject.infoData[i].tres6 + '</li>';
		newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.infoData[i].cuatro + '</li>';
		newMaterial += '</ul>';
		newMaterial += '</ul>';
		newMaterial += '<b>' + responseObject.infoData[i].cuatro1 + '</b>';
		newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.infoData[i].tres5 + '</li>';
		newMaterial += '<li>' + responseObject.infoData[i].tres6 + '</li>';
		newMaterial += '</ul>';
    }
	
	
	//Page updater:
	document.getElementById('external').innerHTML = newMaterial;
    
};
 
 
//------------------------------------------------------------------------------------
// Prepare and Send Request
xhr.open('GET', "https://close-to-perish.github.io/Dev-Final/data/info.json", true);
xhr.send(null);
//------------------------------------------------------------------------------------




