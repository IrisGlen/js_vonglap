// B1: Tim so nguyen duong nho nhat sao cho 1+2+3...+n>10000
// input : Nhập số n (kiểu dữ kiệu số)
// xử lý: chay while thoả đk 1+2+3...+n>10000
// output: xuất kq

function timSoNguyenDuongN() {
    //xử lý
    var ketQua = 0;
    var i = 1;
    while (ketQua < 10000) {   
        ketQua += i;
        i++; // tăng i lên nếu không sẽ bị lặp vô hạn
    }
// console.log(ketQua);
// console.log(i);
    //xuất ra màn hình
    document.querySelector(".soNguyenDuong").innerHTML = "Số nguyên dương nhỏ nhất thoả điều kiện là: " + i;
}


// B2: tính tong
// input : Nhập số x,n (kiểu dữ kiệu số)
// xử lý: viet ham luy thua, chay vong lap
// output: xuất kq
function hamLuyThua(x,soMu) {
    var ketQua = 1;
    for (var i = 1; i<=soMu; i++)
    {
        ketQua = ketQua * x;
    }
    return ketQua;
}
function tinhTong() {
    //lấy dữ liệu từ người dùng
    var soMu = document.getElementById("nhapSoN").value * 1;
    var soX= document.getElementById("nhapSoX").value * 1;
    //xử lý
    var ketQua = 0;
    // ketQua = hamLuyThua(soX,soMu);
    
    for (var i = 1; i <=soMu; i++)
    {
        ketQua += hamLuyThua(soX,i);
        // console.log(ketQua);
    }
    
    //xuất ra màn hình
    document.querySelector(".tinhTong").innerHTML = "Tổng luỹ thừa là: " + ketQua;
}


// B3: tính giai thừa
// input : Nhập số n (kiểu dữ kiệu số)
// xử lý: ket qua = chạy vòng for * kết quả vói nhau
// output: xuất kq

function tinhGiaiThua() {
    //lấy dữ liệu từ người dùng
    var soN = document.getElementById("soN").value * 1;

    //xử lý
    var ketQua = 1;
    for (var i =1; i <=soN; i++)
    {
        ketQua = ketQua * i;
    }

    //xuất ra màn hình
    document.querySelector(".giaiThua").innerHTML = "Giai thừa là: " + ketQua;
}

// B4: in 10 the div
// input : click button
// xử lý: ket qua the 10 the, the chan background do, the le in background xanh
// output: xuất kq

function in10TheDiv() {

    //xử lý
    var ketQua = 1;
    for (var i =1; i <=10; i++)
    {
        var node = document.createElement("div");
        var textnode = document.createTextNode("the div");
        node.appendChild(textnode);
        if (i % 2 ==0)
        {
            document.querySelector(".inTheDiv").appendChild(node).style.background ="green" ;
        } else {
            document.querySelector(".inTheDiv").appendChild(node).style.background ="red" ;
        } 
    }
}
// B5: in so nguyen to
// input : Nhập số n (kiểu dữ kiệu số)
// xử lý: ket qua =in so nguyen to
// output: xuất kq
function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (flag == true){
        return flag;
    }
}
function inSoNguyenTo() {
    //lấy dữ liệu từ người dùng
    var giaiTriNhap = document.getElementById("giaiTriNhap").value * 1;

    //xử lý
    var ketQua = "";
    for (var i =1; i <=giaiTriNhap; i++)
    {
        if (kiem_tra_snt(i) == true)
        {
            ketQua = ketQua + i + " ";
        }
    }

    //xuất ra màn hình
    document.querySelector(".inSoNguyenTO").innerHTML = "Các số nguyên tố là: " + ketQua;
}