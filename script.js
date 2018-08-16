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
        return '$' + tempString;
       } 
       
       
    });

    
   


    app.controller('myCtrl', function($scope, $http, $timeout) {
        
        $scope.redditFilter = "20";
        $scope.names = ["10", "20", "50", "100"];
        
        
        
        /*
        * Request data for top 100 cryptocurrencies by total 
        * marketcap from CoinMarketCap API
        */
        $http.get("https://api.coinmarketcap.com/v2/ticker/?limit=" + $scope.redditFilter + "&sort=rank&structure=array")
            .then(function(myArr) {
            $scope.myWelcome = myArr;
        });
        
        $scope.onChange = function() {
            $http.get("https://api.coinmarketcap.com/v2/ticker/?limit=" + $scope.redditFilter + "&sort=rank&structure=array")
            .then(function(myArr) {
                console.log(myArr);
            $scope.myWelcome = myArr;
        });
        }
        
            
        
        
        
        
        /*
        * Request data for global information about cryptocurrene 
        */
        $http.get("https://api.coinmarketcap.com/v2/global/")
            .then(function(myArr) {
            $scope.global = myArr.data.data;
        });
        
        
        
    });
   
       