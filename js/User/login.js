$(document).ready(function(){
    $('.tdn-login').blur(regexTDNLogin)
    $('.mk-login').blur(regexMKLogin)
    function regexTDNLogin(){
        const regex = /^[A-Za-z][A-Za-z\d_]+$/; 
        if($('.tdn-login').val().length == 0){
            $('#err-tdn-login').html('Tên đăng nhập không được để trống')
            return false;
        }
        else if(regex.test($('.tdn-login').val())){
            $('#err-tdn-login').html('')
            return true;
        }else{
            $('#err-tdn-login').html('Tên đăng nhập sai định dạng')
            return false;
        }
    }
    function regexMKLogin(){
        const regex = /^[A-Za-z\d!@#$%^&*(_+)]+$/; 
        if($('.mk-login').val().length < 8){
            $('#err-mk-login').html('Mật khẩu không được nhỏ hơn 8 ký tự')
            return false;
        }
        else if(regex.test($('.mk-login').val())){
            $('#err-mk-login').html('')
            return true;
        }else{
            $('#err-mk-login').html('Mật khẩu sai định dạng')
            return false;
        }
    }
    $('.btn-login').click(function(){
        if(!regexTDNLogin() || !regexMKLogin()){
            alert('Đăng Nhập Thất Bại')
            location.reload();
            return false;
        }
        window.location = "../../html/index.html"
    })
})