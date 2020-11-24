document.getElementById("addMeeting").addEventListener("click", main);

function main(){
    var meetingName = document.getElementById("meeting-name").value; 
    var meetingLink = document.getElementById("meeting-link").value; 
    meetingName = meetingName.trim()
    meetingLink = meetingLink.trim()
    document.getElementById("meeting-name").value = ""; 
    document.getElementById("meeting-link").value = ""; 
    showList(meetingName, meetingLink);
}

function showList(meetingName, meetingLink){
    var listOfMeetings = document.getElementById("meetings");
    var singularMeetingList = document.createElement("li")
    var meeting = document.createElement("a"); 
    meeting.href = meetingLink;
    meeting.textContent = meetingName;
    meeting.target = "_blank";
    meeting.setAttribute("style", "color: black; text-decoration: none; font-size: 20px; padding-top: 10px;");
    singularMeetingList.appendChild(meeting);
    listOfMeetings.appendChild(singularMeetingList);
}

