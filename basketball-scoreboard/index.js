let homeScore = 0;
let homeFouls = 0;
let homeScoreEl = document.getElementById("home-score-el");
let homeFoulEl = document.getElementById("home-foul-el");

let visitorScore = 0;
let visitorFouls = 0;
let visitorScoreEl = document.getElementById("visitor-score-el");
let visitorFoulEl = document.getElementById("visitor-foul-el");

let period = 1;
let periodTimer = 0;
let periodEl = document.getElementById("period-el");
let periodTimerEl = document.getElementById("period-timer-el");

function addHome1Point() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    highlightWinningTeam();
}

function addHome2Points() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    highlightWinningTeam();
}

function addHome3Points() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    highlightWinningTeam();
}

function addVisitor1Point() {
    visitorScore += 1;
    visitorScoreEl.textContent = visitorScore;
    highlightWinningTeam();   
}

function addVisitor2Points() {
    visitorScore += 2;
    visitorScoreEl.textContent = visitorScore;
    highlightWinningTeam();
}

function addVisitor3Points() {
    visitorScore += 3;
    visitorScoreEl.textContent = visitorScore;
    highlightWinningTeam();
}

function addHomeFoul() {
    homeFouls += 1;
    homeFoulEl.textContent = homeFouls;
}

function addVisitorFoul() {
    visitorFouls += 1;
    visitorFoulEl.textContent = visitorFouls;
}

function addPeriod() {
    if (period < 4) {
        period += 1;
    } else {
        period = 1;
    }
    periodEl.textContent = period;
    periodTimer = "10:00";
    periodTimerEl.textContent = periodTimer;
    
}

function resetGame() {
    homeScore = 0;
    homeFouls = 0;
    homeScoreEl.textContent = homeScore;
    homeFoulEl.textContent = homeFouls;
    homeScoreEl.style.color = "#9f1239";
    visitorScore = 0;
    visitorFouls = 0;
    visitorScoreEl.textContent = visitorScore;
    visitorFoulEl.textContent = visitorFouls;
    visitorScoreEl.style.color = "#9f1239";
    period = 1;
    periodEl.textContent = period;
    periodTimer = "10:00";
    periodTimerEl = periodTimer;
}

function highlightWinningTeam() {
    if (homeScore > visitorScore) {
        homeScoreEl.style.color = "yellow";
        visitorScoreEl.style.color = "#F94F6D";
    } else if (homeScore == visitorScore) {
        homeScoreEl.style.color = "#F94F6D";
        visitorScoreEl.style.color = "#F94F6D";
    } else {
        visitorScoreEl.style.color = "yellow";
        homeScoreEl.style.color = "#F94F6D";
    }
}

// function periodTimer() {

// }