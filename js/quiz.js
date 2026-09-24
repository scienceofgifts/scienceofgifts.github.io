document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent the form from submitting

  let answers = {
    q1: document.querySelector('input[name="q1"]:checked')?.value,
    q2: document.querySelector('input[name="q2"]:checked')?.value,
    q3: document.querySelector('input[name="q3"]:checked')?.value,
    q4: document.querySelector('input[name="q4"]:checked')?.value,
    q5: document.querySelector('input[name="q5"]:checked')?.value,
    q6: document.querySelector('input[name="q6"]:checked')?.value,
  };

  // Count the answers for each type
  let counts = {
    a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0
  };

  for (let key in answers) {
    if (answers[key]) {
      counts[answers[key]]++;
    }
  }

  // Determine dominant and secondary personality types
  let dominant = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  counts[dominant] = -1;  // Exclude dominant from secondary count
  let secondary = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  // Map dominant and secondary answers to Enneagram types
  let personalityTypes = {
    a: "Type 1 - The Reformer",
    b: "Type 2 - The Helper",
    c: "Type 3 - The Achiever",
    d: "Type 4 - The Individualist",
    e: "Type 5 - The Investigator",
    f: "Type 6 - The Loyalist",
    g: "Type 7 - The Enthusiast",
    h: "Type 8 - The Challenger",
    i: "Type 9 - The Peacemaker",
  };

  // Display result
  document.getElementById("personality-type").innerText = `Dominant Type: ${personalityTypes[dominant]}`;
  document.getElementById("secondary-trait").innerText = `Secondary Trait: ${personalityTypes[secondary]}`;
  document.getElementById("result").style.display = "block";
  document.getElementById("quiz-container").style.display = "none";
});
