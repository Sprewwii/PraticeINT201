export let backgroundColor = {
    selectedBg: 'bg-white',

    load: function() {
        const loadColor = localStorage.getItem('Background');
        if(loadColor !== undefined || loadColor !== null) {
            backgroundColor.selectedBg = loadColor;
        }
    },

    save: function() {
        localStorage.setItem('Background', backgroundColor.selectedBg);
    },

    set: function(activeColor) {
        backgroundColor.selectedBg = 'bg-' + activeColor;
    }

}