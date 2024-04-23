
document.getElementById("generate").addEventListener("click", function() {
    var start = parseInt(document.getElementById("start").value);
    var end = parseInt(document.getElementById("end").value);
    var taCon = document.getElementById("tamulti");

    if (isNaN(start) || isNaN(end) || start < 2 || end > 10) {
        alert("Please enter numbers between 2 and 10! <3");
        return;
    }

    var tableHTML = "<table>";
    for (var r = 1; r <= 10; r++) {
        tableHTML += "<tr>";
        for (var i = start; i <= end; i++) {
            tableHTML += "<td>" + i + " x " + r + " = " + (r * i) + "</td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    taCon.innerHTML = tableHTML;
});
