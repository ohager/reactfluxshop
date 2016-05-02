var MockRepository = require('./MockRepository');

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci ornare, aliquam risus a, condimentum purus. Vestibulum erat tellus, pulvinar ac libero in, maximus aliquet elit. Nulla facilisi. Mauris sagittis varius hendrerit. Quisque vitae lorem in turpis laoreet cursus. Donec pretium sed nisi vitae finibus. Nullam pretium est a dui pharetra viverra. Nulla et libero vitae sem dignissim maximus. Sed porttitor, felis sit amet ultricies hendrerit, quam eros mattis nulla, eget auctor urna urna sed massa. Nullam aliquam risus nisl, a imperdiet mauris sollicitudin quis. Curabitur id finibus felis, vel volutpat tellus. Nulla ultrices interdum velit, vitae rutrum risus aliquam at. Nam laoreet sapien sit amet sapien vehicula blandit."
const OrderSeed = Math.ceil((Math.random() * 100) + 1);
const AsyncTimeout = 0;

var _initialProducts = [
	{
		id: 1,
		title: "Product 1",
		price: 12.99,
		stock: 10,
		cart: 0,
		img: 'http://lorempixel.com/200/200/technics?1',
		description: loremIpsum
	},
	{
		id: 2,
		title: "Test 2",
		price: 10.99,
		stock: 20,
		cart: 0,
		img: 'http://lorempixel.com/200/200/technics?2',
		description: loremIpsum
	},
	{
		id: 3,
		title: "Fantastic Test Shit",
		price: 124.99,
		stock: 7,
		cart: 0,
		img: 'http://lorempixel.com/200/200/technics?3',
		description: loremIpsum
	}
];

var productsRepository = _.assign(new MockRepository("product", _initialProducts), {});
var ordersRepository = _.assign(new MockRepository("order", []), {});


var ShopService = {
	loadProducts: function (filter) {
		return new Promise((resolve, reject)=> {
			var prods = productsRepository.getAll();
			var regexp = new RegExp(filter);
			var filtered = filter ? prods.filter((product) => {
				return regexp.test(product.description) || regexp.test(product.title)
			}) : prods;
			setTimeout(() => {
				resolve(_.cloneDeep(filtered));
			}, AsyncTimeout);
		});
	},
	loadCart : function(){
		return new Promise((resolve, reject)=> {
			setTimeout(() => {
				var productsInCart = productsRepository.getAll().filter((p) => {
					return p.cart > 0;
				});
				resolve(productsInCart);
			}, AsyncTimeout);
		});
	},
	addProductToCart: function (productId) {
		return new Promise((resolve, reject)=> {
			var product = productsRepository.get(productId);
			product.cart++;
			productsRepository.update(product);
			setTimeout(() => {
				var productsInCart = productsRepository.getAll().filter((p) => {
					return p.cart > 0;
				});
				resolve(productsInCart);
			}, AsyncTimeout);
		});
	},
	loadOrders: function () {
		return new Promise((resolve, reject)=> {

			setTimeout(() => {
				resolve(ordersRepository.getAll());
			}, AsyncTimeout);
		});
	},
	createOrder: function (orderedProducts) {

		return new Promise((resolve, reject)=> {

			var nextId = ordersRepository.count() + 1;
			
			ordersRepository.insert({
				id: nextId + OrderSeed,
				date: new Date(),
				products: _.cloneDeep(orderedProducts)
			});

			// update products
			var prods = productsRepository.getAll();
			for (let i = 0; i < prods.length; ++i) {
				prods[i].stock -= prods[i].cart;
				prods[i].cart = 0;
				productsRepository.update(prods[i]);
			}

			setTimeout(() => {
				resolve(ordersRepository.getAll());
			}, AsyncTimeout);
		}, AsyncTimeout);
	}
};

module.exports = ShopService;