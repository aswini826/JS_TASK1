
const friendList = document.getElementById("totalList");
const friends = friendList.getElementsByTagName("li");

for (i = 0; i < friends.length; i++) {
    friends[i].addEventListener("click", myFunction);
}

//check first letter
function myFunction() {
    const name = this.textContent;
    const firstLetter = name[0].toLowerCase();
      //check Vowels or not
    if (["a", "e", "i", "o", "u"].includes(firstLetter)) {
        this.style.background = "red";
    }
    else {
        this.style.background = "green";
    }
}