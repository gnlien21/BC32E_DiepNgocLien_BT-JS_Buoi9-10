function kiemTraRong(value, selectorError, name){

    // .trim(): loại bỏ khoảng trống đầu và cuối của chuỗi
    if(value.trim() !== '' ){
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống! ';
    document.querySelector(selectorError).style.display = "block";
    return false;
}

/**
 * Hàm giới hạn kí số người dùng được nhập vào input
 * @param {} maxChars : số kí số tối đa đc nhập
 * @param {*} value 
 * @param {*} selectorError : id thẻ xuất thông báo
 * @param {*} name : tên thẻ
 * @returns 
 */
function numCharLimit(maxChars, value, selectorError, name){
    console.log(value);
    if ((value.search(/[0-9]/) > maxChars)){
        document.querySelector(selectorError).innerHTML = 'tài khoản chỉ được chứa '+ maxChars+ ' kí tự số';
        document.querySelector(selectorError).style.display = "block";
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}


function kiemTraTatCaKyTu (value, selectorError, name){
    var regexLetter = /^[A-Z a-z]+$/ ;
    if (regexLetter.test(value)){
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }

    document.querySelector(selectorError).innerHTML = name + ' tất cả phải là chữ cái. ';
    document.querySelector(selectorError).style.display = "block";
    return false;
}

function kiemTraEmail (value, selectorError, name){
    var regexLetter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexLetter.test(value)){
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' phải đúng định dạng abcxyz@domain.com ';
    document.querySelector(selectorError).style.display = "block";
    return false;
}


function kiemTraNgay (value, selectorError, name){
    var regexDate = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regexDate.test(value)){
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng';
    document.querySelector(selectorError).style.display = "block";
    return false;
}

function limitValue (value, min, max , selectorError, name){
    if (value < min || value > max){
        document.querySelector(selectorError).innerHTML = name + ' phải nằm trong khoảng cho phép từ '+ min +'-'+max;
        document.querySelector(selectorError).style.display = "block";
        return false;
    }

    document.querySelector(selectorError).innerHTML = '';
    return true;
}

function dropdownValidation (value, idDropdown, selectorError){
    var options = document.querySelector(idDropdown).options;

    if (value == options[0].value){
        document.querySelector(selectorError).innerHTML = 'Bạn phải chọn một option hợp lệ';
        document.querySelector(selectorError).style.display = "block";
        return false; 
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;

}
   
function passwordValidation (value, selectorError){
    var errors = [];

    if (value.length < 6 && value.length > 10){
        errors.push('Mật khẩu phải chứa từ 6 - 10 kí tự!');
    }

    if(value.search(/[0-9]/) < 0){
        errors.push('Mật khẩu phải chứa ít nhất 1 kí tự số!');
    }

    if(value.search(/[A-Z]/) < 0){
        errors.push('Mật khẩu phải chứa ít nhất 1 chữ in hoa!');
    }

    if(value.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0){
        errors.push('Mật khẩu phải chứa ít nhất 1 kí tự đặc biệt!');
    }

    if (errors.length > 0){
        document.querySelector(selectorError).innerHTML = errors.join("<br>");
        document.querySelector(selectorError).style.display = "block";
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;

}