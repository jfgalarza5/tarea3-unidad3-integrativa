import "./components/layout/espe-layout.js";
import "./components/moleculars/product-card.js";
import "./components/atomic/alerts/espe-alerts.js";

window.addEventListener("load", async () => {
    // Solicita permiso de notificaciones
    await Notification.requestPermission();
    if ("serviceWorker" in navigator) {
        const res = await navigator.serviceWorker.register("./sw.js");
        if (res) {
            const ready = await navigator.serviceWorker.ready;
            // Notificación de instalación exitosa
            ready.showNotification("E-commerce Galarza, Los Mejores precios", {
                body: "La aplicacion se ha instalado correctamente",
                icon: "./img/icons/icon-144x144.png",
                vibrate: [100, 50, 200],
            });
        }
    }

    //Banner de conexión offline/online
    const offlineBanner = document.getElementById("offlineBanner");
    function updateOnlineStatus() {
        offlineBanner.style.display = navigator.onLine ? "none" : "block";
    }
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);
    updateOnlineStatus();
});

// Manejo básico de carrito
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("globalAlert")
    .show("Producto añadido al carrito", "success");
}

// Ejemplo: escucha evento de product-card
document.querySelectorAll("product-card").forEach(card => {
  card.addEventListener("add-to-cart", e => {
    addToCart(e.detail);
  });
});

