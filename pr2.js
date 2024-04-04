let productsCart = {
    data : [],
    addProduct : function(name,quntity,price){
        this.data.push({name,quntity,price});
    },

    total:function() {
        let totalPrice = 0;
        for(let product of this.data){
            totalPrice += product.quntity * product.price;
        }
        return totalPrice;
    }
};
 
let names = ["Rice","Dal","Salt"];
let quntities = [2 , 3, 1];
let prices = [60, 50, 20];

for(let i = 0; i < names.length; i++){
    productsCart.addProduct(names[i], quntities[i], prices[i]);
}

console.log("Total :", productsCart.total());
