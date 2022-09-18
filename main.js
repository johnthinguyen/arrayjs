//function
function getEle(id) {
    return document.getElementById(id);
}
function tinh(a, b) {
    for (var i = 1; i < b.length; i++) {
        if (a > b[i]) {
            a = b[i];
        }
    }
    return a
}




///////////////////////////////////////////////
var arr = [];
getEle('btnDemSo').onclick = function () {
    var nhapsoN = getEle('nhapsoN').value * 1;
    arr.push(nhapsoN);
    getEle('ketQua').innerHTML = arr;
}
//tong các số dương
getEle('btnTinhTongDuong').onclick = function () {
    var tong = 0;
    for (var i = 0; i < arr.length; i++) {
        tong += arr[i];
    }
    getEle('ketQua1').innerHTML = 'SUM: ' + tong;
}
//dem cac so duong trong mang
getEle('btnsoDuong').onclick = function () {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    getEle('ketQua2').innerHTML = 'số dương trong mảng là: ' + count;
}
//so nho nhat trong mang
getEle('btnsoNhoNhat').onclick = function () {
    var min = arr[0];
    var timSo = tinh(min, arr)
    getEle('ketQua3').innerHTML = 'Số Nhỏ Nhất Là : ' + timSo;
}
//so duong nho nhat trong mang
getEle('btnsoDuongNhoNhat').onclick = function () {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newArr.push(arr[i]);
        }
    }
    var min2 = newArr[0];
    var timSo2 = tinh(min2, newArr)
    getEle('ketQua4').innerHTML = 'số dương nhỏ nhất là: ' + timSo2;
}
//tim so chan cuoi cung
getEle('btnLastEven').onclick = function () {
    var lastEven = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            lastEven.push(arr[i])
        }
    }
    var j = lastEven.length - 1;
    var soChan = lastEven[j];
    getEle('ketQua5').innerHTML = 'số chẵn cuối cùng là: ' + soChan;
}
// doi cho 2 vi tri trong mang
getEle('btnDoiCho').onclick = function () {
    var viTri1 = getEle('viTri1').value * 1;
    var viTri2 = getEle('viTri2').value * 1;
    var bienTam = 0;
    bienTam = arr[viTri1];
    arr[viTri1] = arr[viTri2];
    arr[viTri2] = bienTam;
    getEle('ketQua6').innerHTML = 'mảng sau khi đổi sẽ là: ' + arr;
}
//sắp xếp mảng 
getEle('btnSapXep').onclick = function () {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    getEle('ketQua7').innerHTML = 'Mảng sau khi xắp xếp là: ' + arr;
}
//so nguyen to dau tien
getEle('btnSoNguyenTo').onclick = function () {
    for (var i = 0; i < arr.length; i++) {
        var coHieu = true
        for (var e = 2; e < Math.sqrt(arr[i]); e++) {
            if (arr[i] % e !== 0) {

            }
            console.log(arr[i]);
        }
    }
    //em ko biet lam mac du em da suy nghi 3 tieng dong ho :(  ,sory mentor
}
//
//so sanh so am va so duong
getEle('btnSoSanh').onclick = function () {
    var count = 0;
    var count1 = 0;
    var ketQua = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        } else if (arr[i] < 0) {
            count1++;
        }
    }
    if (count > count1) {
        ketQua = 'số dương lớn hơn số âm';
    } else if (count < count1) {
        ketQua = 'số dương bé hơn số âm';
    } else if (count == count1) {
        ketQua = 'số dương bằng số âm';
    }
    getEle('ketQua10').innerHTML = ketQua;
}
//sorry mentor có 2 cái ko biết làm và bây giờ đã không kịp giờ nữa , em sẽ làm sau ạ =))