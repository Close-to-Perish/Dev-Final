//create XMLHttpRequest object

var xhr = new XMLHttpRequest();

//when readystate changes:

xhr.onload = function() {
    responseObject = JSON.parse(xhr.responseText);
    
	//new string for new material
    var newMaterial = '';
	
	//for loop throughout content
    for (var i = 0; i < responseObject.pageData.length; i++) {
		newMaterial += '<h3><u><b>' + responseObject.pageData[i].aheader + '</b></u></h3>';
        newMaterial += '<h4>' + responseObject.pageData[i].bheader + '</h4>';
	        newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.pageData[i].uno + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno1 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno2 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno3 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno4 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno5 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno6 + '</li>';
		newMaterial += '</ul>';
		newMaterial += '<h4>' + responseObject.pageData[i].dos + '</h4>';
		newMaterial += '<b>' + responseObject.pageData[i].dos1 + '</b>';
		newMaterial += '<ul>';
		newMaterial += '<li><i>' + responseObject.pageData[i].dos2 + '</i></li>';
		newMaterial += '</ul>';
		newMaterial += '<b>' + responseObject.pageData[i].dos3 + '</b>';
		newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.pageData[i].ksone + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].kstwo + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].ksthree + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].ksfour + '</li>';
		newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.pageData[i].indentone + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].indenttwo + '</li>';
		newMaterial += '</ul>';
		newMaterial += '<li>' + responseObject.pageData[i].ksfive + '</li>';
		newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.pageData[i].indentthree + '</li>';
		newMaterial += '</ul>';
		newMaterial += '</ul>';
		newMaterial += '<b>' + responseObject.pageData[i].devheader + '</b>';
		newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.pageData[i].trone + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].trtwo + '</li>';
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




