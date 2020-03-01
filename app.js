//plus button event
const iphoneB = document.getElementById('plus-btn-1');
iphoneB.addEventListener('click', function () {
    products('p-value-1', 'phone-price', 1219);
});
const phoneCase = document.getElementById('plus-btn-2');
phoneCase.addEventListener('click', function () {
    products('p-value-2', 'case-price', 59);
});

function products(setProductQuantity, productPrice, p) {
    /**
     * setProductQuantity = product quantity from plus button
     * productPrice = phone/case price 
     * p = set price of mobile/case
     */
    const p1 = document.getElementById(setProductQuantity).value++;
    const price1 = document.getElementById(productPrice).innerText;
    const convert = parseFloat(price1);
    const total = convert + p;

    document.getElementById(productPrice).innerText = total;

    var result = document.getElementById('phone-price').innerText;
    var result2 = document.getElementById('case-price').innerText;

    var sum = parseFloat(result) + parseFloat(result2);
    document.getElementById('subtotal').innerText = sum;
    document.getElementById('total').innerText = sum;

}