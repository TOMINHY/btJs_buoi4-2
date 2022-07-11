/**
 * Author: To Minh Y
 * Function: Tính ngày trong 1 tháng
 * Release: 10/7/2022
 */

/**
 * Khối1: input
 * + thang
 * + nam
 * 
 * Khối 2: các bước xử lý
 * B1: tạo các biến ngày và năm cho người dùng nhập vào
 * B2: xét điều kiện 
 *      Nếu là tháng (1,3,5,7,8,10,12) => có 31 ngày;
 *      Ngược lại => (4,6,9,11) => có 30 ngày;
 *      tháng 2 xét riêng ( xét nếu là năm nhuận thì có 29 ngày ngược lại có 28 ngày)
 * B3: in kết quả lên ra màn hình
 * 
 * Khối 3: output
 * day
 */

function tinhNgay() {
    var month = Number(document.getElementById("month1").value);
    var year = Number(document.getElementById("year1").value);
    var day;
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
                day = 29;
            } else {
                day = 28;
            }
            console.log(year);
            break;
        default:
            alert("Vui lòng nhập tháng từ 1 đến 12");
            break;
    }
    document.getElementById("ketQua2").innerHTML = "Tháng " + month + " Năm " + year + " có " + day + " ngày";
}
document.getElementById("btnTinhNgay").onclick = tinhNgay;
