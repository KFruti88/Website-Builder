🐺 Werewolf PWA & NotificationsDeveloper: Werewolf3788 | Site: werewolf.ourflora.comThis repository contains the core files for the Progressive Web App (PWA) and Web Push Notification system used across the Werewolf Projects portal. It is designed to be universal, responsive, and mobile-ready with a focus on PlayStation streaming tools.🛠️ ComponentsFilePurposemanifest.jsonDefines the "App" identity for Android/iOS (1:1 icons, red theme).sw.jsThe Service Worker that catches push notifications in the background.deploy.ymlGitHub Action that pushes these files to the WordPress root via FTP.🎨 Design StandardsResponsive: All UI elements must maintain a 90% width for universal screen compatibility.Mobile: Player cards and icons use a 1:1 aspect ratio.Effects: Prioritize 'glow' effects and dynamic color changes based on the active Twitch game.CSS: All custom styles must be nested under #wp-custom-wrapper to override Divi defaults.🚀 Deployment Instructions1. GitHub Secrets RequirementTo fix the Input required and not supplied error, ensure the following Actions Secrets are added to this repo:FTP_SERVER: (e.g., ftp.ourflora.com)FTP_USERNAME: Your FTP/cPanel username.FTP_PASSWORD: Your FTP password.2. WordPress IntegrationAdd the following registration script to the Divi Theme Options > Integration > Head:HTML<link rel="manifest" href="/manifest.json">
<script>
(function() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js');
        });
    }
})();
</script>
📱 Platform BehaviorAndroid: Users will be prompted to "Install" when visiting the site in Chrome.iOS: Users must select "Add to Home Screen" from the Share menu to enable system notifications.Note: "Waitin' on that yapper in my pocket to start fixin' to buzz." — DJ WerewolfNext StepWould you like me to generate the 1:1 glow-effect CSS for the "Subscribe" button so you can paste it into your Divi Custom CSS?
