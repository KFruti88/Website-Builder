(function() {
    // Protective scope for WordPress/Divi
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            // Path must be relative to your WordPress root
            navigator.serviceWorker.register('/sw.js').then(function(registration) {
                console.log('DJ Werewolf PWA: ServiceWorker registered');
                
                // Check for notification permission
                if (Notification.permission === 'default') {
                    // Logic to trigger a "Subscribe" prompt can go here
                }
            }, function(err) {
                console.log('DJ Werewolf PWA: Registration failed: ', err);
            });
        });
    }
})();
