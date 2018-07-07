    /*eslint-env browser*/







    var app = angular.module('myApp', []);
    app.filter('addComma', function() {
        
       // A filter that adds comma to the correct location for large numbers
       return function(x) 
       {
           var tempString = [];
            var i;
            var j = 0; 
            var marketCap = String(x);
            for (i = marketCap.length; i > 0; i--) 
            { 
                if(i % 3 == 0 && i != marketCap.length) 
            {
                tempString += ',' + marketCap[j];
                j++;
            }
            else 
            { 
                tempString += marketCap[j];
                j++;
            }
        }
        return tempString;
       } 
       
       
    });
    app.controller('myCtrl', function($scope, $http) {
        
        /*
        * Request data for top 10 cryptocurrencies by total 
        * marketcap from CoinMarketCap API
        */
        $http.get("https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank&structure=array")
            .then(function(myArr) {
            $scope.myWelcome = myArr;
        });
        
        /*
        * Request data for global information about cryptocurrencies
        * from CoinMarketCap API
        */
        $http.get("https://api.coinmarketcap.com/v2/global/")
            .then(function(myArr) {
            $scope.global = myArr.data.data;
        });
        
        
        
    });
   
       
    









 function addComma(strMarketCap) {
        var tempString = [];
        var i;
        var j = 0; 
        for (i = strMarketCap.length; i > 0; i--) { 
            
            if(i % 3 == 0 && i != strMarketCap.length) {
                tempString += ',' + strMarketCap[j];
                j++;
            }
            else { 
                tempString += strMarketCap[j];
                j++;
 
            }
        }
        return tempString;
    } 