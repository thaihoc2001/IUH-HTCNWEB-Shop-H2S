$(document).ready(function(){
    $.getJSON("../../../js/data.json").done((data) =>{
        renderProduct();
        validate();
    })
    function renderProduct(){
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            const obj = JSON.parse(localStorage.getItem(key));
            console.log(key);
            console.log(obj);

            $(".list-cart").append(
                `
                    <tr class = "row-2">
                        <td class="d-flex tdSanPham">
                            <div><img src="${obj.img.color1.img1}" width ="150px" height = "150px"></div>
                            <div class = "ml-3">
                                <span class = "mt-5">${obj.title}<span> <br>
                                <select name="size" class="size mt-3"></select> <br>
                                <select name="color" class="color mt-3"></select>
                            </div>
                        </td>
                        <td><input type = "number" min = "1" class= "quantity" value ="1"></input></td>
                        <td class ="sum" data-value="${obj.price}">${obj.price}</td>
                        <td><button class="delete" id ="${key}" >Xóa</button></td>
                    </tr>
                `)
            $(".delete").click(function(){
                let getID = $(this).attr('id')
                localStorage.removeItem(getID);
                location.reload();
            })
            console.log(obj.size);
            $(".size").html(obj.size.map((i) =>{
                return `<option value="${i}">${i}</option>`
            }))
            $(".color").html(obj.color.map((i) =>{
                return `<option value="${i}">${i}</option>`
            }))
        }
        tinhTongTien(true);
        function tinhTongTien(isEventChange){
            var tongTien = 0;
            $(".sum").each(function(){
                    const price = $(this).text();
                    console.log(price)
                    tongTien = tongTien + parseInt(price);
                    if(!isEventChange){
                        $(this).attr("data-value");
                    }
                    console.log(tongTien)
                    $(".tongTien").html(convertMoney(tongTien))
            })
        }
        
        $(".quantity").change(function(){
            const quantity = $(this).val();
            const price = $(this).closest("tr").find(".sum").attr("data-value");
            const sum = quantity * price;
            $(this).closest("tr").find(".sum").html(sum);
            tinhTongTien(true);
          
        })

    }
    function validate(){
        $('.ht-buynow').blur(regexHTBuynow)
        $('.sdt-buynow').blur(regexSDTBuynow)
        $('.dc-buynow').blur(regexDCBuynow)
        function regexHTBuynow(){
            const regex = /^([A-Za-z]{1}[A-Za-z]*\s)*([A-Za-z]{1}[A-Za-z]*)$/; 
            if($('.ht-buynow').val().length == 0){
                $('#err-ht-buynow').html('Họ và tên không được để trống')
                return false;
            }
            else if(regex.test($('.ht-buynow').val())){
                $('#err-ht-buynow').html('')
                return true;
            }else{
                $('#err-ht-buynow').html('Họ và tên sai định dạng')
                return false;
            }
        }
        function regexSDTBuynow(){
            const regex = /^\d{10}$/
            if($('.sdt-buynow').val().length !== 10){
                $('#err-sdt-buynow').html('Số điện thoại phải có 10 số')
                return false;
            }
            else if(regex.test($('.sdt-buynow').val())){
                $('#err-sdt-buynow').html('')
                return true;
            }else{
                $('#err-sdt-buynow').html('Số điện thoại sai định dạng')
                return false;
            }
        }
        function regexDCBuynow(){
            const regex = /^([A-Za-z\d]*(\s|-))*([A-Za-z\d])*$/; 
            if($('.dc-buynow').val().length == 0){
                $('#err-dc-buynow').html('Địa chỉ không được để trống')
                return false;
            }
            else if(regex.test($('.dc-buynow').val())){
                $('#err-dc-buynow').html('')
                return true;
            }else{
                $('#err-dc-buynow').html('Địa chỉ sai định dạng')
                return false;
            }
        }

        $('.btnbuynow').click(function(){
            if(!regexHTBuynow() || !regexSDTBuynow() || !regexDCBuynow()){
                return false;
            } 
            alert("Mua hàng thành công")
            location.href = "../../../html/index.html"
        })
       
    }
    
    function convertMoney(money) {
        return money.toLocaleString('vi', {style : 'currency', currency : 'vnd'});
    }
})
