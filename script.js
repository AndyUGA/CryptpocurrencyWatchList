    /*eslint-env browser*/



    var data = [];
    

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
        var myArr = JSON.parse(this.responseText);
        
        document.getElementById("coinPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            
        document.getElementById("coinName").innerHTML = myArr.data.name;
        
        document.getElementById("coinRank").innerHTML = myArr.data.rank;
        
        var twentyFourHourChange = myArr.data.quotes.USD.percent_change_24h; 
        if(twentyFourHourChange > 0) {
            document.getElementById("24Change").innerHTML = String(twentyFourHourChange) + '%';
            document.getElementById("24Change").style.color="#009e73";
        }
        else {
            document.getElementById("24Change").innerHTML = String(twentyFourHourChange) + '%';
            document.getElementById("24Change").style.color="red";
        }
            
        var oneHourChange = myArr.data.quotes.USD.percent_change_1h; 
        if(oneHourChange > 0) {
            document.getElementById("1Change").innerHTML = String(oneHourChange) + '%';
            document.getElementById("1Change").style.color="#009e73";
        }
        else {
            document.getElementById("1Change").innerHTML = String(oneHourChange) + '%';
            document.getElementById("1Change").style.color="red";
        }
       
        var marketCap = myArr.data.quotes.USD.market_cap;
        var stringMarketCap = addComma(String(marketCap));
        document.getElementById("coinMarketCap").innerHTML = stringMarketCap;
          
        }
    };
        xmlhttp.open("GET", "https://api.coinmarketcap.com/v2/ticker/1/", true);
        xmlhttp.send();



    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function() 
    {
    
        if (this.readyState == 4 && this.status == 200) 
        {
               
            var myArr = JSON.parse(this.responseText);
               
            for(var i = 0; i < 10; i++) 
                {
                    data[i] = {
                        name : myArr.data[i].name,
                        price : myArr.data[i].quotes.USD.price,
                        tfChange : myArr.data[i].quotes.USD.percent_change_24h,
                        marketCap : myArr.data[i].quotes.USD.market_cap,
                        rank: myArr.data[i].rank,
                        oneHourChange: myArr.data[i].quotes.USD.percent_change_1h,
                    }
                }
                
                

        }
        
        
    };


        
      
    xmlhttp2.open("GET", "https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank&structure=array", true);
    xmlhttp2.send();



    var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  $http.get("https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank&structure=array")
  .then(function(myArr) {
     $scope.myWelcome = myArr;
      var jsonData =  $scope.myWelcome;     
      /*
      for(var i = 0; i < 10; i++)
        {
            data[i] = {
                name : jsonData.data[i].name,
                price : jsonData.data[i].quotes.USD.price,
                tfChange : jsonData.data[i].quotes.USD.percent_change_24h,
                marketCap : jsonData.data[i].quotes.USD.market_cap,
                rank: jsonData.data[i].rank,
                oneHourChange: jsonData.data[i].quotes.USD.percent_change_1h,

            }
        }   
        */
      
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