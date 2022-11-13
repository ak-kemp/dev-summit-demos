
### Moving on from Postman 

We have made calls to the REST API using Postman. What I like about Postman is that we can take the calls we made, for instance _Search for an address_, and apply them in an application. On the **Right hand side**, we see the code icon. When I click on the code icon, I have the option to copy and paste the call in different languages such as C#, Python, etc. 

But, for this demo, I'm going to compare two different methods to call the geocoding service using JavaScript. Let's explore how to call REST endpoints in standard JavaScript code using the `fetch` API. 
<!-- 
### `XMLHttpRequest` 

A way to interact between a web browser and web server. 

AJAX (asynchronous JavaScript and XML). 

#### Why use it? 

- (From W3 schools), you can: 
  * Update a web page without reloading it
  * Request/receive/send data to/from a server 

#### What does it look like? 

```js
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?token=AAPK59169138d2654245bc0b04d5fc41c6b6QCRoNIqod5z5w7u8g2AIE5kJVQG1Mzq_BB9uqc554GluBHOyln0FCDRvezu9jVFM&f=json&singleLine=1600%20Pennsylvania%20Ave%20NW,%20DC");

```

What does the code mean? 

We have to: 

* Instantiate a new request
* Specify that this request will be authenticated 
* Add an event listener to handle the return of the request. If the request is complete and the response is ready, then console log the response text. 
* Call the `open` method to initialize a new request 
* Specify the type of request, in this case `GET` followed by the URL.  -->


### `Fetch` 

#### What is it? 

_From MDN docs_: Provides a JavaScript interface too access and manipulate requests and responses. Provides the `fetch()` method to provide a way to fetch resources asynchronously. 

#### Why use it? 

Less code than `XMLHttpRequest`. Returns a promise that resolves to the reponse. A bit easier to read!

#### What does it look like? 

```js
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?token=&f=pjson&singleLine=1600 Pennsylvania Ave NW, DC", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

```

```js

var urlencoded = new URLSearchParams();
urlencoded.append("token", "YOUR_API_KEY");
urlencoded.append("f", "json");
urlencoded.append("facilities", "{'spatialReference':{'latestWkid':3857,'wkid':102100},'features':[{'geometry':{'x':-13656100.72194608,'y':5703897.952531632},'attributes':{'Name':'Downtown Grocery, 310 SW 4th Ave, Portland, OR, 97204, USA'}},{'geometry':{'x':-13657081.446659965,'y':5704279.273731899},'attributes':{'Name':'Whole Foods Market, 1210 NW Couch St, Portland, OR, 97209, USA'}},{'geometry':{'x':-13654900.697835328,'y':5704360.306582605},'attributes':{'Name':'Pacific Coast Fruit Company, 201 NE 2nd Ave, Portland, Oregon, 97232'}},{'geometry':{'x':-13654793.831124166,'y':5703907.485363393},'attributes':{'Name':'Nicky USA, 223 SE 3rd Ave, Portland, OR, 97214, USA'}},{'geometry':{'x':-13654829.453361219,'y':5703721.596977669},'attributes':{'Name':'Alexis Foods, 215 SE Stark St, Portland, OR, 97214, USA'}},{'geometry':{'x':-13654680.285243554,'y':5703712.064344136},'attributes':{'Name':'Sheridan Fruit Company, 408 SE Martin Luther King, Portland, OR, 97214, USA'}},{'geometry':{'x':-13654723.699844966,'y':5703513.470124055},'attributes':{'Name':'Graziano Food Services, 302 SE Washington St, Portland, OR, 97214, USA'}},{'geometry':{'x':-13654781.585980177,'y':5703484.872919755},'attributes':{'Name':'Rinella Produce, 231 SE Alder St, Portland, OR, 97214, USA'}}]}");
urlencoded.append("incidents", "{'spatialReference':{'latestWkid':3857,'wkid':102100},'features':[{'geometry':{'x':-13656119.041436872,'y':5703857.952531632},'attributes':{'Name':'322 SW 4th Ave, Portland, OR, 97204, USA'}}]}");
urlencoded.append("defaultTargetFacilityCount", "3");
urlencoded.append("returnFacilities", "true");
urlencoded.append("returnCFRoutes", "true");

var requestOptions = {
  method: 'POST',
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://route-api.arcgis.com/arcgis/rest/services/World/ClosestFacility/NAServer/ClosestFacility_World/solveClosestFacility", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

``` 
We: 

* Set the request method, in this case `GET` or POST
* Then set the request URL, with our `requestOptions`. 
* Once the promise is fulfilled, get the response text and console log the results. 

BUT: 

What are all the error codes? 
Handle auth? 
How are dates to be encoded? 
Proper encoding for objects? 
How do you mange tokens for federated servers? 
How do you refresh authentication when necessary? 

### Demo: Search for an address

_Should the code already be in the repo?_ 

Let's walk through a demo of what calling the geocoding service would look like using `fetch`. 

1. I'm using the fetch code based off of the _Search for an address_ example. 

1. Next, let's apply this to an open source API like Mapbox. In this app, I want the user to be able to type something in the search box and return a result. 

1. I already have scaffolded out the HTML I need for my geocoding application. 

1. Now, let's add the fetch method. I have done some modifications, `query` and `outFields`. 

1. Need to parse the results as JSON before we can return the results. 

1. Select the address candidate that is first in the array. 

That's it! 

But, there is an easier method. 

-- Have participants explore fetch using REST calls from documentation? Build geocoding apps? Another?  --

## Build with REST JS 

* Mention Noah's talk: _Thursday at 13:00_ 
* Show documentation for REST JS (developer guide tutorials)? 


### Why use REST JS? 

* Appends f=json and request headers for you
* encodes query string parameters 
* creates form data as required
* clear error handling
* proper paramater encoding
* authentication handling 

Kind of analagous to ArcGIS API for Python
Very different from ArcGIS API for JS

Focus on transactions

Packages in REST JS: 

- request
- auth
- portal
- feature-layer
- service-admin
- geocoding
- routing
- demographics 

_Show REST JS code and have them implement it in an application?  Compare original geocoding app with rest js? _ 

### Access location services 

_Point to API reference and documentation of tutorials?_ 

* Access hosted data? 
  * Import CSV file, access layer metadata with REST JS 
  * Add, update, delete features? 
* Access portal items
* Geocode: Compare the original geocoding app using fetch with tutorial code solution?
* Routing: Find a route and directions? 
* Demographics...






