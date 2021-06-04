let dataProducts = []
let dataSlides = [];
let datafemale = [];
let data1 = [];
let data2 = [];
let data3 = [];
let data4 = [];
let data5 = [];
let data6 = [];
let data7 = [];
let data8 = [];
let data9 = [];
$(document).ready(function (){
    $.getJSON("../../../js/data.json", function (data) {
        dataProducts = [...data.dataProducts]
        dataSlides = [...data.dataSlides]
        // DisplayList(dataProducts, list_element, rows, current_page);
        // SetupPagination(dataProducts, pagination_element, rows);
        
        datafemale = dataProducts.filter(function(item) {
            return item.gender == "female";
        })
        data1 = datafemale.filter(function (item) {
            return item.classify == "adidas"
        })
        console.log(data1)
        data2 = datafemale.filter(function (item) {
            return item.classify == "converse"
        })
        data3 = datafemale.filter(function (item) {
            return item.classify == "mlb"
        })
        data4 = datafemale.filter(function (item) {
            return item.classify == "vans"
        })
        data5 = datafemale.filter(function (item) {
            return item.classify == "nike"
        })
        data6 = datafemale.filter(function (item) {
            return item.price < 1000000;
        })
        data7 = datafemale.filter(function (item) {
            return item.price > 1000000 && item.price < 3000000;
        })
        data8 = datafemale.filter(function (item) {
            return item.price > 3000000 && item.price < 5000000;
        })
        data9 = datafemale.filter(function (item) {
            return item.price > 5000000;
        })
        renderProdcut();
    })    

    function renderProdcut(){
        $("#check-adidas").click(function (){
            if(this.checked){
                console.log(dataProducts)
                DisplayList(data1, list_element, rows, current_page);
                SetupPagination(data1, pagination_element, rows);
            }else{
                DisplayList(datafemale, list_element, rows, current_page);
                SetupPagination(datafemale, pagination_element, rows);
            }
        })
        $("#check-Converse").click(function (){
            if(this.checked){
                console.log(dataProducts)
                DisplayList(data2, list_element, rows, current_page);
                SetupPagination(data2, pagination_element, rows);
            }else{
                DisplayList(datafemale, list_element, rows, current_page);
                SetupPagination(datafemale, pagination_element, rows);
            }
        })
        $("#check-mlb").click(function (){
            if(this.checked){
                console.log(datafemale)
                DisplayList(data3, list_element, rows, current_page);
                SetupPagination(data3, pagination_element, rows);
            }else{
                DisplayList(datafemale, list_element, rows, current_page);
                SetupPagination(datafemale, pagination_element, rows);
            }
        })
        $("#check-vans").click(function (){
            if(this.checked){
                console.log(dataProducts)
                DisplayList(data4, list_element, rows, current_page);
                SetupPagination(data4, pagination_element, rows);
            }else{
                DisplayList(datafemale, list_element, rows, current_page);
                SetupPagination(datafemale, pagination_element, rows);
            }
        })
        $("#check-nike").click(function (){
            if(this.checked){
                console.log(dataProducts)
                DisplayList(data5, list_element, rows, current_page);
                SetupPagination(data5, pagination_element, rows);
            }else{
                DisplayList(datafemale, list_element, rows, current_page);
                SetupPagination(datafemale, pagination_element, rows);
            }
        })
        $("#price1").click(function (){
            if(this.checked){
                console.log(dataProducts)
                DisplayList(data6, list_element, rows, current_page);
                SetupPagination(data6, pagination_element, rows);
            }else{
                DisplayList(datafemale, list_element, rows, current_page);
                SetupPagination(datafemale, pagination_element, rows);
            }
        })
        $("#price2").click(function (){
            if(this.checked){
                console.log(dataProducts)
                DisplayList(data7, list_element, rows, current_page);
                SetupPagination(data7, pagination_element, rows);
            }else{
                DisplayList(datafemale, list_element, rows, current_page);
                SetupPagination(datafemale, pagination_element, rows);
            }
        })
        $("#price3").click(function (){
            if(this.checked){
                console.log(dataProducts)
                DisplayList(data8, list_element, rows, current_page);
                SetupPagination(data8, pagination_element, rows);
            }else{
                DisplayList(datafemale, list_element, rows, current_page);
                SetupPagination(datafemale, pagination_element, rows);
            }
        })
        $("#price4").click(function (){
            if(this.checked){
                console.log(dataProducts)
                DisplayList(data9, list_element, rows, current_page);
                SetupPagination(data9, pagination_element, rows);
            }else{
                DisplayList(datafemale, list_element, rows, current_page);
                SetupPagination(datafemale, pagination_element, rows);
            }
        })

        DisplayList(datafemale, list_element, rows, current_page);
        SetupPagination(datafemale, pagination_element, rows);

    }
    
    const list_element = document.getElementById('list');
    const pagination_element = document.getElementById('pagination');
    let current_page = 1;
    let rows = 12;
    function DisplayList (items, wrapper, rows_per_page, page) {
        wrapper.innerHTML = "";
        page--;
    
        let start = rows_per_page * page;
        let end = start + rows_per_page;
        let paginatedItems = items.slice(start, end);
    
        for (let i = 0; i < paginatedItems.length; i++) {
            let item = paginatedItems[i];
            
            $(wrapper).append( `
            <a href="../../product/product-details/product-details.html?id=${item.id}">
                    <div class="products w-25">
                        <img src="${item.img.color1.img1}" alt="" class="img-product w-100 p-3">
                        <h1 class = "title-product pl-3">${item.title}</h1>
                        <p class = "price-product pl-3">${convertMoney(item.price)}</p>
                    </div>
                </a>
        `);
        }
    }
    
    function SetupPagination (items, wrapper, rows_per_page) {
        wrapper.innerHTML = "";
    
        let page_count = Math.ceil(items.length / rows_per_page);
        for (let i = 1; i < page_count + 1; i++) {
            let btn = PaginationButton(i, items);
            wrapper.appendChild(btn);
        }
    }
    
    function PaginationButton (page, items) {
        let button = document.createElement('button');
        button.innerText = page;
    
        if (current_page == page) button.classList.add('active');
    
        button.addEventListener('click', function () {
            current_page = page;
            DisplayList(items, list_element, rows, current_page);
    
            let current_btn = document.querySelector('.pagenumbers button.active');
            current_btn.classList.remove('active');
    
            button.classList.add('active');
        });
        return button;
    }
    function convertMoney(money) {
        return money.toLocaleString('vi', {style : 'currency', currency : 'vnd'});
    }
})

