let userNote = parseInt(prompt("Mettez une note"));

if (userNote >= 0 && userNote < 3) {
    window.alert("C'est Nul.");
}
else if (userNote >= 3 && userNote < 6) {
    window.alert("C'est Moyen.");
}
else if (userNote >= 6 && userNote < 8) {
    window.alert("C'est Assez Bien.");
}
else if (userNote >= 8 && userNote <= 9) {
    window.alert("C'est Bien.");
}
else if (userNote == 10) {
    window.alert("C'est Excellent.");
}
