
// BT1 
function tinhLuong(){
    var ngayLam = document.getElementById("soNgayLam").value;
    var tongLuong = ngayLam*100000;

    document.getElementById("txtTongLuong").innerHTML = tongLuong + " VND";
}
document.getElementById("tinhLuong").onclick = tinhLuong;


//BT2

function tinhGiaTriTB(){
    var sothuc1 = document.getElementById("soThuc1").value;
    var sothuc2 = document.getElementById("soThuc2").value;
    var sothuc3 = document.getElementById("soThuc3").value;
    var sothuc4 = document.getElementById("soThuc4").value;
    var sothuc5 = document.getElementById("soThuc5").value;

    var giaTriTB = (Number(sothuc1)+Number(sothuc2)+Number(sothuc3)+Number(sothuc4)+Number(sothuc5))/5;

    document.getElementById("txtgiatriTB").innerHTML = giaTriTB;
}
document.getElementById("tinhTB").onclick = tinhGiaTriTB;


//BT3
function quyDoiTien(){
    var soTien= document.getElementById("soTien").value;
    var soTienQuyDoi = soTien * 23500;

    document.getElementById("txtsoTienQuyDoi").innerHTML=soTienQuyDoi+ " VND";

}
document.getElementById("btnQuyDoi").onclick = quyDoiTien;

// BT4
function tinhHCN (){
    var chieuDai= document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;

    var dienTich = Number(chieuDai)*Number(chieuRong);
    var chuVi = (Number(chieuDai)+Number(chieuRong))*2;

    document.getElementById("txtDienTich").innerHTML = dienTich;
    document.getElementById("txtChuVi").innerHTML = chuVi;

}
document.getElementById("btnHcn").onclick= tinhHCN;

// BT5

function tinhTong2KySo (){
    var kySo = document.getElementById("kySo").value;
    var ten = kySo/10;
    var unit = kySo %10;

    var tong2KySo = Math.trunc(ten)+unit;
    
    document.getElementById("txtKySo").innerHTML= tong2KySo;

}
document.getElementById("btnKySo").onclick= tinhTong2KySo;

