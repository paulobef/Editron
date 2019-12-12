
class SettingsModel {
    constructor() {
        this.settings = JSON.parse(localStorage.getItem('settings')) || [
            {
                darkMode: false,
                defaultSideBarPositionIsOpen: false,
                
            }
        ];

    }

    _commit = (settings) => {
        localStorage.setItem('settings', JSON.stringify(settings))
    };
}