var mangNhanVien = [];

document.querySelector('#btnThemNV').onclick = function(){
    var nv = new NhanVien(); //object

    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.luongCB = document.querySelector('#luongCB').value;
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLam = document.querySelector('#gioLam').value;
    nv.tongLuong = function(){
        var luong = 0;
        if (this.chucVu === 'Sếp'){
            luong = this.luongCB*this.gioLam*3;
        } else if (this.chucVu === 'Trưởng phòng'){
            luong = this.luongCB*this.gioLam*2;
        } else if (this.chucVu === 'Nhân viên') {
            luong = this.luongCB*this.gioLam;
        } else {
            luong = null;
        }
        return luong;
    };
    nv.loaiNhanVien = function (){
        var xepLoai = '';

        if (this.gioLam < 160){
            xepLoai = 'nhân viên trung bình';
        } else if (this.gioLam >= 160 && this.gioLam < 176){
            xepLoai = 'nhân viên khá';
        } else if (this.gioLam >= 176 && this.gioLam < 192){
            xepLoai = 'nhân viên giỏi';
        } else if (this.gioLam >= 192){
            xepLoai = 'nhân viên xuất xắc';
        } else {
            xepLoai = null;
        }
        return xepLoai;
    };

    

    
    //VALIDATION

    var valid = true;

    valid = kiemTraRong(nv.taiKhoan,'#tbTKNV','Tài khoản') &
    kiemTraRong(nv.hoTen,'#tbTen','Họ và tên') &
    kiemTraRong(nv.email,'#tbEmail','Email') &
    kiemTraRong(nv.matKhau,'#tbMatKhau','Mật khẩu') &
    kiemTraRong(nv.ngayLam,'#tbNgay','Ngày làm')&
    kiemTraRong(nv.luongCB,'#tbLuongCB','Lương cơ bản')&
    kiemTraRong(nv.gioLam,'#tbGiolam','Số giờ làm');

    valid &= numCharLimit(6, nv.taiKhoan, '#tbTKNV', 'Tài khoản nhưn diên ');


    valid &= kiemTraTatCaKyTu(nv.hoTen, '#tbTen', 'Tên nhân viên');


    valid &= kiemTraEmail(nv.email, '#tbEmail', 'Email nhân viên');

    valid &= limitValue (nv.luongCB, 1e+6,20e+6, '#tbLuongCB', 'Lương cơ bản' ) & limitValue(nv.gioLam, 80, 200, '#tbGiolam', 'Số giờ làm ' );

    valid &= kiemTraNgay(nv.ngayLam, '#tbNgay', 'Ngày làm ');

    valid &= dropdownValidation (nv.chucVu, '#chucvu', '#tbChucVu');

    valid &= passwordValidation(nv.matKhau,'#tbMatKhau');
    if (!valid){
        return;
    }

    mangNhanVien.push(nv);

    //load mảng intư nài lên bảng cho người ta trầm trồ

    loadTableNhanVien(mangNhanVien);


}

//tạo function load intư nhân viên vào bảng


function loadTableNhanVien (arrayNaoDo){
    var html = '';

    for (var index = 0; index < arrayNaoDo.length; index++){
        var nv = arrayNaoDo[index];

        html += `
        <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong()}</td>
        <td>${nv.loaiNhanVien()}</td>
        <td><button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button></td>
        <td><button data-toggle="modal" data-target="#myModal" class="btn btn-primary" onclick="editNhanVien('${nv.taiKhoan}')">Chỉnh sửa</button></td>
        </tr>
        `;
    }
    document.querySelector('#tableDanhSach').innerHTML = html;
    return html;
}


document.querySelector('#btnCapNhat').onclick = function(){
    var nv = new NhanVien();

    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.luongCB = document.querySelector('#luongCB').value;
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLam = document.querySelector('#gioLam').value;

    //VALIDATION

    var valid = true;

    valid = kiemTraRong(nv.taiKhoan,'#tbTKNV','Tài khoản') &
    kiemTraRong(nv.hoTen,'#tbTen','Họ và tên') &
    kiemTraRong(nv.email,'#tbEmail','Email') &
    kiemTraRong(nv.matKhau,'#tbMatKhau','Mật khẩu') &
    kiemTraRong(nv.ngayLam,'#tbNgay','Ngày làm')&
    kiemTraRong(nv.luongCB,'#tbLuongCB','Lương cơ bản')&
    kiemTraRong(nv.gioLam,'#tbGiolam','Số giờ làm');

    valid &= numCharLimit(6, nv.taiKhoan, '#tbTKNV', 'Tài khoản nhưn diên ');


    valid &= kiemTraTatCaKyTu(nv.hoTen, '#tbTen', 'Tên nhân viên');


    valid &= kiemTraEmail(nv.email, '#tbEmail', 'Email nhân viên');

    valid &= limitValue (nv.luongCB, 1e+6,20e+6, '#tbLuongCB', 'Lương cơ bản' ) & limitValue(nv.gioLam, 80, 200, '#tbGiolam', 'Số giờ làm ' );

    valid &= kiemTraNgay(nv.ngayLam, '#tbNgay', 'Ngày làm ');

    valid &= dropdownValidation (nv.chucVu, '#chucvu', '#tbChucVu');

    valid &= passwordValidation(nv.matKhau,'#tbMatKhau');
    if (!valid){
        return;
    }

    var indexEdit = mangNhanVien.findIndex(nv => nv.taiKhoan === nv.taiKhoan);

    mangNhanVien[indexEdit].taiKhoan = nv.taiKhoan;
    mangNhanVien[indexEdit].hoTen = nv.hoTen;
    mangNhanVien[indexEdit].email = nv.email;
    mangNhanVien[indexEdit].matKhau = nv.matKhau;
    mangNhanVien[indexEdit].ngayLam = nv.ngayLam;
    mangNhanVien[indexEdit].luongCB = nv.luongCB;
    mangNhanVien[indexEdit].chucVu = nv.chucVu;
    mangNhanVien[indexEdit].gioLam = nv.gioLam;

    loadTableNhanVien(mangNhanVien);

    document.querySelector('#tknv').disabled = false;
    
    // luuLocalStorage();
}



//Gọi hàm lấy localstorage khi trang vừa load
// window.onload = function () {
//     //Browser vừa load lên làm gì thì sẽ code ở đây
//     layLocalStorage();
//     // renderTableNhanVien(mangNhanVien);
//     // alert('in ra dữ liệu cũ');
// }

document.querySelector('#btnThem').onclick = function () {
    document.querySelector('#tknv').disabled = false;
}


document.querySelector('#btnTimNV').onclick = function(){
    var searchingValue = document.querySelector('#searchName').value;
    var nvXSArr = [];
    var nvGioiArr = [];
    var nvKhaArr = [];
    var nvTBArr = [];
    for (var index = 0; index < mangNhanVien.length; index++){
        if (mangNhanVien[index].loaiNhanVien === 'nhân viên xuất sắc'){
            nvXSArr.push(mangNhanVien[index]);
        } else if (mangNhanVien[index].loaiNhanVien === 'nhân viên giỏi'){
            nvGioiArr.push(mangNhanVien[index]);
        } else if (mangNhanVien[index].loaiNhanVien === 'nhân viên khá'){
            nvKhaArr.push(mangNhanVien[index]);
        } else if (mangNhanVien[index].loaiNhanVien === 'nhân viên trung bình'){
            nvTBArr.push(mangNhanVien[index]);
        } 
    }

    if (searchingValue.includes('xuat sac')){
        loadTableNhanVien(nvXSArr);
    } else if (searchingValue.includes('gioi')){
        loadTableNhanVien(nvGioiArr);
    } else if (searchingValue.includes('kha')){
        loadTableNhanVien(nvKhaArr);
    } else if (searchingValue.includes('trung binh')){
        loadTableNhanVien(nvTBArr);
    } else {
        loadTableNhanVien(mangNhanVien);
    }
}
