// AJAX = Asynchronous JavaScript And XML.

// AJAX is not a programming language.

// AJAX just uses a combination of:

// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)

//HTML
<!DOCTYPE html>
<html>
<body>

<div id="demo">
  <h2>Let AJAX change this text</h2>
  <button type="button" onclick="loadDoc()">Change Content</button>
</div>

</body>
</html>


/// The HTML page contains a <div> section and a <button>.

// The <div> section is used to display information from a server.

// The <button> calls a function (if it is clicked).

// The function requests data from a web server and displays it:

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}