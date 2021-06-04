
$(document).ready(function(){
    $.getJSON("../../../js/data.json").done((data) => {
        renderProducts();
        renderSlide();
    })

    let url_string = window.location.href; // www.test.com?id=123
    let url = new URL(url_string); 
    let paramValue = url.searchParams.get("id");

    function renderSlide(){
        let data = dataSlides;
        data.map((item) => {
            $(".product-details").append(
                `
                    <a href="../../product/product-details/product-details.html?id=${item.id}" class="w-25">
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
    function renderProducts(){
        let item = dataProducts.filter(x => x.id == paramValue)[0]
        console.log(item)
        $(".article1").append(
            `
            <div class ="d-flex">
                <div class="main-img">
                    <img src="${item.img.color1.img1}" id ="img-active">
                </div>
                <div class= "img-product">
                    <ul class = "list-img-product">
                        <li><img src="${item.img.color1.img1}" alt=""  id = "one"></li>
                        <li><img src="${item.img.color1.img2}"  id = "two"></li>
                        <li><img src="${item.img.color1.img3}" alt=""  id = "three"></li>
                        <li><img src="${item.img.color1.img4}" alt=""  id = "four"></li>
                        <li><img src="${item.img.color2.img1}" alt=""  id = "five"></li>
                    </ul>
                </div>
            </div>
            `
        )
        $(".article2").append(
            `
                <h1>${item.title}</h1>
                <p class = "price-product-details">${convertMoney(item.price)}</p>
                <p>${item.decribe}</p>
                <div class = "color d-flex"></div>
                <div class = "size"></div>
                <a href = "../../product/product-cart/product-cart.html"><button class = "add-cart">Thêm Vào Giỏ Hàng</button>
                <button class = "buy-now">Mua Ngay</button>
            `
        )
        $('.color').html(item.color.map((i) => {return `<div class = "${i} color-item"></div>`}))
        $('.size').html(item.size.map((j) => {return `<button class="btn-size">${j}</button>`}))
        $('#one').click(function(){
            let imgPath = $(this).attr('src')
            $('#img-active').attr('src', imgPath)
        })
        $('#two').click(function(){
            let imgPath = $(this).attr('src')
            $('#img-active').attr('src', imgPath)
        })
        $('#three').click(function(){
            let imgPath = $(this).attr('src')
            $('#img-active').attr('src', imgPath)
        })
        $('#four').click(function(){
            let imgPath = $(this).attr('src')
            $('#img-active').attr('src', imgPath)
        })
        $('#five').click(function(){
            let imgPath = $(this).attr('src')
            $('#img-active').attr('src', imgPath)
        })
        $(".add-cart").click(function(){
            const setjson=JSON.stringify(item);
            localStorage.setItem(item.id, setjson);
        })
    }
    function convertMoney(money) {
        return money.toLocaleString('vi', {style : 'currency', currency : 'vnd'});
    }
})
