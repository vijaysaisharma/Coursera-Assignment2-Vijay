(function() {

    angular.module ('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController )
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function(index){
            ShoppingListCheckOffService.buyItems(index);
        };
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBought = this;
        alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    };

    function ShoppingListCheckOffService(){
        service = this;
        var toBuyItems = [
            {
                itemName: "Cookies",
                itemQuantity: "10"
            },
            {
                itemName: "Milk",
                itemQuantity: "10"
            },
            {
                itemName: "Sweets",
                itemQuantity: "10"
            },
            {
                itemName: "Chips",
                itemQuantity: "10"
            }
        ];

        var alreadyBoughtItems = [];

        service.getToBuyItems = function(){
            return toBuyItems;
        }

        service.buyItems = function (index){
            alreadyBoughtItems.push(toBuyItems[index]);
            toBuyItems.splice(index, 1);            
        };

        service.getBoughtItems = function(){
            return alreadyBoughtItems;
        }
    }

})();