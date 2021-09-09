function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;

}

function discountButton() {
    
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const coupons = [

        {
            name: "Batman",
            discount: 15,
        },
        
        {
            name: "Superman",
            discount: 30,
        },

        {
            name: "WonderWoman",
            discount: 25,
        },

    ]

    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    }

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        
        alert("El cupón no es válido");

    }
    else
    {

        const descuento = userCoupon.discount;
        
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

        const resultP = document.getElementById("ResultP");
        // alert("El precio con descuento es: $" + precioConDescuento)
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

    }    
}

