//window.onload makes it so the initial things happen only after the page is actually loaded
var post1Filled = false;
window.onload = function () {
//hiding the post boxes
document.getElementById("postBox1").style.visibility = "hidden";
document.getElementById("postBox2").style.visibility = "hidden";
}

function post() {
    var postTextEntered = document.getElementById("enteredPost").value;
    if(post1Filled == false) {
      document.getElementById("textSpace1").innerHTML = postTextEntered;
      post1Filled = true;
      document.getElementById("noPosts").style.display = "none";
      document.getElementById("postBox1").style.visibility = "visible";
      console.log("in if statement")
    }
    else {//need to add more else ifs and variables for more posts
      document.getElementById("textSpace2").innerHTML = postTextEntered;
      document.getElementById("postBox1").style.visibility = "visible";
      document.getElementById("postBox2").style.visibility = "visible";
    }


}

// var chat2 = [];
var count1 = 1;
function comment1() {
    var x = document.getElementById("myComment1").value;
    // chat2.push(x);
    var p = document.createElement("p");
    p.className = 'chatMessage';
    p.innerHTML = count1 + ". " + x;
    document.getElementById("commentList1").appendChild(p);
    count1 = count1 + 1; // count++; or ++count; or count += 1;
}

var count2 = 1;
function comment2() {
    var x = document.getElementById("myComment2").value;
    // chat2.push(x);
    var p2 = document.createElement("p");
    p2.className = 'chatMessage';
    p2.innerHTML = count2 + ". " + x;
    document.getElementById("commentList2").appendChild(p2);
    count2 = count2 + 1; // count++; or ++count; or count += 1;
}

function moveIcon() {
  var icon1 = document.getElementById("thumbsup");
  document.getElementById("icon").innerHTML = icon1;

}

function thumbsup1() {
  document.getElementById("downicon1").style.display = "none";
  document.getElementById("thumbicon1").style.display = "block";
}

function thumbsdown1() {
  document.getElementById("thumbicon1").style.display ="none";
  document.getElementById("downicon1").style.display = "block";
}

function thumbsup2() {
  document.getElementById("downicon2").style.display = "none";
  document.getElementById("thumbicon2").style.display = "block";
}

function thumbsdown2() {
  document.getElementById("thumbicon2").style.display ="none";
  document.getElementById("downicon2").style.display = "block";
}

