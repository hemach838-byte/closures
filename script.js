function createCounter() {
  let score = JSON.parse(localStorage.getItem("score")) || 0;
  let history = JSON.parse(localStorage.getItem("history")) || [];
  function save() {
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("history", JSON.stringify(history));
  }

  function getTime() {
    return new Date().toLocaleTimeString();
  }
  return {
    add(points) {
      if (points < 0) return "Points must be positive";
      score += points;
      history.push(`[${getTime()}] Added: ${points}`);
      save();
      return "Points added!";
    },
    subtract(points) {
      if (points < 0) return "Points must be positive";
      if (points > score) return "Not enough points to subtract";
      score -= points;
      history.push(`[${getTime()}] Subtracted: ${points}`);
      save();
      return "Points subtracted!";
    },
    clearHistory() {
      history = [];
      localStorage.setItem("history", JSON.stringify(history));
      return "History cleared!";
    },
    reset() {
      score = 0;
      history.push(`[${getTime()}] Score reset`);
      save();
      return "Score reset!";
    },
    showScore() {
      return score;
    },
    getHistory() {
      return [...history];
    },
  };
}
const scoreManager = createCounter();
function updateUI(message = "") {
  document.getElementById("score").innerText = scoreManager.showScore();
  document.getElementById("message").innerText = message;
  const historyList = document.getElementById("history");
  historyList.innerHTML = "";
  scoreManager.getHistory().forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}
function addScore() {
  const points = Number(document.getElementById("points").value);
  const msg = scoreManager.add(points);
  updateUI(msg);
}
function subtractScore() {
  const points = Number(document.getElementById("points").value);
  const msg = scoreManager.subtract(points);
  updateUI(msg);
}
function resetScore() {
  const msg = scoreManager.reset();
  updateUI(msg);
}
function clearHistory() {
  if (confirm("Are you sure you want to clear history?")) {
    const msg = scoreManager.clearHistory();
    updateUI(msg);
  }
}
updateUI();
