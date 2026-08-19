const studentMap = new Map(STUDENTS.map(s => [String(s.id), s]));
let currentStudent = null;

const studentId = document.getElementById("studentId");
const searchBtn = document.getElementById("searchBtn");
const studentPanel = document.getElementById("studentPanel");
const shirtSection = document.getElementById("shirtSection");
const studentName = document.getElementById("studentName");
const studentGroup = document.getElementById("studentGroup");
const lookupMessage = document.getElementById("lookupMessage");
const submitMessage = document.getElementById("submitMessage");
const submitBtn = document.getElementById("submitBtn");

function cleanId(value) {
  return String(value || "").replace(/\D/g, "");
}

function setMessage(el, text, type="") {
  el.textContent = text;
  el.className = "message" + (el.classList.contains("center") ? " center" : "") + (type ? " " + type : "");
}

function hasVoted(id) {
  const votes = JSON.parse(localStorage.getItem("camiseta_votes_v1") || "{}");
  return Boolean(votes[id]);
}

function findStudent() {
  const id = cleanId(studentId.value);
  studentId.value = id;
  currentStudent = null;
  studentPanel.classList.add("hidden");
  shirtSection.classList.add("hidden");
  document.querySelectorAll('input[name="shirt"]').forEach(r => r.checked = false);
  setMessage(submitMessage, "");

  if (!id) {
    setMessage(lookupMessage, "Digite su número de identificación.", "error");
    return;
  }

  const found = studentMap.get(id);
  if (!found) {
    setMessage(lookupMessage, "No se encontró esa identificación en la lista.", "error");
    return;
  }

  currentStudent = found;
  studentName.textContent = found.name;
  studentGroup.textContent = found.group;
  studentPanel.classList.remove("hidden");

  if (hasVoted(id)) {
    setMessage(lookupMessage, "Estudiante encontrado. Esta identificación ya registró una elección.", "error");
    shirtSection.classList.add("hidden");
    return;
  }

  setMessage(lookupMessage, "Estudiante encontrado correctamente.", "ok");
  shirtSection.classList.remove("hidden");
  shirtSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function saveVote() {
  if (!currentStudent) return;

  const selected = document.querySelector('input[name="shirt"]:checked');
  if (!selected) {
    setMessage(submitMessage, "Seleccione una camiseta antes de enviar.", "error");
    return;
  }

  const votes = JSON.parse(localStorage.getItem("camiseta_votes_v1") || "{}");
  const id = currentStudent.id;

  if (votes[id]) {
    setMessage(submitMessage, "Esta identificación ya registró una elección.", "error");
    return;
  }

  votes[id] = {
    id: currentStudent.id,
    name: currentStudent.name,
    group: currentStudent.group,
    shirt: selected.value,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem("camiseta_votes_v1", JSON.stringify(votes));

  submitBtn.disabled = true;
  setMessage(submitMessage, "✓ Elección registrada correctamente. ¡Gracias por participar!", "ok");
  setTimeout(() => {
    studentId.value = "";
    currentStudent = null;
    studentPanel.classList.add("hidden");
    shirtSection.classList.add("hidden");
    submitBtn.disabled = false;
    setMessage(lookupMessage, "");
    setMessage(submitMessage, "");
    document.querySelectorAll('input[name="shirt"]').forEach(r => r.checked = false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1800);
}

searchBtn.addEventListener("click", findStudent);
studentId.addEventListener("keydown", e => {
  if (e.key === "Enter") findStudent();
});
studentId.addEventListener("input", () => {
  studentId.value = cleanId(studentId.value);
});
submitBtn.addEventListener("click", saveVote);
