
setTimeout(() =>{
    document.getElementById("load").style.visibility = "visible";
    window.print();
},1000)

// ถ้าปิด popup ให้ซ่อนหน้า
function afterprint(){
    document.getElementById("load").style.visibility = "hidden";
    window.location.reload();
}
window.onafterprint = afterprint;
        