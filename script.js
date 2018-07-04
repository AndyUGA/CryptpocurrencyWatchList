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
        document.getElementById("coinChange").innerHTML = myArr.data.quotes.USD.percent_change_24h;
          
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
            document.getElementById("neoPrice").innerHTML = Number(myArr.data.quotes.USD.price).toFixed(2);
          
           
            }
        };
        xmlhttp2.open("GET", "https://api.coinmarketcap.com/v2/ticker/1376/", true);
        xmlhttp2.send();