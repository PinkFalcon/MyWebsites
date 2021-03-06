function Clear() {
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("sugges").value = "";
}
function input() {
    debugger;
   // alert("Hello!");
    var fname = document.getElementById("fname").value;
    var midmame = document.getElementById("mname").value;
    var lastname = document.getElementById("lname").value;
   var Gender = document.querySelector('input[name="gender"]:checked').value;

    //var feedback = document.getElementById("mytest").value;
    var feedback = document.getElementById("TopFeedback1").innerHTML;
    var suggestion = document.getElementById("sugges").value;
    var d = new Date();
    //alert(fname.length);
    if (fname == "" ) {
        alert("Please inpur your first name. ");
    }
    else if (lastname == "")
    {
        alert("Please inpur your last name. ");
    }
    else if (suggestion == "") {
        alert("Please inpur your suggestion. ");
    }
    else if (fname.length > 40 || midmame.length > 40 || lastname.length > 40)
    {
        alert("Please inpur your name in 40 char ");
    }
    else{
        if (midmame.trim() == "")
            name = Gender + " " + fname.trim() + " " + lastname.trim();
        else {
            name = Gender + " " + fname.trim() + " " + midmame.trim() + " " + lastname.trim()
        }
        feedback +="<div  class='feed' id='f'>";
        feedback += "<br>" + "Name: " + name + "<br>" + "Suggestion: " + suggestion + "<br>" + d + "<br>";
        feedback += "</div>";
        //document.getElementById("mytest").value = feedback;
        document.getElementById("TopFeedback1").innerHTML = feedback;
        //document.getElementById("f").style.marginRight="20px";

    }

    var objDiv = document.getElementById("TopFeedback1");
    objDiv.scrollTop = objDiv.scrollHeight;
    Clear();

}
function validName() {
    //document.getElementsByClassName("s").style.display = "none";
    var a = document.getElementById("fname").value;
    if(a.length>0)
        document.getElementById("s").style.display = "none";
    else
        document.getElementById("s").style.display = "inline-block";
}
