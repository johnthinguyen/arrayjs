function getEle(id) {
    return document.getElementById(id);
}
getEle('btnDemSo').onclick = function () {
    var nhapsoN = getEle('nhapsoN').value * 1;
    var arr = [];
    for (var i = 0; i < arr.length; i++) {
        arr.push(nhapsoN);
    }
    console.log(arr)
}