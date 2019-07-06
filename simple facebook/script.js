
var database = [
	{
		username: "Mo",
		password: "123123"
	},

	{
		username: "Ahmed",
		password: "123123"
	},

	{
		username: "Jack",
		password: "123123"
	},

];

var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	}	
];

function isuservalid(username, password) {

	for (var i=0; i < database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password) {
			return true;
		} 
			
	}
		return false;
}

function signIn(username,password) {

if (isuservalid(username, password)) {
	console.log(newsfeed);
} else {
	alert("The user and pass are wrong");
}

}
var usernameprompt = prompt("username?")
var passprompt = prompt("pass?") 


signIn(usernameprompt,passprompt);








