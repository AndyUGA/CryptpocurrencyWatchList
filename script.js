/*eslint-env browser*/
     
    //var num = 0;
    //var testArray = [];



    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
        var myArr = JSON.parse(this.responseText);
        document.getElementById("coinPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
            
        document.getElementById("coinName").innerHTML = myArr.data.name;
        
        var percentValue = myArr.data.quotes.USD.percent_change_24h; 
        if(percentValue > 0) {
            document.getElementById("coinChange").innerHTML = String(percentValue) + '%';
            document.getElementById("coinChange").style.color="green";
        }
        else {
            document.getElementById("coinChange").innerHTML = String(percentValue) + '%';
            document.getElementById("coinChange").style.color="red";
        }
        //var percentChange = String(myArr.data.quotes.USD.percent_change_24h) + '%';
       
        
            
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
        
        var percentValue = myArr.data.quotes.USD.percent_change_24h; 
        if(percentValue > 0) {
            document.getElementById("coinChange2").innerHTML = String(percentValue) + '%';
            document.getElementById("coinChange2").style.color="green";
        }
        else {
            document.getElementById("coinChange2").innerHTML = String(percentValue) + '%';
            document.getElementById("coinChange2").style.color="red";
        }
            
        var marketCap = myArr.data.quotes.USD.market_cap;
        var stringMarketCap = addComma(String(marketCap));
        document.getElementById("coinMarketCap2").innerHTML = stringMarketCap;
        }
    };
    xmlhttp2.open("GET", "https://api.coinmarketcap.com/v2/ticker/1376/", true);
    xmlhttp2.send();



    var xmlhttp3 = new XMLHttpRequest();
    xmlhttp3.onreadystatechange = function() 
    {
        
    };
    xmlhttp3.open("GET", "https://api.coinmarketcap.com/v2/ticker/?limit=10&sort=rank&structure=array", true);
    xmlhttp3.send();
        
        

    function addComma(strMarketCap) {
        var tempString = [];
        var i;
        var j = 0; 
        console.log("strMarketCap is " + strMarketCap.length);
        for (i = strMarketCap.length; i > 0; i--) { 
            console.log('i is ' + i);
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