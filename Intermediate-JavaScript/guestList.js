var guestList = ["Lawal", "Jack", "James", "Lara", "Jason", "Pam"];

var name = prompt("Enter name: ");

if (guestList.includes(name)) {
    alert("Welcome " + name);
} else {
    alert("Sorry, " + name + " is not in the list");
}