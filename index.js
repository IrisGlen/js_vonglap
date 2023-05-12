

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