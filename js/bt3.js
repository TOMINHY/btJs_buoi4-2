/**
 * Author: To Minh Y
 * Function: Viết chương trình đọc số
 * Release: 10/7/2022
 */

/**
 * Khối 1: input
 * + soNhapVao
 * 
 * Khối 2: Các bước xử lý
 * B1: tạo biến cho người dùng nhập vào và gán giá trị
 * B2: tách soHangTram (n/100)
 * B3: tách soHangChuc (n/10)%10
 * B4: tach soDonVi (n%10)
 * 
 * 
 * Khối 3: ouptput
 * +docKetQua
 */

function readNumber(){
    var n = Number(document.getElementById("num3So").value);
    var soHangTram = Math.floor(n /100);
    var soHangChuc = Math.floor((n /10) % 10);
    var soDonVi = Math.floor(n%10);
    var docSo = "";
    // số hàng trăm
    if(n<100 || n > 999){
        alert("Vui lòng nhập số có 3 chữ số");
    }else{
        switch (soHangTram) {
            case 1:
                soHangTram= "Một trăm ";
                break;
            case 2:
                soHangTram = "Hai trăm ";
                break;
            case 3:
                soHangTram = "Ba trăm ";
                break;
            case 4:
                soHangTram = "Bốn trăm ";
                break;
            case 5:
                soHangTram = "Năm trăm ";
                break;
            case 6:
                soHangTram = "Sáu trăm ";
                break;
            case 7:
                soHangTram = "Bảy trăm ";
                break;
            case 8:
                soHangTram = "Tám trăm ";
                break;
            case 9:
                soHangTram = "Chín trăm ";
                break;
        }
    }
    // số hàng chục
    if(soHangChuc == 0 && soDonVi !== 0){
        soHangChuc = "lẻ ";
    }else{
    switch (soHangChuc) {
        case 1:
            soHangChuc = "mười ";
            break;
        case 2:
            soHangChuc = "hai mươi ";
            break;
        case 3:
            soHangChuc = "ba mươi ";
            break;
        case 4:
            soHangChuc = "bốn mươi ";
            break;
        case 5:
            soHangChuc = "năm mươi ";
            break;
        case 6:
            soHangChuc = "sáu mươi ";
            break;
        case 7:
            soHangChuc = "bảy mươi ";
            break;
        case 8:
            soHangChuc = "tám mươi ";
            break;
        case 9:
            soHangChuc = "chín mươi ";
            break;
    }
}
    switch (soDonVi) {
        case 1:
            soDonVi = "một ";
            break;
        case 2:
            soDonVi = "hai ";
            break;
        case 3:
            soDonVi = "ba ";
            break;
        case 4:
            soDonVi = "bốn ";
            break;
        case 5:
            soDonVi = "năm ";
            break;
        case 6:
            soDonVi = "sáu ";
            break;
        case 7:
            soDonVi = "bảy ";
            break;
        case 8:
            soDonVi = "tám ";
            break;
        case 9:
            soDonVi = "chín ";
            break;
    }
    if(soHangTram == 0){
        alert("số hàng trăm không xác định được");
        docSo = soHangChuc + soDonVi;
    }else if(soHangChuc == 0 && soDonVi == 0){
        alert("số hàng chục không xác định được");
        alert("số hàng đơn vị không xác định được");
        docSo = soHangTram;
    }else if(soHangTram!== 0 && soHangChuc !== 0 && soDonVi == 0){
        docSo = soHangTram + soHangChuc;
    }else{
        docSo = soHangTram + soHangChuc + soDonVi;
    }
    
    document.getElementById("ketQua3").innerHTML = docSo;
}
document.getElementById("btnDoc").onclick = readNumber;