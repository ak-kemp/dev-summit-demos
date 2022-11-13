//XML: Search for an address 

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?token=AAPK59169138d2654245bc0b04d5fc41c6b6QCRoNIqod5z5w7u8g2AIE5kJVQG1Mzq_BB9uqc554GluBHOyln0FCDRvezu9jVFM&f=pjson&singleLine=1600%20Pennsylvania%20Ave%20NW,%20DC");

xhr.send();

// Fetch
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?token=&f=pjson&singleLine=1600 Pennsylvania Ave NW, DC", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
