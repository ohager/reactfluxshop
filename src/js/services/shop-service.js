const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu orci ornare, aliquam risus a, condimentum purus. Vestibulum erat tellus, pulvinar ac libero in, maximus aliquet elit. Nulla facilisi. Mauris sagittis varius hendrerit. Quisque vitae lorem in turpis laoreet cursus. Donec pretium sed nisi vitae finibus. Nullam pretium est a dui pharetra viverra. Nulla et libero vitae sem dignissim maximus. Sed porttitor, felis sit amet ultricies hendrerit, quam eros mattis nulla, eget auctor urna urna sed massa. Nullam aliquam risus nisl, a imperdiet mauris sollicitudin quis. Curabitur id finibus felis, vel volutpat tellus. Nulla ultrices interdum velit, vitae rutrum risus aliquam at. Nam laoreet sapien sit amet sapien vehicula blandit."
const OrderSeed = Math.ceil((Math.random() * 100) + 1);
const AsyncTimeout = 0;

// mocking here!
var productsMockup = [
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

var ordersMockup = [];

function findProductById(id) {
	return _.find(productsMockup, {'id': id});
}

var ShopService = {
	loadProducts: function (filter) {
		return new Promise((resolve, reject)=> {

			var regexp = new RegExp(filter);
			var filtered = filter ? productsMockup.filter( (product) => {
				return 	regexp.test(product.description) || regexp.test(product.title)
			}) : productsMockup;

			setTimeout(() => {
				resolve(_.cloneDeep(filtered));
			}, AsyncTimeout);
		});
	},
	loadOrders: function () {
		return new Promise((resolve, reject)=> {
			setTimeout(() => {
				resolve(ordersMockup.slice());
			}, AsyncTimeout);
		});
	},
	createOrder: function (orderedProducts) {

		return new Promise((resolve, reject)=> {

			ordersMockup.push({
				id: ordersMockup.length + OrderSeed,
				date: new Date(),
				products: orderedProducts.map(_.clone)
			});

			for (let i = 0; i < orderedProducts.length; ++i) {
				let pi = findProductById(orderedProducts[i].id);
				productsMockup[pi].stock -= productsMockup[pi].cart;
				productsMockup[pi].cart = 0;
			}

			resolve();
		}, AsyncTimeout);
	}
};

module.exports = ShopService;