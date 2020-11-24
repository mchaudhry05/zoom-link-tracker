document.getElementById("addMeeting").addEventListener("click", processInput);
var storageForMeetings = []; 
var listOfMeetings = document.getElementById("meetings");

function setUp(){
    if(localStorage.getItem("storageForMeetings") === null){
        localStorage.setItem("storageForMeetings", JSON.stringify(storageForMeetings));
    }else{
        storageForMeetings = JSON.parse(localStorage.getItem("storageForMeetings"));
        console.log(storageForMeetings);
    }
    showCurrentMeetings();
}

setUp();

function showCurrentMeetings(){
    var i; 
    for(i = 0; i < storageForMeetings.length; i++){
        var singularMeetingList = document.createElement("li")
        var meeting = document.createElement("a"); 
        meeting.href = storageForMeetings[i][1];
        meeting.textContent = storageForMeetings[i][0];
        meeting.target = "_blank";
        meeting.setAttribute("style", "color: black; text-decoration: none; font-size: 20px; padding-top: 10px;");
        singularMeetingList.appendChild(meeting);
        listOfMeetings.appendChild(singularMeetingList);
    }
}

function processInput(){
    var meetingName = document.getElementById("meeting-name").value; 
    var meetingLink = document.getElementById("meeting-link").value; 
    meetingName = meetingName.trim()
    meetingLink = meetingLink.trim()
    
    addMeeting(meetingName, meetingLink);

    document.getElementById("meeting-name").value = ""; 
    document.getElementById("meeting-link").value = ""; 
    
}

function showAddedMeeting(meetingName, meetingLink){
    var singularMeetingList = document.createElement("li")
    var meeting = document.createElement("a"); 
    meeting.href = meetingLink;
    meeting.textContent = meetingName;
    meeting.target = "_blank";
    meeting.setAttribute("style", "color: black; text-decoration: none; font-size: 20px; padding-top: 10px;");
    singularMeetingList.appendChild(meeting);
    listOfMeetings.appendChild(singularMeetingList);

}



var currentStorageForMeetings = new Array();
function addMeeting(meetingName, meetingLink){
    currentStorageForMeetings = JSON.parse(localStorage.getItem("storageForMeetings")); 
    currentStorageForMeetings.push([meetingName, meetingLink]); 
    localStorage.setItem("storageForMeetings", JSON.stringify(currentStorageForMeetings)); 
    showAddedMeeting(meetingName, meetingLink);
}

