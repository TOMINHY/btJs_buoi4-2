/**
 * Author: To Minh Y
 * Function: Tìm Sinh viên xa trường nhất 
 * Release: 11/7/2022
 */

/**
 * Khối 1: input
 * tenSV1
 * toaDoX1
 * toaDoY1
 * 
 * tenSV2
 * toaDoX2
 * toaDoY2
 * 
 * tenSV3
 * toaDoX3
 * toaDoY3
 * 
 * Khối 2: Các bước cần xử lý
 * B1: tạo các biến tên sinh viên và tọa độ x, y cho 3 sinh viên và tọa độ x,y của trường
 * B2: lấy giá trị và gán lại cho biến sau khi người dùng nhập vào
 * B3: Lập công thức tính toán 
 * Math.sqrc(d) = Math.pow((x2-x1), 2) +  Math.pow((y2-y1), 2);
 * B4: So sánh 3 doạn thằng d tìm được nếu đoạn thằng nào lớn nhất => sinh viên đó xa trường nhất
 * B5: in kết quả ra màn hình
 * 
 * Khối 3: Output
 * svXaNhat
 * 
 */

// x1y1 là tọa độ cố định 
// x2y2 là tọa độ của từng sinh viên
// tính d1 d2 d3
// so sánh d1 d2 d3 => d nào lớn nhất thì sinh viên đó xa trường nhất

function timSVXaNhat(){
    var toaDoXTH = Number(document.getElementById("toaDoXTH").value);
    var toaDoYTH = Number(document.getElementById("toaDoYTH").value);  
    var tenSV1  = document.getElementById("tenSV1").value;
    var toaDoX1 = Number(document.getElementById("toaDoX1").value);
    var toaDoY1 = Number(document.getElementById("toaDoY1").value);
    var tenSV2  = document.getElementById("tenSV2").value;
    var toaDoX2 = Number(document.getElementById("toaDoX2").value);
    var toaDoY2 = Number(document.getElementById("toaDoY2").value);
    var tenSV3  = document.getElementById("tenSV3").value;
    var toaDoX3 = Number(document.getElementById("toaDoX3").value);
    var toaDoY3 = Number(document.getElementById("toaDoY3").value);
    var d1 = tinhToaDo(toaDoXTH,toaDoYTH,toaDoX1,toaDoY1);
    var d2 = tinhToaDo (toaDoXTH,toaDoYTH,toaDoX2,toaDoY2);
    var d3 = tinhToaDo (toaDoXTH,toaDoYTH,toaDoX3,toaDoY3);
    var ketQua = "";
    
    if(d1 < d2)
    {
        if(d2 < d3)
            ketQua = "Sinh viên xa trường nhất: " + tenSV3; 
        else 
            if(d3 > d1)
            ketQua = "Sinh viên xa trường nhất: " + tenSV2; 
            else
            ketQua = "Sinh viên xa trường nhất: " + tenSV2; 
    }
    else
    {
        if(d1 < d3)
            ketQua = "Sinh viên xa trường nhất: " + tenSV3;
        else 
            if(d2 < d3)
            ketQua = "Sinh viên xa trường nhất: " + tenSV1;
            else
            ketQua = "Sinh viên xa trường nhất: " + tenSV1;
    }

    document.getElementById("ketQua4").innerHTML = ketQua;
}
document.getElementById("btnTim").onclick = timSVXaNhat;


function tinhToaDo(x1,y1,x2,y2) {
    var d = 0;
    d =  Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    console.log(d);
    return d;
}

