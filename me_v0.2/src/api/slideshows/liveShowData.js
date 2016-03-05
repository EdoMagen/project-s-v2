"use strict";

module.exports = {
	"id": "s00000001",
	"hashtag": "MyEvent",
	"header_image_url": "/dist/something.jpg",
	"background_image_url": "/dist/something.jpg",
	"custom_text": "Tag your posts with #{{hashtag}} to add them to the slideshow!",
	"css_url": "http://www.swanscreen.com/app/styles/style001.css",
	"tweet_count": 15,
	"video_count": 22,
	"photo_count": 54,
	"slides": [
		{
			//example of tweet with image
			"id": "000000001", // unique ID for this slide
			"source": "twitter", // twitter or instagram
			"media_type": "photo", // photo, video or tweet
			"likes": 45, // amount of likes in either instagram or twitter
			"retweets": 12, // amount of retweets, relevant for twitter only, null otherwise
			"media_url": "http://pbs.twimg.com/media/CcxcPUDWAAEOlZM.jpg", // path to media
			"text": "This is the text that was posted on twitter 😍🙌 #MyEvent", // text property from the original JSON we receive from instagram / twitter
			"created_time": "Sat Mar 05 08:56:27 +0000 2016",
			"user": {
				"name":	"NV Concepts",
				"screen_name": "NVConcepts",
				"description": "East Coast Based Concert Production // Talent Buyer // Nightclubs // College Tours - Our Passion Is Your Experience",
				"profile_image_url": "http://pbs.twimg.com/profile_images/684952098010710017/LqmnWSbM_normal.jpg"
			}
		},
		{
			//example of tweet without image
			"id": "000000002", // unique ID for this slide
			"source": "twitter", // twitter or instagram
			"media_type": "tweet", // photo, video or tweet
			"likes": 13, // amount of likes in either instagram or twitter
			"retweets": 2, // amount of retweets, relevant for twitter only, null otherwise
			"media_url": null, // path to media
			"text": "This is the text that was posted on twitter 😍🙌 #MyEvent", // text property from the original JSON we receive from instagram / twitter
			"created_time": "Sat Mar 05 12:56:27 +0000 2016",
			"user": {
				"name":	"NV Concepts",
				"screen_name": "NVConcepts",
				"description": "East Coast Based Concert Production // Talent Buyer // Nightclubs // College Tours - Our Passion Is Your Experience",
				"profile_image_url": "http://pbs.twimg.com/profile_images/684952098010710017/LqmnWSbM_normal.jpg"
			}
		},
		{
			//example of instagram post
			"id": "000000003", // unique ID for this slide
			"source": "instagram", // twitter or instagram
			"media_type": "photo", // photo, video or tweet
			"likes"	: 18, // amount of likes in either instagram or twitter
			"retweets": 3, // amount of retweets, relevant for twitter only, null otherwise
			"media_url": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12783950_1773720016181207_1279494234_n.jpg", // path to media
			"text": "This is the text that was posted on instagram 😍🙌 #MyEvent", // text property from the original JSON we receive from instagram / twitter
			"created_time": "Sat Mar 05 12:56:27 +0000 2016",
			"user": {
				"name":	"NV Concepts",
				"screen_name": "NVConcepts",
				"description": "East Coast Based Concert Production // Talent Buyer // Nightclubs // College Tours - Our Passion Is Your Experience",
				"profile_image_url": "https://scontent.cdninstagram.com/t51.2885-19/10838339_1497246153882581_1347236928_a.jpg"
			}
		}
	],
	"blocked_users": [
		{
			"source": "twitter",
			"name":	"NV Concepts",
			"screen_name": "NVConcepts",
			"profile_image_url": "http://pbs.twimg.com/profile_images/684952098010710017/LqmnWSbM_normal.jpg", // path to profile image of the user who posted the media
		},
		{
			"source": "instagram",
			"name":	"John Doe",
			"screen_name": "johndoe123",
			"profile_image_url": "https://scontent.cdninstagram.com/t51.2885-19/10838339_1497246153882581_1347236928_a.jpg", // path to profile image of the user who posted the media
		}
	],
	"blocked_items": [
		{
			"source": "twitter",
			"name":	"NV Concepts",
			"screen_name": "NVConcepts",
			"profile_image_url": "http://pbs.twimg.com/profile_images/684952098010710017/LqmnWSbM_normal.jpg", // path to profile image of the user who posted the media
			"media_url": "http://pbs.twimg.com/media/CcxcPUDWAAEOlZM.jpg", // path to media
		},
		{
			"source": "instagram",
			"name":	"John Doe",
			"screen_name": "johndoe123",
			"profile_image_url": "https://scontent.cdninstagram.com/t51.2885-19/10838339_1497246153882581_1347236928_a.jpg", // path to profile image of the user who posted the media
			"media_url": "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12783950_1773720016181207_1279494234_n.jpg", // path to media
			"thumbnail_url": "https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/12783950_1773720016181207_1279494234_n.jpg"
		}
	]
}
