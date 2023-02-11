let familyList=document.getElementById("memberList");
let familyMember=familyList.getElementsByTagName("li");
//Click event
for(let i=0;i<familyMember.length;i++) {
    familyMember[i].addEventListener("click",myFunction);
}
//change text color
function myFunction() {
    var index = Array.prototype.indexOf.call(familyMember, this);
    //check odd or even
    if (index % 2 === 0) {
        this.style.color = "red";
      } else {
        this.style.color = "green";
      }
}