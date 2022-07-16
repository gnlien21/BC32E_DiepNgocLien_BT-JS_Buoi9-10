function xoaNhanVien(tkNVClick){
    var indexDel = mangNhanVien.findIndex(nv => nv.taiKhoan === tkNVClick);
    if (indexDel !== -1){
        mangNhanVien.splice(indexDel, 1);
    }

    loadTableNhanVien(mangNhanVien);
}


// function luuLocalStorage() {
//     //Biến đổi mảng thành => string
//     var sMangNhanVien = JSON.stringify(mangNhanVien);
//     //Sau đó dùng string lưu vào localstorage
//     localStorage.setItem('mangNhanVien', sMangNhanVien);
// }


// function layLocalStorage() {
//     //check xem storage có dữ liệu đó hay không
//     if (localStorage.getItem('mangNhanVien')) {
//         //Lấy ra
//         var sMangNhanVien = localStorage.getItem('mangNhanVien');
//         //Lấy mangNhanVien gán = chuỗi được lấy từ localstorage ra (phải dùng hàm JSON.parse để chuyển về mảng lại)
//         mangNhanVien = JSON.parse(sMangNhanVien);
//         //tạo ra table nhân viên từ mảng
//         loadTableNhanVien(mangNhanVien);
//     }
// }


function editNhanVien (tkNVClick){
var indexEdit = mangNhanVien.findIndex(nv => nv.taiKhoan === tkNVClick);
var nvEdit = mangNhanVien[indexEdit];

document.querySelector('#tknv').disabled = true;

document.querySelector('#tknv').value = nvEdit.taiKhoan;
document.querySelector('#name').value = nvEdit.hoTen;
document.querySelector('#email').value = nvEdit.email;
document.querySelector('#password').value = nvEdit.matKhau;
document.querySelector('#datepicker').value = nvEdit.ngayLam;
document.querySelector('#luongCB').value = nvEdit.luongCB;
document.querySelector('#chucvu').value = nvEdit.chucVu;
document.querySelector('#gioLam').value = nvEdit.gioLam;
}