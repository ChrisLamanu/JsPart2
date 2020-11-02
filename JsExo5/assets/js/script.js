let day = Math.floor(Math.random() * 7) + 1;
let dayStr = "";

switch (day) {
    case 1:
        dayStr = "Lundi";
        break;
    case 2:
        dayStr = "Mardi";
        break;
    case 3:
        dayStr = "Mercredi";
        break;
    case 4:
        dayStr = "Jeudi";
        break;
    case 5:
        dayStr = "Vendredi";
        break;
    case 6:
        dayStr = "Samedi";
        break;
    case 7:
        dayStr = "Dimanche";
        break;
}

window.alert("Random day numéro " + day + " " + dayStr);


// let day = prompt("Choisissez un nombre entre 1 et 7");
// let dayReturn;

// switch (parseInt(day)) {
//     default:
//         dayReturn = "Ce n'est pas un jour de la semaine";
//         break;
//     case 1:
//         dayReturn = "Lundi";
//         break;
//     case 2:
//         dayReturn = "Mardi";
//         break;
//     case 3:
//         dayReturn = "Mercredi";
//         break;
//     case 4:
//         dayReturn = "Jeudi";
//         break;
//     case 5:
//         dayReturn = "Vendredi";
//         break;
//     case 6:
//         dayReturn = "Samedi";
//         break;
//     case 7:
//         dayReturn = "Dimanche";
//         break;
// }

// window.alert(dayReturn);