(function addChangeEventHandler() {
    var changeEventHandler = function(event) {
        alert(event.currentTarget.selectedOptions["0"].innerHTML);
    }

    document.getElementById("Select1").addEventListener("change", changeEventHandler);
})();