import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

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
  const center = el === submitMessage ? " center" : "";
  el.className = "message" + center + (type ? " " + type : "");
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
  shirtSection.classList.remove("hidden");
  setMessage(lookupMessage, "Estudiante encontrado correctamente.", "ok");
  shirtSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function saveVote() {
  if (!currentStudent) return;

  const selected = document.querySelector('input[name="shirt"]:checked');
  if (!selected) {
    setMessage(submitMessage, "Seleccione una camiseta antes de enviar.", "error");
    return;
  }

  submitBtn.disabled = true;
  setMessage(submitMessage, "Guardando elección...");

  try {
    // La identificación se usa como ID del documento.
    // Con las reglas incluidas, Firestore permite crear el documento solo una vez.
    const voteRef = doc(db, "elecciones", currentStudent.id);

    await setDoc(voteRef, {
      identificacion: currentStudent.id,
      nombre: currentStudent.name,
      seccion: currentStudent.group,
      camiseta: selected.value,
      fechaHora: serverTimestamp()
    });

    setMessage(
      submitMessage,
      "✓ Elección registrada correctamente en la base de datos. ¡Gracias por participar!",
      "ok"
    );

    setTimeout(() => {
      studentId.value = "";
      currentStudent = null;
      studentPanel.classList.add("hidden");
      shirtSection.classList.add("hidden");
      document.querySelectorAll('input[name="shirt"]').forEach(r => r.checked = false);
      setMessage(lookupMessage, "");
      setMessage(submitMessage, "");
      submitBtn.disabled = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1800);

  } catch (error) {
    console.error("Error al registrar elección:", error);

    if (error.code === "permission-denied") {
      setMessage(
        submitMessage,
        "Esta identificación ya registró una elección o la base de datos aún no tiene publicadas las reglas correctas.",
        "error"
      );
    } else {
      setMessage(
        submitMessage,
        "No fue posible guardar la elección. Revise la conexión e inténtelo nuevamente.",
        "error"
      );
    }
    submitBtn.disabled = false;
  }
}

searchBtn.addEventListener("click", findStudent);
studentId.addEventListener("keydown", e => {
  if (e.key === "Enter") findStudent();
});
studentId.addEventListener("input", () => {
  studentId.value = cleanId(studentId.value);
});
submitBtn.addEventListener("click", saveVote);


const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.getElementById("closeModal");



document.querySelectorAll(".preview-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    modalImage.src = btn.dataset.image;
    modalImage.alt = btn.dataset.caption || "Vista ampliada de la camiseta";
    modalCaption.textContent = btn.dataset.caption || "";
    imageModal.classList.remove("hidden");
    imageModal.setAttribute("aria-hidden", "false");
  });
});

function hideImageModal() {
  imageModal.classList.add("hidden");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}
closeModal.addEventListener("click", hideImageModal);
imageModal.addEventListener("click", e => {
  if (e.target === imageModal) hideImageModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !imageModal.classList.contains("hidden")) hideImageModal();
});
