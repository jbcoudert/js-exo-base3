var disp = document.getElementsByTagName("a")[0]
var hid = document.getElementsByTagName("a")[1]
var para = document.getElementById("texte")
// var ancres = document.getElementsByName("a")
// disp.addEventListener("click", function name(params) {
//     para.style.display= "block"
// })
// hid.addEventListener("click", function name(params) {
//     para.style.display = "none"
// })

hid.addEventListener("click", function name(params) {
    if (disp.style.display === "none") {
        para.style.display = "block"
    } else {
        para.style.display = "none"
    }
})

disp.addEventListener("click", function name(params) {
    if (disp.style.display === "none") {
        para.style.display = "block"
    } else {
        para.style.display = "block"
    }
})

// hid.addEventListener("click", function name(params) {
//     disp.addEventListener("click", function name(params) {
//     if (disp.style.display === "none") {
//         para.style.display = "block"
//     } else if (hid.style.display === "none") {                           ------------------------>>>>> NE MARCHE PAS
//         para.style.display = "none"
//     // } else {
//     //     para.style.display = "none"
//     // }
//     }
// })
// })