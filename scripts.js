topBottomTracker = 0;
leftRightTracker = 0;

function init() {

    let takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener('click', function () {
        let input = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (input) {
            document.getElementById("flightStatus").innerText = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerText = "10000";
        }
    });

    let landButton = document.getElementById("landing");
    landButton.addEventListener('click', function (){
        let input = window.alert("The shuttle is landing. Landing gear engaged.");
            document.getElementById("flightStatus").innerText = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerText = "0";
    });

    let abortMissionButton = document.getElementById("missionAbort");
    abortMissionButton.addEventListener('click', function() {
        let input = window.confirm("Confirm that you want to abort the mission.");
        if (input) {
            document.getElementById("flightStatus").innerText = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerText = "0";
        }
    });

    document.getElementById('up').addEventListener('click', function() {
        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) + 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        let rocket = document.getElementById('rocket');
        topBottomTracker = topBottomTracker - 10;
        rocket.setAttribute("style", "top: " + topBottomTracker + "px; left: " + leftRightTracker + "px; right: " + leftRightTracker + "px; position: relative;");

    });

    document.getElementById('down').addEventListener('click', function() {
        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) - 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        let rocket = document.getElementById('rocket');
        topBottomTracker = topBottomTracker + 10;
        rocket.setAttribute("style", "top: " + topBottomTracker + "px; left: " + leftRightTracker + "px; right: " + leftRightTracker + "px; position: relative;");

    });

    document.getElementById('left').addEventListener('click', function() {
        let rocket = document.getElementById('rocket');
        leftRightTracker = leftRightTracker - 10;
        rocket.setAttribute("style", "top: " + topBottomTracker + "px; left: " + leftRightTracker + "px; right: " + leftRightTracker + "px; position: relative;");

    });

    document.getElementById('right').addEventListener('click', function() {
        let rocket = document.getElementById('rocket');
        leftRightTracker = leftRightTracker + 10;
        rocket.setAttribute("style", "top: " + topBottomTracker + "px; left: " + leftRightTracker + "px; right: " + leftRightTracker + "px; position: relative;");
    });




    /*let directionalButtons = document.getElementById("shuttleBackground");
    directionalButtons.addEventListener("click", function() {
        document.getElementById("shuttleBackground").style.top = "10px";
        document.getElementById("shuttleBackground").style.bottom = "10px";
        document.getElementById("shuttleBackground").style.left = "10px";
        document.getElementById("shuttleBackground").style.right = "10px";
    });*/
}

window.addEventListener("load", init);
// Write your JavaScript code here.
// Remember to pay attention to page loading!