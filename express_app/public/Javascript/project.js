/**
 * Created by Ante on 9/02/2017.
 */
function validate() {
    var x = document.login.email.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    var name = document.login.name.value;
    var email = document.login.email.value;
    var password = document.login.email.value;
    var valid = false;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    window.location = "Profile?name=" + name + "?email=" + email;
}
function prebaci() {
    var name = window.location.search.substr(((window.location.search).search("=")) + 1, ((window.location.search).search("email")) - ((window.location.search).search("=")) - 2);
    var email = window.location.search.substr(((window.location.search).search("email=")) + 6, ((window.location.search).search("com")) - ((window.location.search).search("email")) - 2);
    document.getElementById("ime").innerHTML = name;
    document.getElementById("email").innerHTML = email;
}


function dummy() {
    var arr = ["<p class='comments'>" + " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis tellus. Donec ante dolor, iaculis nec, gravida ac, cursus in, eros. Mauris vestibulum, felis et egestas ullamcorper, purus nibh vehicula sem, eu egestas ante nisl non justo. Fusce tincidunt, lorem nec dapibus consectetuer, leo orci mollis ipsum, eget suscipit eros purus in antiie. Wait, what am I saying? Never mind" + "</p>" +
    "<hr class='commenthr'>", "<p class='comments'>" + " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis tellus. Donec ante dolor, iaculis nec, gravida ac, cursus in, eros. Mauris vestibulum, felis et egestas ullamcorper, purus nibh vehicula sem, eu egestas ante nisl non justo. Fusce tincidunt, lorem nec dapibus consectetuer, leo orci mollis ipsum, eget suscipit eros purus in antiie. Wait, what am I saying? Never mind" + "</p>" +
    "<hr class='commenthr'>", "<p class='comments'>" + " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis tellus. Donec ante dolor, iaculis nec, gravida ac, cursus in, eros. Mauris vestibulum, felis et egestas ullamcorper, purus nibh vehicula sem, eu egestas ante nisl non justo. Fusce tincidunt, lorem nec dapibus consectetuer, leo orci mollis ipsum, eget suscipit eros purus in antiie. Wait, what am I saying? Never mind" + "</p>" +
    "<hr class='commenthr'>"]
    for (var i = 0; i < arr.length; i++) {
        document.getElementById("comments").innerHTML += arr[i];
    }
    localStorage.setItem("broj1", arr[0]);
    localStorage.setItem("broj2", arr[1]);
    localStorage.setItem("broj3", arr[2]);
}


function promjenabroja() {
    var broj1 = document.getElementById("poruka").value.length;
    var broj = (500 - broj1) + "characters left";
    document.getElementById("brojac").innerHTML = broj;
}


function occurrences(string, subString, allowOverlapping) {
    string += "";
    subString += "";
    if (subString.length <= 0) return (string.length + 1);
    var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;
    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}


var arr = [];
function append() {

    function check() {
        if (occurrences(document.getElementById("comments").innerHTML, '<p class="comments">') == 3) {
            arr[0] = localStorage.getItem("broj1");
            arr[1] = localStorage.getItem("broj2");
            arr[2] = localStorage.getItem("broj3");
            arr.push("<p class='comments'>" + document.getElementById("poruka").value + "</p>" + "<hr class='commenthr'>");
            document.getElementById("comments").innerHTML = "";
            for (var i = arr.length - 1; i > -1; i--) {
                document.getElementById("comments").innerHTML += arr[i];
            }
        }
        else if (occurrences(document.getElementById("comments").innerHTML, '<p class="comments">') == 4) {
            arr.push("<p class='comments'>" + document.getElementById("poruka").value + "</p>" + "<hr class='commenthr'>")
            document.getElementById("comments").innerHTML = "";
            for (var i = arr.length - 1; i > -1; i--) {
                document.getElementById("comments").innerHTML += arr[i];
            }
            document.getElementById("pokazalonaiduci").style.display = "block";
        }
        else {
            arr.push("<p class='comments'>" + document.getElementById("poruka").value + "</p>" + "<hr class='commenthr'>")
            document.getElementById("comments").innerHTML = "";
            for (var i = arr.length - 1; i > arr.length - 6; i--) {
                document.getElementById("comments").innerHTML += arr[i];
            }
            document.getElementById("pokazalonaiduci").style.display = "block";
        }
        document.getElementById("poruka").value="";
    }
    return check();
}


function preselise() {
    document.getElementById("comments").innerHTML = ""
    for (var i = arr.length - 1; i > -1; i--) {
        document.getElementById("comments").innerHTML += arr[i];
    }
    var a = document.getElementById("comments").innerHTML;
    console.log(a);
    localStorage.setItem("poveznica", a);
    window.location = "/Posts";
}


function daj_podatke() {
    document.getElementById("comments").innerHTML = localStorage.getItem("poveznica");
    console.log(localStorage.getItem("poveznica", 5));
}


