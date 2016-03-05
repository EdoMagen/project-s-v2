var actions = [

  //Dashboard actions
  {
    "type": "DASHBOARD_REQUEST",
    "action": "getShows",
    "user_id":"uid_000001"
  },
  {
    "type": "DASHBOARD_REQUEST",
    "action": "downloadShow",
    "user_id":"uid_000001",
    "slideshow_id": "s000001"
  },
  //Print Materials actions
  {
    "type": "PRINT_MATERIALS_REQUEST",
    "action": "preview",
    "user_id":"uid_000001",
    "slideshow_id": "s000001",
    "template_id": "t000001"
  },
  {
    "type": "PRINT_MATERIALS_REQUEST",
    "action": "download",
    "user_id":"uid_000001",
    "slideshow_id": "s000001",
    "template_id": "t000001"
  },
  //Show Editor actions
  {
    "type": "SHOW_EDITOR_REQUEST",
    "action": "create",
    "user_id":"uid_000001",
    "hashtag": "MyEvent",
    "use_instagram": true,
    "use_twitter": true,
    "header_image_url": "/dist/something.jpg", // need to provide a way to upload files
    "background_image_url": "/dist/something.jpg", // need to provide a way to upload files
    "custom_text": "Tag your posts with #{{hashtag}} to add them to the slideshow!",
    "style_id": "style_001", // css_url
    "location": {
        "lat": 129637,
        "long": 387428,
        "radius": {
          "diameter": 2,
          "unit": "km" // km / mi
        }
    },
  },
  {
    "type": "SHOW_EDITOR_REQUEST",
    "action": "update",
    "user_id":"uid_000001",
    "slideshow_id":"uid_000001",
    "hashtag": "MyEvent",
    "use_instagram": true,
    "use_twitter": true,
    "header_image_url": "/dist/something.jpg", // need to provide a way to upload files
    "background_image_url": "/dist/something.jpg", // need to provide a way to upload files
    "custom_text": "Tag your posts with #{{hashtag}} to add them to the slideshow!",
    "style_id": "style_001", // css_url
    "location": {
        "lat": 129637,
        "long": 387428,
        "radius": {
          "diameter": 2,
          "unit": "km" // km / mi
        }
    },
  },
  {
    "type": "SHOW_EDITOR_REQUEST",
    "action": "delete",
    "user_id":"uid_000001",
    "slideshow_id":"uid_000001",
  },
  //Show actions
  {
    "type": "SLIDESHOW_REQUEST",
    "action": "getLatest",
    "user_id":"uid_000001"
  },
  {
    "type": "SLIDESHOW_REQUEST",
    "action": "ping",
    "user_id": "uid_000001",
    "slideshow_id": "s000001"
  },

]
