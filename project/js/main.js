class ProductList {
  #goods;
  #allProducts;
  //#allButtons;

  constructor(container = '.products') {
  //  console.log('constructor');
    this.container = container;
    // this._goods = [];
    this.#goods = [];
    this.#allProducts = [];

    this.#fetchGoods();
    this.#render();
    //this.#allButtons = [];
 
  }

 /* goodsTotalPrice() {
 //  let sum = 0;
    for (const key in this.#goods) {
      const elem = this.#goods[key];
      sum += +elem.price; 
      console.log(sum)
    }
    document.querySelector('.products').insertAdjacentHTML('beforeend', `Итого ${sum}<br>`);
  }*/
  /*    const result = this.#goods.reduce(function(sum, price) {
        return sum + price;
      }, 0);
     */
 //   let sum = this.#goods.reduce((sum, price) => {
 //   return sum + price;
 //   });
  //  })
  //    console.log(this.#goods.price)
   
 //   document.querySelector('.products').insertAdjacentHTML('beforeend', `Итого ${sum}<br>`);
    goodsTotalPrice() {     
      const result = this.#goods.reduce(function (sum, price) {
      return sum + price.price;
    }, 0);
  
    console.log(result)
    document.querySelector('.products').insertAdjacentHTML('beforeend', `Итого ${result}<br>`);
  }
  getTotalWithDiscount(discount) {
  return this.goodsTotalPrice() * discount;
  }
 
//нужно управление количеством выбранного товара:
 // Считаем стоимость и количество товаров в корзине
 //     calcBasket() {}

 // Добавление товара в корзину (привязываем на нажатие кнопки)
 //   addToBasket() {}

 // Удаление товара из корзины (привязываем на нажатие кнопки)
 //   deleteFromBasket() {}
    
 //Пересчет корзины
 //   recalculateOrderFromBasket() {}

  #fetchGoods() {
    this.#goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }


  #render() {
    const block = document.querySelector(this.container);

    this.#goods.forEach((product) => {
      const productObject = new ProductItem(product);
     // console.log(product.price);
      this.#allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    });
    
  /*    this.#allButtons = document.querySelectorAll('.buy-btn');
      this.#allButtons.forEach((button) => {  
        
        button.addEventListener('click', addToBasket)
      })*/
 
}
}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
  }
}

const productList = new ProductList();
//productList.goodsTotalPrice();
productList.getTotalWithDiscount(0.25);
// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = ({ title, price }, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${title}</h3>
//                   <p>${price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
