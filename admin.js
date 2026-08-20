import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginPanel = document.getElementById("loginPanel");
const dashboardPanel = document.getElementById("dashboardPanel");
const adminEmail = document.getElementById("adminEmail");
const adminPassword = document.getElementById("adminPassword");
const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");
const logoutBtn = document.getElementById("logoutBtn");
const refreshBtn = document.getElementById("refreshBtn");
const exportCsvBtn = document.getElementById("exportCsvBtn");
const sessionText = document.getElementById("sessionText");
const metrics = document.getElementById("metrics");
const searchFilter = document.getElementById("searchFilter");
const groupFilter = document.getElementById("groupFilter");
const shirtFilter = document.getElementById("shirtFilter");
const resultCount = document.getElementById("resultCount");
const resultsBody = document.getElementById("resultsBody");

let allVotes = [];
let filteredVotes = [];

function setMessage(el, text, type="") {
  el.textContent = text;
  el.className = "message center" + (type ? " " + type : "");
}

function formatTimestamp(ts) {
  if (!ts) return "Pendiente";
  try {
    return ts.toDate().toLocaleString("es-CR", {
      dateStyle: "short",
      timeStyle: "medium"
    });
  } catch {
    return "";
  }
}

async function login() {
  const email = adminEmail.value.trim();
  const password = adminPassword.value;
  if (!email || !password) {
    setMessage(loginMessage, "Digite correo y contraseña.", "error");
    return;
  }
  loginBtn.disabled = true;
  setMessage(loginMessage, "Ingresando...");
  try {
    await signInWithEmailAndPassword(auth, email, password);
    setMessage(loginMessage, "");
  } catch (error) {
    console.error(error);
    setMessage(loginMessage, "No fue posible iniciar sesión. Verifique las credenciales.", "error");
  } finally {
    loginBtn.disabled = false;
  }
}

async function loadVotes() {
  resultsBody.innerHTML = '<tr><td colspan="5" class="empty">Cargando resultados...</td></tr>';
  try {
    const q = query(collection(db, "elecciones"), orderBy("fechaHora", "desc"));
    const snap = await getDocs(q);
    allVotes = snap.docs.map(d => ({ idDoc: d.id, ...d.data() }));
    populateGroups();
    applyFilters();
  } catch (error) {
    console.error(error);
    resultsBody.innerHTML = '<tr><td colspan="5" class="empty">No se pudieron leer los resultados. Revise las reglas de Firestore.</td></tr>';
  }
}

function populateGroups() {
  const current = groupFilter.value;
  const groups = [...new Set(allVotes.map(v => v.seccion).filter(Boolean))]
    .sort((a,b) => a.localeCompare(b, "es", { numeric:true }));
  groupFilter.innerHTML = '<option value="">Todas las secciones</option>' +
    groups.map(g => `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`).join("");
  if (groups.includes(current)) groupFilter.value = current;
}

function applyFilters() {
  const text = searchFilter.value.trim().toLowerCase();
  const group = groupFilter.value;
  const shirt = shirtFilter.value;

  filteredVotes = allVotes.filter(v => {
    const matchesText = !text ||
      String(v.identificacion || "").toLowerCase().includes(text) ||
      String(v.nombre || "").toLowerCase().includes(text);
    const matchesGroup = !group || v.seccion === group;
    const matchesShirt = !shirt || v.camiseta === shirt;
    return matchesText && matchesGroup && matchesShirt;
  });

  renderMetrics();
  renderTable();
}

function renderMetrics() {
  const total = allVotes.length;
  const counts = ["Camiseta A","Camiseta B","Camiseta C","Camiseta D"]
    .map(name => [name, allVotes.filter(v => v.camiseta === name).length]);

  metrics.innerHTML = `
    <div class="metric"><span>Total de votos</span><strong>${total}</strong></div>
    ${counts.slice(0,3).map(([name,n]) => `<div class="metric"><span>${name}</span><strong>${n}</strong></div>`).join("")}
    <div class="metric"><span>Camiseta D</span><strong>${counts[3][1]}</strong></div>
  `;
}

function renderTable() {
  resultCount.textContent = `${filteredVotes.length} registro(s) mostrado(s) de ${allVotes.length}.`;

  if (!filteredVotes.length) {
    resultsBody.innerHTML = '<tr><td colspan="5" class="empty">No hay resultados para los filtros seleccionados.</td></tr>';
    return;
  }

  resultsBody.innerHTML = filteredVotes.map(v => `
    <tr>
      <td>${escapeHtml(v.identificacion || "")}</td>
      <td>${escapeHtml(v.nombre || "")}</td>
      <td>${escapeHtml(v.seccion || "")}</td>
      <td>${escapeHtml(v.camiseta || "")}</td>
      <td>${escapeHtml(formatTimestamp(v.fechaHora))}</td>
    </tr>
  `).join("");
}

function exportCsv() {
  const rows = [
    ["Identificación","Nombre","Sección","Camiseta","Fecha y hora"],
    ...filteredVotes.map(v => [
      v.identificacion || "",
      v.nombre || "",
      v.seccion || "",
      v.camiseta || "",
      formatTimestamp(v.fechaHora)
    ])
  ];
  const csv = rows.map(row =>
    row.map(value => `"${String(value).replaceAll('"','""')}"`).join(",")
  ).join("\n");

  const blob = new Blob(["\ufeff" + csv], { type:"text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "resultados_camisetas.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

loginBtn.addEventListener("click", login);
adminPassword.addEventListener("keydown", e => { if (e.key === "Enter") login(); });
logoutBtn.addEventListener("click", () => signOut(auth));
refreshBtn.addEventListener("click", loadVotes);
exportCsvBtn.addEventListener("click", exportCsv);
searchFilter.addEventListener("input", applyFilters);
groupFilter.addEventListener("change", applyFilters);
shirtFilter.addEventListener("change", applyFilters);

onAuthStateChanged(auth, async user => {
  if (user) {
    loginPanel.classList.add("hidden");
    dashboardPanel.classList.remove("hidden");
    sessionText.textContent = user.email || "Administrador autenticado";
    await loadVotes();
  } else {
    dashboardPanel.classList.add("hidden");
    loginPanel.classList.remove("hidden");
    allVotes = [];
    filteredVotes = [];
  }
});
