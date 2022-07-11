/**
 * Author: To Minh Y
 * Function: Tính ngày tháng năm
 * Release: 9/7/2022 
 */

/**
 * Khối 1: input
 * + ngayHienTai
 * + thangHienTai
 * + namHienTai
 * 
 * Khối 2:Các bước xử lý
 * B1: Tạo các biến ngay , thang , nam , cho người dùng nhập vào và gán giá trị
 * B2: lập công thức tính 
 * B3: ngayHomQua = --ngayTienTai;(ngày đầu tháng => ngày cuối tháng trước đó)
 * B4: ngayMai = ++ngayHienTai;(ngày đầu tháng sau)
 * B5: In kết quả ra màn hình
 * 
 * Khối 3: output
 * ngayHomqua
 * ngayMai
 */
function day() {
    var ngay = Number(document.getElementById("day").value);
    var thang = Number(document.getElementById("month").value);
    var nam = Number(document.getElementById("year").value);
    var ngayHomQua;
    switch (thang) {
        case 1:
            if (ngay > 31) {
                ngayHomQua = "Ngày không xác định";
            } else if (ngay == 1) {
                ngayHomQua = (ngay = 31) + "/" + (thang = 12) + "/" + (--nam);
            }else{
                ngayHomQua = (ngay - 1) + "/" + thang + "/" + nam;
            }
            break;
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (ngay > 31) {
                ngayHomQua = "Ngày không xác định";
            }else if (ngay == 1) {
                ngayHomQua = (ngay == 30) + "/" + (--thang) + "/" + nam;
            }else {
                ngayHomQua = (ngay - 1) + "/" + thang + "/" + nam;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (ngay > 30) {
                ngayHomQua = "Ngày không xác định";
            } else if (ngay == 1) {
                ngayHomQua = (ngay = 31) + "/" + (--thang) + "/" + nam;
            } else {
                ngayHomQua = (ngay - 1) + "/" + thang + "/" + nam;
            }
            break;
        case 2:
            if (ngay > 28) {
                ngayHomQua = "Ngày không xác định";
            }else if (ngay == 1) {
                ngayHomQua = (ngay = 31) + "/" + (--thang) + "/" + nam;
            }else{
                ngayHomQua = (ngay - 1) + "/" + thang + "/" + nam;
            }
            break;
        default:
            alert("Vui lòng nhập tháng từ 1 đến 12");
            break;
    }
    document.getElementById("ketQua").innerHTML = ngayHomQua;
}
document.getElementById("yesterday").onclick = day;



function day2() {
    var ngay = Number(document.getElementById("day").value);
    var thang = Number(document.getElementById("month").value);
    var nam = Number(document.getElementById("year").value);
    var ngayMai;
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (ngay == 31) {
                ngayMai = (ngay = 1) + "/" + (++thang) + "/" + nam;
            } else if (ngay > 31) {
                ngayMai = "Ngày không xác định";
            } else {
                ngayMai = (ngay + 1) + "/" + thang + "/" + nam;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if(ngay > 30){
                ngayMai = "Ngày không xác định";
            } else if (ngay == 30) {
                ngayMai = (ngay = 1) + "/" + (++thang) + "/" + nam;
            } else {
                ngayMai = (ngay + 1) + "/" + thang + "/" + nam;
            }
            break;
        case 2:
            if (ngay == 28) {
                ngayMai = (ngay = 1) + "/" + (++thang) + "/" + nam;
            } else if (ngay > 28) {
                ngayMai = "Ngày không xác định";
            } else {
                ngayMai = (ngay + 1) + "/" + thang + "/" + nam;
            }
            break;
        case 12:
            if (ngay == 31) {
                ngayMai = (ngay = 1) + "/" + (thang = 1) + "/" + (++nam);
            } else if (ngay > 31) {
                ngayMai = "Ngày không xác định";
            } else {
                ngayMai = (ngay + 1) + "/" + thang + "/" + nam;
            }
            break;
        default:
            alert("Vui lòng nhập tháng từ 1 đến 12");
            break;
    }
    document.getElementById("ketQua").innerHTML = ngayMai;
}
document.getElementById("tomorrow").onclick = day2;