/* 
 * allows user to input the team names for each participating team
 */
function inputTeamNames() {
    //clear the space
    //this is necessary if the user changes their mind on number of teams
    document.getElementById("teamnames").innerHTML = "";

    // create the correct number of input boxes as requested by the user
    for (let i = 0; i < document.getElementById("drop1").value; i++) {
        let teamnames = document.getElementById("teamnames");

        //create a leading text to describe which team it is
        let head = document.createElement("div");
        head.setAttribute("class", "text");
        let text = document.createTextNode("Team " + (i+1));
        head.appendChild(text);

        //create the actual input boxes
        let x = document.createElement("INPUT");
        x.setAttribute("placeholder", "Team Name " + (i+1));
        x.setAttribute("value", "Team Name " + (i+1));
        x.setAttribute("type", "text");
        x.setAttribute("padding", "12px 20px");
        x.setAttribute("id", "team" + (i+1));
        x.maxLength = "30";

        //add the elements to the page
        teamnames.appendChild(head);
        teamnames.appendChild(x);
    }
}

/* 
 * the result of clicking the Draft Page Button
 * stores the user input into local storage
 */
function goToDraftPage() {

    // error checking
    if ((document.getElementById("drop1").value) == "null") {
        alert("Choose a number of teams for your draft!");
        localStorage.clear();
        return;
    }
    else if ((document.getElementById("drop2").value) == "null") {
        alert("Choose a number of players per team for your draft!");
        localStorage.clear();
        return;
    }
    else {
        localStorage.setItem("index_numteams", document.getElementById("drop1").value);
        for (let i = 0; i < document.getElementById("drop1").value; i++) {
            // more error checking
            if (((document.getElementById("team" + (i+1)).value).charAt(0) == " ")
            || ((document.getElementById("team" + (i+1)).value).charAt(document.getElementById("team" + (i+1)).value.length - 1) == " ")
            || ((document.getElementById("team" + (i+1)).value).indexOf("  ") != -1)) {
                alert("Bad whitespacing in team name(s)");
                localStorage.clear();
                return;
            }
            else {
                localStorage.setItem("index_team" + (i+1), document.getElementById("team" + (i+1)).value);
            }
        }
        localStorage.setItem("index_numplayers", document.getElementById("drop2").value);
        localStorage.setItem("index_roundtrans", document.getElementById("drop3").value);
        localStorage.setItem("index_version", document.getElementById("drop4").value);
    
        window.location = "DraftPageReact/build/index.html"; // go to Drafting Page
    }
}

/* 
 * initialize the listeners for the page 
 */
window.onload = function init() {
    this.document.getElementById("draftpage").addEventListener("click", goToDraftPage);
    this.document.getElementById("drop1").addEventListener("change", inputTeamNames);
    this.localStorage.clear(); // clear the local storage for testing or a new draft
}
