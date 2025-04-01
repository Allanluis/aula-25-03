function calcular() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);
    var area = base * height / 2;
    document.getElementById("display").innerText = area;
}