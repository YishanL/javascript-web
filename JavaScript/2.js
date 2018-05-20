(function cloneText() {
    document.getElementById("Button1").addEventListener("click",
        function() {
            var newElement = document.createElement("text");
            var t = document.createTextNode("Hello World");
            newElement.appendChild(t);
            document.body.appendChild(newElement);
            var linebreak = document.createElement("br");
            document.body.appendChild(linebreak);
        });
})();


//IIFE - Immediate Invoked Function Expression
