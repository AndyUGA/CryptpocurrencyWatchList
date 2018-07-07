    /*eslint-env browser*/




    //var num = 0;
     var testArray = {};
     var carName = "car";
     var x = 0;
    console.log(testArray);


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


   /*
    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var myArr = JSON.parse(this.responseText);
            
            
     
        document.getElementById("coinPrice2").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            
        document.getElementById("coinName2").innerHTML = myArr.data.name;
        
        var twentyFourHourChange = myArr.data.quotes.USD.percent_change_24h; 
        if(twentyFourHourChange > 0) {
            document.getElementById("coinChange2").innerHTML = String(twentyFourHourChange) + '%';
            document.getElementById("coinChange2").style.color="#009e73";
        }
        else {
            document.getElementById("coinChange2").innerHTML = String(twentyFourHourChange) + '%';
            document.getElementById("coinChange2").style.color="red";
        }
            
        var marketCap = myArr.data.quotes.USD.market_cap;
        var stringMarketCap = addComma(String(marketCap));
        document.getElementById("coinMarketCap2").innerHTML = stringMarketCap;
  
        }
      
    };
    xmlhttp2.open("GET", "https://api.coinmarketcap.com/v2/ticker/1376/", true);
    xmlhttp2.send();

      */


    var app = angular.module("myApp", []);
    app.controller("myCtrl", function($scope) {

    var xmlhttp3 = new XMLHttpRequest();
    xmlhttp3.onreadystatechange = function() 
    {
        
        if (this.readyState == 4 && this.status == 200) 
        {

            var myArr = JSON.parse(this.responseText);
            //console.log(myArr.data);
            //console.log(myArr.data);
            
            /*
            for(var key in myArr) {
                // console.log(myArr[key][0].symbol);
                // console.log(myArr[key][0].quotes.USD.price);
            
            }
            */
            
            var keys = [];
             
            for(var key in myArr)
            {
                if(myArr.hasOwnProperty(key)) 
                    {
                        keys.push(key);
                    }
            }
        
            for(var i = 0; i < keys.length; i++) 
                {
                    console.log(myArr[keys[0]]);
                }
            
        }
        
        console.log(' 122 ' + window.carName);
    };
    xmlhttp3.open("GET", "https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank&structure=array", true);
    xmlhttp3.send();
        console.log('126');
        $scope.records = testArray
        
       
        
         
    }); 

       

  
    
    









 function addComma(strMarketCap) {
        var tempString = [];
        var i;
        var j = 0; 
        console.log("strMarketCap is " + strMarketCap.length);
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