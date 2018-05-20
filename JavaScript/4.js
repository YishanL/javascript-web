(function addChangeHandler() {
    var clickEvent = function() {
        var dropDown = document.getElementById("Select1");
        var option = document.createElement("option");
        option.text = document.getElementById("Text1").value;
        dropDown.add(option);
    }
    document.getElementById("Button1").addEventListener("click", clickEvent);
})();