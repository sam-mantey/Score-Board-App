let homePoint = 0
let guestPoint = 0
let guestB = document.getElementById("guest-point")
let homeB = document.getElementById("home-point")
let winner = document.getElementById("winner")

function add1Home() {
    homePoint += 1;
    homeB.innerText = homePoint;
}

function add2Home() {
    homePoint += 2
    homeB.textContent = homePoint
}
 function add3Home() {
    homePoint += 3
    homeB.textContent = homePoint
 }

 function add1Guest() {
    guestPoint += 1;
    guestB.innerText = guestPoint;
}

function add2Guest() {
    guestPoint += 2
    guestB.textContent = guestPoint
}
 function add3Guest() {
    guestPoint += 3
    guestB.textContent = guestPoint
 }

 function reset() {
    guestPoint = 0
    homePoint = 0
    homeB.textContent = 0
    guestB.textContent = 0
    winner.textContent = ""
 }

 function end() {
    if (homePoint > guestPoint) {
        winner.textContent = "Home team wins"
    }else if (homePoint === guestPoint) {
        winner.textContent = "It is a tie"
    } else {
        winner.textContent = "guest team wins"
    }

 }