let dataSlides = [];
$(document).ready(function(){
    $.getJSON("../../js/data.json").done((data) =>{
        dataSlides = [...data.dataSlides];
        console.log(dataSlides)
        renderProduct();
        validate();
    })
    function renderProduct(){
        dataSlides.map((item) => {
            $(".list-products").append(
                `
                    <a href="./product/product-details/product-details.html?id=${item.id}" class="w-25">
                         <div class="products w-25">
                         <img src="${item.img}" alt="" width="200px">
                         <h1 class = "title-product">${item.title}</h1>
                         <p class = "price-product">${convertMoney(item.price)}</p>
                         </div>
                     </a>
                `
            )
        })
    }
    function validate(){
        $(".tdn-login").blur(regexTenDNLogin)
        $('.mk-login').blur(regexMKLogin)
        $('.tdn-register').blur(regexTenDNRegister)
        $('.ht-register').blur(rexHoTenRegister)
        $('.sdt-register').blur(regexSDTRegister)
        $('.mk-register').blur(regexMKRegister)
        $('.nlmk-register').blur(regexNLMKRegister)
        function regexTenDNLogin(){
            const regex = /^[A-Za-z\d]+$/;
            if($(".tdn-login").val().length == 0){
                $("#err-tdn-login").html('Tên đăng nhập không được để trống');
                return false
            }
            else if(regex.test($(".tdn-login").val())){
                $("#err-tdn-login").html('(*)');
                return true;
            }else{
                $("#err-tdn-login").html('Tên đăng nhập sai định dạng');
                return false;
            }
        }
        function regexMKLogin(){
            const regex = /^[A-Za-z\d!@#$%^&*()]+$/;
            if($(".mk-login").val().length < 8){
                $("#err-mk-login").html('Mật khẩu phải lớn hơn 8 ký tự');
                return false
            }
            else if(regex.test($(".mk-login").val())){
                $("#err-mk-login").html('(*)');
                return true;
            }else{
                $("#err-mk-login").html('Mật Khẩu sai định dạng');
                return false;
            }
        }
        function regexTenDNRegister(){
            const regex = /^[A-Za-z\d]+$/;
            if($(".tdn-register").val().length == 0){
                $("#err-tdn").html('Tên đăng nhập không được để trống');
                return false
            }
            else if(regex.test($(".tdn-register").val())){
                $("#err-tdn").html('(*)');
                return true;
            }else{
                $("#err-tdn").html('Tên đăng nhập sai định dạng');
                return false;
            }
        }
        function rexHoTenRegister(){
            const regex = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)*$/
            if($(".ht-register").val().length == 0){
                $("#errhoten").html('Họ tên không được để trống');
                return false
            }
            else if(regex.test($(".ht-register").val())){
                $("#errhoten").html('(*)');
                return true;
            }else{
                $("#errhoten").html('Họ tên nhập sai định dạng');
                return false;
            }
        }
        function regexSDTRegister(){
            const regex = /^\d{10}$/
            if($(".sdt-register").val().length == 0){
                $("#errsdt").html('Số điện thoại không được để trống');
                return false
            }
            else if(regex.test($(".sdt-register").val())){
                $("#errsdt").html('(*)');
                return true;
            }else{
                $("#errsdt").html('Số điện phải nhập 10 số');
                return false;
            }
        }
        function regexMKRegister(){
            const regex = /^[A-Za-z\d!@#$%^&*()]+$/;
            if($(".mk-register").val().length < 8){
                $("#err-mk").html('Mật khẩu phải lớn hơn 8 ký tự');
                return false
            }
            else if(regex.test($(".mk-register").val())){
                $("#err-mk").html('(*)');
                return true;
            }else{
                $("#err-mk").html('Mật Khẩu sai định dạng');
                return false;
            }
        }
        function regexNLMKRegister(){
            if($(".nlmk-register").val().length == 0){
                $("#errnlmk").html('Mật khẩu không được để trống');
                return false
            }
            else if($(".nlmk-register").val() !== $(".mk-register").val() ){
                $("#errnlmk").html('Mật khẩu không khớp');
                return false
            }else{
                $("#errnlmk").html('(*)');
                return true;
            }
        }
        $('.btn-login').click(function(){
            if(!regexTenDNLogin() || !regexMKLogin()){
                return false;
            }
            resetmodal();
            $('#login').modal('hide')
            alert('Đăng nhập thành công')
        })
        $('.btn-register').click(function(){
            if(!regexTenDNRegister() || !rexHoTenRegister() || !regexSDTRegister() || !regexMKRegister() || !regexNLMKRegister()){
                return false;
            }
            $('#register').modal('hide')
            alert('Đăng ký thành công')
        })
        function resetmodal(){
            $(".tdn-login").html('');
            $("#err-tdn-login").html('(*)');
            $(".mk-login").html('');
            $("#err-mk-login").html('(*)');
        }
    }
    function convertMoney(money) {
        return money.toLocaleString('vi', {style : 'currency', currency : 'vnd'});
    }
})
