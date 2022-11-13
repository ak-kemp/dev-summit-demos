The three more common of the os mapping apis. Share:
Smaller modular footprints, big ecosystems, lots of open source support. Simple APIs. Lots of plugins, community

Couple reasons not to choose them. These don't have support for a lot of the more ARcGIS centric concepts, web map support, built in support for ArcGIS identities (authenticating ArcGIS Online users). Service types: stream layer, image layer, dynamic map layers, not necessarily support all types of services

But, are ways to support hosted data (feature layers). Mapbox GL and OL, no direct integration with ArcGIS REST APIs, though can use REST JS 

What we will talk about: accessing core location services and rendering vector tile layers 

Additional EL features: DOES support feature layers, got support for cached feature layers, map services and image services. Prebuilt geocoding control, support for vector tile layers. 

Do you need tighter integrations? Do you like 100% Web GL rendering, or do you want a small footprint? If that's a requirement for you, then the choice should be clear to choose. 

If you are building an app that uses authentication for ArcGIS Online or for Enterprise, and you really need to make use of that to access items, content, share things, web map support, use JS API. Only consuming basic location services, then OS is a good option for you. 

Esri Leaflet: 

_Basemap layer service_ 

Load leaflet from CDN **Go to display a map tutorial in EL** 

Can also display a custom vector tile style. For example, if you have created a vector tile layer, you can access the item ID from the item page **Show vector tile layer** and replace the enumeration with the ID. 

Mapbox GL JS: 

I'm going to find the code on the developer's website, documentation and tutorials **MENTION** 

Mapbox split their open source offering when they released their 2x version. The 2x version of MapboX GL JS needs to authenticate. 

The demos are for the 1x or potentially for MapLibre. But this hasn't been tested yet with 1.13 to make sure our documentation is compatible with those. 

The first thing, we want to get a basemap and some basic services. This is essentially what this demo is here. 

_He builds a geocoder, basic application_ How the integration works

This loads Mapbox, and ArcGIS REST JS for geocoding etc. 

USE the new API key implementation. Publically consumbale strings. Register a key, your responsibility to monitor it for usage. 

New style service, type=style, represents a Mapbox JSON vector style 

Implement geocoding control...class with an add method and get response back to interact with a map. 

Create a new map, point to navigation style, then render. 

**Hosting and querying your own data** 

I've run a query, we can run a second spatial query, from data that we have published to ArcGIS. Data is in a feature layer, use REST JS feature layer tools to query against the service. 

Use the GL/OL drawing tools, add a source. A source is any source of data, as "geoJSON" as an empty feature collection. Add other layers for our drawing tools. Instantiate the parcel layer, fill the results of our query, based on spatial relationships. When the map loads, add additional pieces. When create shape, use terraformer another open source library, return a corresponding arcgis geometry and use rest js to do the query. 

Execute query will query features from the feature layer, we have allowed you to query geojson. Click on the features to display attribute information. 

A layer in the background, use underlying service to query the data. 

Now, you can create and host vector tile layers. This is important because this is how GL JS mostly operates. Three different layers, trailheads, trails, parks and open open space polygons. Composite and compbine these just like regular vector tile layers inside GL JS. 

When we load the map, need to add...source of data is a layer that is published in ArcGIS. Which I will go into in a little bit. WE specify the source, define how we want to paint it according to GL JS API. 

If you have an ArcGIS Developer account, you can use an API key to read private data (in beta). If you have an ArcGIS Online account and are part of an organization, you do not have this ability. You will need to go through the standard procedure of using OAuth2 to get an ArcGIS identity, and then going through the process that way. In both cases, you will get a token to get access to the tiles of private data. 

Go through style, source layers, usage, settings. Manage access, create an API key that is allowed to access to content and items. 

The raw queries to endpoints are rate limited. JS API, Esri Leaflet, reduce query volume for public data. MB and OL don't have that. Building high volume, need to publish as vector tile layer. Also leverage ArcGIS REST JS for service interactions. 

OpenLayers

OL is a JS library for displaying map data in browsers. OL CSS JS, OLMS allows adding a vector tile layer with a style specification which is what we will get in the endpoints. 

Feature layers returned as GeoJSON. need vector layer, vector source. After the basemap is added, use ol.source.vector to create a new vector source based on the service URL of our feature layer. Export features as geojson. Take source, open layers vector layer, and add it to the map with the addLayer function. 

Routing with OL 

Import ArcGIS REST JS library. Add a button to the UI to click to generate route. 

QA: 

Migration procedure: 

You are required to migrate all applications if you have an ArcGIS developer subscription. Deadline is April 30. 

If you are not using a developer subscription, part of Online, only need to migrate commercial application (revenue generating application) need to use credentials for developer subscription. 

Work, but need to migrate to be in compliance with terms and conditions. 

Free basemaps: 

Number of basemaps is dependent on subscription type of you have. 2 million tiles with your free tier. May vary slightly depending on the type of API you use. If Online, you essentially have unlimited basemaps.

We do have a tile estimator. 

Vector tiles: 

Can't edit raster layers. Data and presentation of data are decoupled, can style easily. 

Does using an OS negatively affect partner status? 

No it does not negatively affect partner status. When used against ArcGIS Platform. 

Is it possible to auth a private Online VTL through OAuth? 

Yes. Secured are the tiles. Append token to tile URL. 

Leaflet used with portal?--> Can you make requests to portal and show them on a Leaflet map? Yes. But, different in scope. No web map support, identity, wide variety of rendering . Depending on application and capabilities, maybe? But, maybe use ArcGIS API for JS. 

API keys can be allowed to access feature services if you have an ArcGIS Developer account. You cannot if you are in an ArcGIS Online organization. 

Are there plans for web map support for Esri Leaflet? 

No. mainly because web map spec is very big. Don't have resources for Esri leaflet. Implemeneting all web map stack means supporting all renderers and layers (stream layers etc.) A lot of web map spec that is really difficult to support. Recommend going with JS API if you need that. 

Is it possible to convert raster to vector? E.g. imagery? 

Structure of imagery: vector tile labels over imagery layer 
Can load just lablels and customize just that over imagery. 

Can go through and just want imagery tiles and my custom labels. 