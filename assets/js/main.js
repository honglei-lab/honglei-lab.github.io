const now = new Date();
document.getElementById("year").textContent = String(now.getFullYear());
document.getElementById("updated").textContent = now.toLocaleString("zh-CN", { hour12: false });
