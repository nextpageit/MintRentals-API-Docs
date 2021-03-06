define({ "api": [
  {
    "type": "POST",
    "url": "/booking/",
    "title": "Create Booking",
    "version": "1.0.0",
    "name": "Booking_Car",
    "group": "Booking",
    "description": "<p>Booking Car</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "authentication",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.username",
            "description": "<p>Username must be unique</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.password",
            "description": "<p>Secure user password</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "booking",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.pickupLocation",
            "description": "<p>3 letter location code. AKL,CHC,etc</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.dropoffLocation",
            "description": "<p>3 letter location code. AKL,CHC,etc</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "Object.pickupDate",
            "description": "<p>Date should be dd-mm-yyyy format</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "Object.dropoffDate",
            "description": "<p>Date should be dd-mm-yyyy format</p>"
          },
          {
            "group": "Parameter",
            "type": "24hourtime",
            "optional": false,
            "field": "Object.pickupTime",
            "description": "<p>Should be 24 hour format. HH:mm eq. 17:00</p>"
          },
          {
            "group": "Parameter",
            "type": "24hourtime",
            "optional": false,
            "field": "Object.dropoffTime",
            "description": "<p>Should be 24 hour format. HH:mm eq. 17:00</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Object.externalID",
            "description": "<p>It should be an Integer value</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "customer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.firstName",
            "description": "<p>First Name of the customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.lastName",
            "description": "<p>Last Name of the customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.emailAddress",
            "description": "<p>Email address of the customer. It should be valid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.phoneNumber",
            "description": "<p>Valid Phone Number of the customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.address",
            "description": "<p>The address where the customer's resides</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.city",
            "description": "<p>City of the customer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.state",
            "description": "<p>State of the customer</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Object.postCode",
            "description": "<p>Post Code of the customer. Must be an Integer value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.country",
            "description": "<p>The country where the customer's resides</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Object.flightNumber",
            "description": "<p>The flight Number of the customer</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Object.passengers",
            "description": "<p>Number of passengers</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "details",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Object.vehicle",
            "description": "<p>Should be an Integer value</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Object.insurance",
            "description": "<p>Should be an Integer value</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Object.extra",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Object.Object.id",
            "description": "<p>ID of an extra item. It should be an Integer value</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "Object.Object.quantity",
            "description": "<p>Quantity of an extra item. It should be an Integer value</p>"
          }
        ]
      }
    },
    "filename": "API_DocsApp/app/example.js",
    "groupTitle": "Booking"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "API_DocsApp/app/template/main.js",
    "group": "D__Sahil_MintRentals_API_DocsApp_app_template_main_js",
    "groupTitle": "D__Sahil_MintRentals_API_DocsApp_app_template_main_js",
    "name": ""
  },
  {
    "type": "GET",
    "url": "/insurances/",
    "title": "Get Insurances",
    "version": "1.0.0",
    "name": "Insurances",
    "group": "Insurance",
    "description": "<p>Get Insurances</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "insurance",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Object.id",
            "description": "<p>Id of an Insurance Name. Must be an Integer value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.name",
            "description": "<p>Type or Name of an Insurance. Must be a String value</p>"
          },
          {
            "group": "Success 200",
            "type": "money",
            "optional": false,
            "field": "Object.price",
            "description": "<p>Price of an Insurance. Will be an Integer value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.description",
            "description": "<p>Description of an Insurance with terms. Must be a String value</p>"
          }
        ]
      }
    },
    "filename": "API_DocsApp/app/example.js",
    "groupTitle": "Insurance"
  },
  {
    "type": "GET",
    "url": "/locations/",
    "title": "Get Locations",
    "version": "1.0.0",
    "name": "Locations",
    "group": "Location",
    "description": "<p>Get Location</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Location",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Location.id",
            "description": "<p>ID of the Location. It should be an Integer value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Location.name",
            "description": "<p>Name of the Place with which ID is associated</p>"
          }
        ]
      }
    },
    "filename": "API_DocsApp/app/example.js",
    "groupTitle": "Location"
  },
  {
    "type": "GET",
    "url": "/extras/",
    "title": "Get Extras",
    "version": "1.0.0",
    "name": "Extras",
    "group": "Vehicle",
    "description": "<p>Get Extras</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "extra",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Object.id",
            "description": "<p>ID of an extra item. It should be an Integer value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.name",
            "description": "<p>Name of an extra item. It should be a String value</p>"
          },
          {
            "group": "Success 200",
            "type": "money",
            "optional": false,
            "field": "Object.price",
            "description": "<p>Price of an extra item customer wants. It can be Decimal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.type",
            "description": "<p>Depends on Usage basis. Can be either or Daily basis of at Fixed rate</p>"
          }
        ]
      }
    },
    "filename": "API_DocsApp/app/example.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "GET",
    "url": "/vehicles/",
    "title": "Get Vehicles data",
    "version": "1.0.0",
    "name": "Vehicles",
    "group": "Vehicle",
    "description": "<p>Get Vehices data</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "vehicle",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Object.id",
            "description": "<p>ID of Vehicle type. It should be an Integer value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.name",
            "description": "<p>Vehicle type Name. It must be String value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.year",
            "description": "<p>Make Year of the Vehicle</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.fuel",
            "description": "<p>Fuel Used by Car. It can be either Petrol or any other Fuel Type</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal",
            "optional": false,
            "field": "Object.fuelConsumption",
            "description": "<p>Fuel Consumed by the vehicle in particular distance at particular speed, It can be Decimal</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.transmission",
            "description": "<p>Vehicle Transmission. Should return String value</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Object.passengers",
            "description": "<p>Number of passengers. Must return only Integer value</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Object.doors",
            "description": "<p>Number of doors in Vehicle. Must return only Integer value</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Object.suitcasesLarge",
            "description": "<p>Number of Large Suitcase(s) in Vehicle. Must return only Integer value</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "Object.suitcasesSmall",
            "description": "<p>Number of Small Suitcase(s) in Vehicle. Must return only Integer value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Object.image",
            "description": "<p>Image of Vehicle</p>"
          }
        ]
      }
    },
    "filename": "API_DocsApp/app/example.js",
    "groupTitle": "Vehicle"
  }
] });
