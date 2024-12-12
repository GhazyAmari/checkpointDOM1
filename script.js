let products = []
let isLiked = false
const totalPrice = 0
const plusBtn = document.getElementsByClassName('fa-plus-circle')
const minusBtn = document.getElementsByClassName('fa-minus-circle')
const totalEl = document.getElementsByClassName('total')[0];
const cards = document.getElementsByClassName('qty-container')
const items = document.querySelectorAll('.item')
const deleteBtns = document.querySelectorAll('.fa-trash-alt')
const hearts = document.querySelectorAll('.fa-heart')

const extractProductData = () =>{
    // clear products
    products = []
    item.forEach((item)=>{
        const qtyEl = item.querySelector('.quantity')  
        const unitPriceElm = item.querySelector('.unit-price')

        const untiPrice = +unitPriceElm.textContent.split(' ')[0]
        const qty = +qtyEl.textContent
        products.push({
            price: untiPrice,
            qty,
        })        
        
    })
}

const calculateTotal = (items) =>{
    let tot = 0
    for (let item of items){
        tot = item.price * item.qty + tot
    } return tot
} 

const displayTotal = () =>{
    extractProductData()
    const total = calculateTotal(products);
    totalEl.textContent = '$' + total.toFixed(2)
}

const removeProducts = () =>{
    for (let i = 0; i < deleteBtns.length; i++){
        deleteBtns[i].addEventListener('click', ()=>{
            items[i].remove();
        })
    }
}

const heartReact = () =>{
    
    for (let i = 0; i< hearts.length; i++) {
        hearts[i].addEventListener('click', ()=>{
            hearts[i].classList.toggle('liked');
        })
    }
}

heartReact()

removeProducts()

for (let i = 0; i< cards.length; i++){
    plusBtn[i].addEventListener('click', ()=>{
        const qtyEl = cards[i].querySelector('.quantity')
        let qty = parseInt(qtyEl.textContent) + 1;
        qtyEl.textContent = qty;
        displayTotal()
    })
}

for (let i = cards.length -1; i>=0; i--){
        minusBtn[i].addEventListener('click', ()=>{
        const qtyEle = cards[i].querySelector('.quantity')
        let qty = parseInt(qtyEle.textContent) - 1;
        if (qty < 0) return
        qtyEle.textContent = qty;
        displayTotal()
    })
}