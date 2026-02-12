const now = new Date();
document.getElementById("year").textContent = String(now.getFullYear());
document.getElementById("updated").textContent = now.toLocaleString("en-US", { hour12: false });
