$(document).ready(function(){
    $('.tdn-register').blur(regexTDNRegister)
    $('.ht-register').blur(regexHTRegister)
    $('.sdt-register').blur(regexSDTRegister)
    $('.dc-register').blur(regexDCRegister)
    $('.mk-register').blur(regexMKRegister)
    $('.nlmk-register').blur(regexNLMKRegister)
    function regexTDNRegister(){
        const regex = /^[A-Za-z][A-Za-z\d_]+$/; 
        if($('.tdn-register').val().length == 0){
            $('#err-tdn-register').html('Tên đăng nhập không được để trống')
            return false;
        }
        else if(regex.test($('.tdn-register').val())){
            $('#err-tdn-register').html('')
            return true;
        }else{
            $('#err-tdn-register').html('Tên đăng nhập sai định dạng')
            return false;
        }
    }
    function regexHTRegister(){
        const regex = /^([A-Za-z]{1}[A-Za-z]*\s)*([A-Za-z]{1}[A-Za-z]*)$/; 
        if($('.ht-register').val().length == 0){
            $('#err-ht-register').html('Họ và tên không được để trống')
            return false;
        }
        else if(regex.test($('.ht-register').val())){
            $('#err-ht-register').html('')
            return true;
        }else{
            $('#err-ht-register').html('Họ và tên sai định dạng')
            return false;
        }
    }
    function regexSDTRegister(){
        const regex = /^\d{10}$/
        if($('.sdt-register').val().length !== 10){
            $('#err-sdt-register').html('Số điện thoại phải có 10 số')
            return false;
        }
        else if(regex.test($('.sdt-register').val())){
            $('#err-sdt-register').html('')
            return true;
        }else{
            $('#err-sdt-register').html('Số điện thoại sai định dạng')
            return false;
        }
    }
    function regexDCRegister(){
        const regex = /^([A-Za-z\d]*(\s|-))*([A-Za-z\d])*$/; 
        if($('.dc-register').val().length == 0){
            $('#err-dc-register').html('Địa chỉ không được để trống')
            return false;
        }
        else if(regex.test($('.dc-register').val())){
            $('#err-dc-register').html('')
            return true;
        }else{
            $('#err-dc-register').html('Địa chỉ sai định dạng')
            return false;
        }
    }
    function regexMKRegister(){
        const regex = /^[A-Za-z\d!@#$%^&*(_+)]+$/; 
        if($('.mk-register').val().length < 8){
            $('#err-mk-register').html('Mật khẩu không được nhỏ hơn 8 ký tự')
            return false;
        }
        else if(regex.test($('.mk-register').val())){
            $('#err-mk-register').html('')
            return true;
        }else{
            $('#err-mk-register').html('Mật khẩu sai định dạng')
            return false;
        }
    }
    function regexNLMKRegister(){
        if($('.nlmk-register').val() !== $('.mk-register').val()){
            $('#err-nlmk-register').html('Mật khẩu không khớp')
            return false;
        }else{
            $('#err-nlmk-register').html('')
            return true;
        }
    }
    $('.btn-register').click(function(){
        if(!regexTDNRegister() || !regexHTRegister() || !regexSDTRegister() || !regexDCRegister() || !regexMKRegister() || !regexNLMKRegister()){
            alert("Đăng ký thất bại")
            location.reload();
            return false;
        }
        window.location = "../../html/login/login.html"
    })
})