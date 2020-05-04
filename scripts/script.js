//create XMLHttpRequest object

var xhr = new XMLHttpRequest();

//when readystate changes:

xhr.onload = function() {
    responseObject = JSON.parse(xhr.responseText);
    
	//new string for new material
    var newMaterial = '';
	
	//for loop throughout content
    for (var i = 0; i < responseObject.pageData.length; i++) {
		newMaterial += '<h4>' + responseObject.pageData[i].aheader + '</h4>';
                newMaterial += '<h5><u>' + responseObject.pageData[i].sum + '</u></h5>';
		newMaterial += '<h4>' + responseObject.pageData[i].uno + '</h4>';
		newMaterial += '<p>' + responseObject.pageData[i].uno1 + '</p>';
		newMaterial += '<li>' + responseObject.pageData[i].uno2 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno3 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno4 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno5 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno6 + '</li>';
		newMaterial += '<h4>' + responseObject.pageData[i].uno7 + '</h4>';
		newMaterial += '<b>' + responseObject.pageData[i].uno7 + '</b>';
		newMaterial += '<li><i>' + responseObject.pageData[i].dos + '</i></li>';
		newMaterial += '<b>' + responseObject.pageData[i].dos1 + '</b>';
		newMaterial += '<li>' + responseObject.pageData[i].dos2 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].dos3 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].tres + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].tres1 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].tres2 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].tres3 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].tres4 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].tres5 + '</li>';
		newMaterial += '<b>' + responseObject.pageData[i].tres6 + '</b>';
		newMaterial += '<li>' + responseObject.pageData[i].tres7 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].cuatro + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].cuatro1 + '</li>';
	        newMaterial += '<li>' + responseObject.pageData[i].cuatro + '</li>';
	    	newMaterial += '<li>' + responseObject.pageData[i].cuatro + '</li>';
	    	newMaterial += '<li>' + responseObject.pageData[i].cuatro + '</li>';
	    	newMaterial += '<li>' + responseObject.pageData[i].cuatro + '</li>';
	    	newMaterial += '<li>' + responseObject.pageData[i].cuatro + '</li>';
    }
	
	
	//Page updater:
	document.getElementById('external').innerHTML = newMaterial;
    
};
 
 
//------------------------------------------------------------------------------------
// Prepare and Send Request
xhr.open('GET', "https://close-to-perish.github.io/Dev-Final/data/info.json", true);
xhr.send(null);
//------------------------------------------------------------------------------------




