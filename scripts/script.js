//create XMLHttpRequest object

var xhr = new XMLHttpRequest();

//when readystate changes:

xhr.onload = function() {
    responseObject = JSON.parse(xhr.responseText);
    
	//new string for new material
    var newMaterial = '';
	
	//for loop throughout content
    for (var i = 0; i < responseObject.pageData.length; i++) {
        newMaterial += '<div class="card">';
		newMaterial += '<h4>' + responseObject.pageData[i].aheader + '</h3>';
        newMaterial += '<h3>' + responseObject.pageData[i].bheader + '</h4>';
	        newMaterial += '<ul>';
		newMaterial += '<li>' + responseObject.pageData[i].uno + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].uno1 + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].one + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].two + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].three + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].four + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].five + '</li>';
		newMaterial += '</ul>';
		newMaterial += '<h4>' + responseObject.pageData[i].topheader + '</h4>';
		newMaterial += '<b>' + responseObject.pageData[i].ll + '</b>';
		newMaterial += '<ul>';
		newMaterial += '<li><i>' + responseObject.pageData[i].list + '</i></li>';
		newMaterial += '</ul>';
		newMaterial += '<b>' + responseObject.pageData[i].ks + '</b>';
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
        newMaterial += '</div>';
    }
	
	
	//Page updater:
	document.getElementById('external').innerHTML = newMaterial;
    
};
 
 
//------------------------------------------------------------------------------------
// Prepare and Send Request
xhr.open('GET', "https://close-to-perish.github.io/Dev-Final/data/info.json", true);
xhr.send(null);
//------------------------------------------------------------------------------------




