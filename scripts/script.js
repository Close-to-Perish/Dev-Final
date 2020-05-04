//create XMLHttpRequest object

var xhr = new XMLHttpRequest();

//when readystate changes:

xhr.onload = function() {
    responseObject = JSON.parse(xhr.responseText);
    
	//new string for new material
    var newMaterial = '';
	
	//for loop throughout content
    for (var i = 0; i < responseObject.pageData.length; i++) {
        newMaterial += '<div class="desc">';
		newMaterial += '<h4>' + responseObject.pageData[i].dheader + '</h4>';
        newMaterial += '<p>' + responseObject.pageData[i].desc + '</p>';
		newMaterial += '<h4>' + responseObject.pageData[i].objheader + '</h4>';
		newMaterial += '<p>' + responseObject.pageData[i].obj + '</p>';
		newMaterial += '<ol>';
		newMaterial += '<li>' + responseObject.pageData[i].one + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].two + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].three + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].four + '</li>';
		newMaterial += '<li>' + responseObject.pageData[i].five + '</li>';
		newMaterial += '</ol>';
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
xhr.open('GET', "https://close-to-perish.github.io/Dev-Final/data/page.json", true);
xhr.send(null);
//------------------------------------------------------------------------------------




