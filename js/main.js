(() => {
  const countdown = document.getElementById("countdown");
  if (countdown) {
    const target = new Date(countdown.dataset.date).getTime();
    const update = () => {
      const remaining = Math.max(0, target - Date.now());
      const values = {
        days: Math.floor(remaining / 86400000),
        hours: Math.floor((remaining % 86400000) / 3600000),
        minutes: Math.floor((remaining % 3600000) / 60000),
        seconds: Math.floor((remaining % 60000) / 1000)
      };
      Object.entries(values).forEach(([id, value]) => {
        const node = document.getElementById(id);
        if (node) node.textContent = String(value).padStart(2, "0");
      });
    };
    update();
    window.setInterval(update, 1000);
  }

  const form = document.getElementById("gk-registration");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const status = document.getElementById("form-status");
      if (status) status.textContent = "La ficha está lista visualmente, pero el envío aún no está conectado. No cierres esta página ni envíes datos reales hasta activar el servicio de registro.";
    });
  }
})();