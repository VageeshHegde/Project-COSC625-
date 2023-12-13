function toggleSettingsMenu() {
    var settingsMenu = document.getElementById("settingsMenu");
    settingsMenu.style.display = (settingsMenu.style.display === "block") ? "none" : "block";
}

function saveSettings() {
    // Add logic to save settings here
    alert("Settings saved!");
    toggleSettingsMenu(); // Close the settings menu after saving (you can customize this behavior)
}
