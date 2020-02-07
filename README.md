# Build Week Backend API
Website API for Wanderlust Build Week

API Documentation

# Login Systems

Register
POST - https://wanderlust-shouts.herokuapp.com/api/auth/register
Json Data:
{
    username: "testUser",
    password: "testPassword",
    accountType: "guide/user"
}

Successful call: 201 with Json Data:

{
    "id": 61,
    "username": "testUser",
    "accountType": "guide/user"
}

Login
POST - https://wanderlust-shouts.herokuapp.com/api/auth/login
Json Data:
{
    username: "testUser",
    password: "testpassword"
}

Successful call: 200 with Json Data:

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2MSwidXNlciI6IlRlc3QiLCJpYXQiOjE1ODEwMzg0ODAsImV4cCI6MTU4MTEyNDg4MH0.-q8ddrWgay6t5GbtLFhvIbeQukdxD87iDBFTbu_cL0E",
    "user": {
        "id": 61,
        "username": "testUser",
        "accountType": "guide/user"
    }
}

# Tours Systems

Get Tours
GET - https://wanderlust-shouts.herokuapp.com/api/tours
Json Data:

NONE REQUIRED

Successful call: 200 with Json Data (array of tours):

[
    {
        "id": 101,
        "user": "ChaseTours112",
        "title": "Snorkeling in the Blue",
        "photo": "prettyphoto.url",
        "location": "Bahli",
        "duration": "3 Hours",
        "guide": "Private",
        "description": "Beautiful. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": 102,
        "user": "ChaseTours112",
        "title": "Mountain Hike",
        "photo": "prettyphoto.url",
        "location": "Bahli",
        "duration": "5 Hours",
        "guide": "Private",
        "description": "Stunning. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]


Upload Tour
POST - https://wanderlust-shouts.herokuapp.com/api/tours/upload
Json Data:

{
	"tour": {
		"title": "Test Post",
		"photo": "Bahli.url",
		"location": "Bahli",
		"duration": "String of Duration",
		"guide": "Professional/Private",
		"description": "Oceans, Food, and Paradise"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2MSwidXNlciI6IlRlc3QiLCJpYXQiOjE1ODEwMzg0ODAsImV4cCI6MTU4MTEyNDg4MH0.-q8ddrWgay6t5GbtLFhvIbeQukdxD87iDBFTbu_cL0E"
}

Successful call: 201 with Json Data:

{
    "id": 105,
    "user": "testUser",
    "title": "Test Post",
    "photo": "Bahli.url",
    "location": "Bahli",
    "duration": "3 Hours",
    "guide": "Professional",
    "description": "Oceans, Food, and Paradise"
}


Get Tour by Id
POST - https://wanderlust-shouts.herokuapp.com/api/tours/:id
Json Data:

NONE REQUIRED - Pass a number in place of :id

Successful call: 200 with Json Data:

{
    "id": 105,
    "user": "testUser",
    "title": "Test Post",
    "photo": "Bahli.url",
    "location": "Bahli",
    "duration": "3 Hours",
    "guide": "Professional",
    "description": "Oceans, Food, and Paradise"
}


Get Tours by Guide Username
POST - https://wanderlust-shouts.herokuapp.com/api/tours/user/:username
Json Data:

NONE REQUIRED - Pass a username in place of :id

Successful call: 200 with Json Data (array of posts):

[
    {
        "id": 101,
        "user": "ChaseTours112",
        "title": "Snorkeling in the Blue",
        "photo": "prettyphoto.url",
        "location": "Bahli",
        "duration": "3 Hours",
        "guide": "Private",
        "description": "Beautiful. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": 102,
        "user": "ChaseTours112",
        "title": "Mountain Hike",
        "photo": "prettyphoto.url",
        "location": "Bahli",
        "duration": "5 Hours",
        "guide": "Private",
        "description": "Stunning. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]


Delete Tours by Tour ID
DELETE - https://wanderlust-shouts.herokuapp.com/api/tours/delete/:id
Json Data:

NONE REQUIRED - Pass a number in place of :id

Successful Call: 200 with message: "Successfully deleted tour"


Update Tour
PUT - https://wanderlust-shouts.herokuapp.com/api/tours/update/:id
Json Data:

NONE REQUIRED - Pass a number in place of :id

Successful Call: 200 with Json Data:

[
    {
        "id": 105,
        "user": "Test",
        "title": "Test Post - Updated",
        "photo": "Bahli.url",
        "location": "Bahli",
        "duration": "3 Hours",
        "guide": "Professional",
        "description": "Oceans, Food, and Paradise"
    }
]