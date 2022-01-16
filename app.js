var angularCart = angular.module("angularCart", ["ngRoute", "ngAnimate"]);

angularCart.config(function($routeProvider){
    $routeProvider
        .when("/products",{
            templateUrl: "partial/products.html",
            controller: "allProduct"
        }) 
        .when("/cart",{
            templateUrl: "partial/cart.html",
            controller: "cartProduct"
        }) 
        .otherwise({
            redirectTo: "/products"
        });
});

angularCart.controller("headerController",function($scope,$location){
    $scope.apptitle = {
        title : "My Cart"
    }
    $scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	}
}); 

angularCart.factory("cartService", function() {
	var cart = [];
	
	return {
		getCart: function() {
			return cart;
		},
		addToCart: function(product) {
			cart.push(product);
            alert(product.name + ' Is Added To The Cart');
		},
		buyNow: function(product) {
			alert("Thanks for buying: " + product.name);
		}
	}
});
angularCart.factory("productService", function() {
	var products = [
        {
            id: 1,
            img: 'black.jpg',
            name: 'Black Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925.',
            price: 10,
            color: 'Black',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 2,
            img: 'blue.jpg',
            name: 'Blue Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 11,
            color: 'Blue',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 3,
            img: 'red.jpg',
            name: 'Red Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 12,
            color: 'Red',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 4,
            img: 'purple.jpg',
            name: 'Purple Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 12,
            color: 'purple',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 5,
            img: 'green.jpg',
            name: 'Green Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 11,
            color: 'green',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 6,
            img: 'grey.jpg',
            name: 'Grey Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 11,
            color: 'grey',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 7,
            img: 'yello.jpg',
            name: 'Yellow Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 15,
            color: 'Yellow',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 8,
            img: 'navy.jpg',
            name: 'Navy Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 15,
            color: 'navy',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 9,
            img: 'orange.jpg',
            name: 'Orange Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 10,
            color: 'orange',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 10,
            img: 'white.jpg',
            name: 'White Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 10,
            color: 'white',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 11,
            img: 'marron.jpg',
            name: 'Marron Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 11,
            color: 'marron',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        },
        {
            id: 12,
            img: 'pink.jpg',
            name: 'Pink Heels',
            desc: 'Add tons of glamour to your look with leather pumps from SaintG.These chic pumps will make you shine and set the tone for any season.SaintG leather heels can be styled with fromal or casual dress for your next event.SAINTG, Since 1925',
            price: 12,
            color: 'pink',
            size: '4/5/6/7/8',
            status: 'In-Stock'
        }
    ];
	
	return {
		getproducts: function() {
			return products;
		},
		addToCart: function(product) {
			cart.push(product);
		}
	}
});


angularCart.controller("cartProduct", function($scope, cartService) {
	$scope.cart = cartService.getCart();
	
	$scope.buyNow = function(product) { 
		cartService.buyNow(product);
	}
});
 

angularCart.controller("allProduct", function($scope, productService, cartService) {
	$scope.products = productService.getproducts();
	
	$scope.addToCart = function(product) {
		cartService.addToCart(product);
	}
});


$scope.add_cart = function(product){ //set a function name add_cart
    if(product){ //check if the product is already declared within the function
        $scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price}); //pushes the chosen product into a new variable called carts when the add to cart button is clicked
        $scope.total = 0; //display the default value of total
    
    }	
}


