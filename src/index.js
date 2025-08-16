import "./components/layout/espe-layout.js";
import "./components/moleculars/product-card.js"
import "./components/atomic/alerts/espe-alerts.js";

window.addEventListener('load', async () => {
    await Notification.requestPermission();
    if('serviceWorker' in navigator) {
        const res = await navigator.serviceWorker.register('./sw.js');
        if(res){
            const ready = await navigator.serviceWorker.ready;
            ready.showNotification("E-commerce Galarza, Los Mejores precios",{
                body: "La aplicacion se ha instalado correctamente",
                icon: "./img/icons/icon-144x144.png",
                vibrate: [100, 50, 200]
            });
        }
    }
});