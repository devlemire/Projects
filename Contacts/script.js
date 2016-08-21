function newContact(firstName, lastName, phoneNumber) {
	contacts[contact.length] = {
		firstName: firstName,
		lastName: lastName,
		phoneNumber: phoneNumber
	};
}

function removeContact(lastName) {
	var counter = 0;
	var contactIndex = [];
	for (var i = 0, i < contacts.length, i++) {
		if (contacts[i].lastName == lastName) {
			counter++;
		}
	}
}

var contacts = [];

