const firstSecProduct = async () => {
    const result = await fetch('../data/first_section_product.json')
    const data = await result.json()
    displayFirstSecProduct(data)
}

// display product 
const displayFirstSecProduct = product => {
    const firstSecProductContainer = document.getElementById('first-sec-container-of-cart');
    for (const pro of product) {
        console.log(pro.img)
        const div = document.createElement('div');
        div.innerHTML = `<div class="w-[201px] h-[309px] shadow-sm rounded-md">


    <!-- card image container -->
    <div class="w-[201px] flex justify-center items-center relative pt-3">
        <div class="w-[180px] h-[120px] overflow-hidden rounded-md">
            <img class="first-sec-cart-img w-[180px] h-[120px]  cursor-pointer transition-all duration-300 delay-300 ease-in hover:scale-[1.10] hover:overflow-hidden" src="${pro.img}" alt="">
        </div>
    </div>

 <!-- content container -->
 <div class="px-[12px]">
    <h2 class="text-[16px] font-semibold py-2">${pro.cart_name}</h2>
    <p class="text-sm py-2 text-gray-500">${pro.cart_item}</p>
    <button class="cursor-pointer font-semibold">See All ></button>
 </div>


    </div>`
        firstSecProductContainer.appendChild(div)
    }
}

// call the function
firstSecProduct()


