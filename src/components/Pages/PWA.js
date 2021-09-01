export default function PWA() {
    const sendNotification = function () {
        Notification.requestPermission((result) => {
            if (result === 'granted') {
                const notifTitle = "Blah ";
                const notifBody = `Created by Me.`;
                const notifImg = `logo512.png`;
                const options = {
                    body: notifBody,
                    icon: notifImg,
                };
                new Notification(notifTitle, options);
            }
        });
    }

    const clearBadgeCount = function () {
        if ("setAppBadge" in navigator && "clearAppBadge" in navigator) {
            navigator.setAppBadge(0)
        }
    }

    const setBadgeCount = function () {
        if ("setAppBadge" in navigator && "clearAppBadge" in navigator) {
            navigator.setAppBadge(10).catch((error) => {
            });
        }
    }

    return (
        <div>
            <button onClick={sendNotification}>Send Notification</button>
            <button onClick={setBadgeCount}>Set Badge Count</button>
            <button onClick={clearBadgeCount}>Clear Badge Count</button>
        </div>
    )
}