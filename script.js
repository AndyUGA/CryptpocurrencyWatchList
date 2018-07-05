/*eslint-env browser*/
     
    var num = 0;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
        var myArr = JSON.parse(this.responseText);
        document.getElementById("coinPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            
        document.getElementById("coinName").innerHTML = myArr.data.name;
        
        var percentChange = String(myArr.data.quotes.USD.percent_change_24h) + '%';
       
        document.getElementById("coinChange").innerHTML = percentChange;
            
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
        document.getElementById("coinPrice2").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            
        document.getElementById("coinName2").innerHTML = myArr.data.name;
        
        var percentChange = String(myArr.data.quotes.USD.percent_change_24h) + '%';
       
        document.getElementById("coinChange2").innerHTML = percentChange;
            
        var marketCap = myArr.data.quotes.USD.market_cap;
        var stringMarketCap = addComma(String(marketCap));
        document.getElementById("coinMarketCap2").innerHTML = stringMarketCap;
        }
    };
    xmlhttp2.open("GET", "https://api.coinmarketcap.com/v2/ticker/1376/", true);
    xmlhttp2.send();
        
        

    function addComma(strMarketCap) {
        var tempString = [];
        for (i = 0; i < strMarketCap.length; i++) { 
        
            
            if(i == 2 || i == 5 || i == 8) {
                console.log(i);
                tempString += strMarketCap[i] + ',';
            }
            else {
                //console.log(strMarketCap[i]);
                
                    tempString += strMarketCap[i];
                
                
            }
           
        
        }
        return tempString;
    } 