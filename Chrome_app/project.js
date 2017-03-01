/**
 * Created by Ante on 9/02/2017.
 */

//document.getElementById("myButton").addEventListener("click", myFunction);
//function myFunction(){
//    console.log('asd');
//}


//chrome.storage.local.set({'someItem': 'some value'});

//chrome.storage.local.get('someItem', function (result) {
//    alert(result);
//});

//onload="prebaci(); dummy();"

//var submit = document.getElementById("login");
$(window).on("load", function () {
    try {
        promjenaslike();
    }
    catch (err) {
        console.log("nismo na tom pagu");
    }
});

function promjenaslike() {
    $('#file-input2').change(function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            $('#slika2').css('background-image', 'url("' + reader.result + '")')
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
        }
    });
    $('#file-input1').change(function () {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            $('#slikaplaceholder').css('background-image', 'url("' + reader.result + '")')
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
        }
    });
}


var probaj1 = document.getElementById("validate1");
if (probaj1) {
    probaj1.addEventListener("click", validate);
}
var test = document.getElementById("validate1");
$(window).on("load", function () {
    try {
        dummy();
    }
    catch (err) {
        console.log("nismo na tom pagu");
    }
});


$(window).on("load", function () {
    prebaci();
});

function validate() {
    var x = document.login.email.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        console.log("Not a valid e-mail address");
        return false;
    }
    var name = document.login.name.value;
    var email = document.login.email.value;
    var password = document.login.email.value;
    var valid = false;
    chrome.storage.local.set({'name': name});
    chrome.storage.local.set({'email': email});
    window.location = "Profile.html?name=" + name + "?email=" + email;
}
function prebaci() {

    var name = window.location.search.substr(((window.location.search).search("=")) + 1, ((window.location.search).search("email")) - ((window.location.search).search("=")) - 2);
    var email = window.location.search.substr(((window.location.search).search("email=")) + 6, ((window.location.search).search("com")) - ((window.location.search).search("email")) - 2);
    if (name == null) {
        name = "John Doe";
        email = "test@test.hr"
    }
    document.getElementById("ime").innerHTML = name;
    document.getElementById("email").innerHTML = email;


}


function dummy() {

    var arr2 = ["<p class='comments'>" + " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis tellus. Donec ante dolor, iaculis nec, gravida ac, cursus in, eros. Mauris vestibulum, felis et egestas ullamcorper, purus nibh vehicula sem, eu egestas ante nisl non justo. Fusce tincidunt, lorem nec dapibus consectetuer, leo orci mollis ipsum, eget suscipit eros purus in antiie. Wait, what am I saying? Never mind" + "</p>" +
    "<hr class='commenthr'>", "<p class='comments'>" + " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis tellus. Donec ante dolor, iaculis nec, gravida ac, cursus in, eros. Mauris vestibulum, felis et egestas ullamcorper, purus nibh vehicula sem, eu egestas ante nisl non justo. Fusce tincidunt, lorem nec dapibus consectetuer, leo orci mollis ipsum, eget suscipit eros purus in antiie. Wait, what am I saying? Never mind" + "</p>" +
    "<hr class='commenthr'>", "<p class='comments'>" + " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis tellus. Donec ante dolor, iaculis nec, gravida ac, cursus in, eros. Mauris vestibulum, felis et egestas ullamcorper, purus nibh vehicula sem, eu egestas ante nisl non justo. Fusce tincidunt, lorem nec dapibus consectetuer, leo orci mollis ipsum, eget suscipit eros purus in antiie. Wait, what am I saying? Never mind" + "</p>" +
    "<hr class='commenthr'>"];
    for (var i = 0; i < arr2.length; i++) {
        document.getElementById("comments").innerHTML += arr2[i];
    }
    chrome.storage.local.set({broj1: arr2[0]}, function () {
    });
    chrome.storage.local.set({broj2: arr2[1]}, function () {
    });
    chrome.storage.local.set({broj3: arr2[2]}, function () {
    });
    return false;

}
$(window).on("load", function () {
    var promjenabroja1 = document.getElementById("poruka");
    promjenabroja1.addEventListener("change", promjenabroja);
});


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


$(window).on("load", function () {
    document.getElementById("append1").addEventListener("click", append);
});
//chrome.storage.local.get(['secretMessage','timeSet'], function(data) {
//   console.log("The secret message:", data.secretMessage, "saved at:", data.timeSet);
//});
$(window).on("load", function () {
    document.getElementById("append1").addEventListener("click", append);
});
var arr = [];
$(window).on("load", function () {
    chrome.storage.local.get(["broj1"], function (data1) {
        arr.push(data1.broj1);

    });
    chrome.storage.local.get(["broj2"], function (data2) {
        arr.push(data2.broj2);
    });
    chrome.storage.local.get(["broj3"], function (data3) {
        arr.push(data3.broj3);
    });
});
function append() {
    function check() {

        if (occurrences(document.getElementById("comments").innerHTML, '<p class="comments">') == 3) {
            // arr[0] = chrome.storage.local.get(['broj1']);

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
        document.getElementById("poruka").value = "";
    }

    return check();
}

var promjenabroja1;
$(window).on("load", function () {
    var promjenabroja1 = document.getElementById("pokazalonaiduci");
});

$(window).on("load", function () {
    var promjenabroja1 = document.getElementById("pokazalonaiduci");
    promjenabroja1.addEventListener("click", preselise);
});
var a;
function preselise() {
    document.getElementById("comments").innerHTML = ""
    for (var i = arr.length - 1; i > -1; i--) {
        document.getElementById("comments").innerHTML += arr[i];
    }
    a = document.getElementById("comments").innerHTML;
    chrome.storage.local.set({'poveznica': a});

    window.location = "Posts.html";
}
var dobitak;
$(window).on("load", function () {


});
function vratise() {
    //chrome.storage.local.set({'name': name});
    //chrome.storage.local.set({'email': email});
    var name;
    var email;
    chrome.storage.local.get(["name","email"], function (data5) {
         name= (data5.name);
         email=(data5.email);
        window.location = "Profile.html?name=" + name + "?email=" + email;

    });

}
$(window).on("load", daj_podatke());
function daj_podatke() {
    var d = document.getElementById("history");
    d.addEventListener("click", vratise);
    chrome.storage.local.get(["poveznica"], function (data4) {
        a = (data4.poveznica);
        document.getElementById("svicomments").innerHTML += a;

    })
}



