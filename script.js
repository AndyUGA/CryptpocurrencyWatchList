        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
        var myArr = JSON.parse(this.responseText);
        var price = document.getElementById("bitcoinPrice").innerHTML = myArr[0].price_usd;
        document.getElementById("bitcoinTotalAmount").innerHTML = (price * 0).toFixed(2);   
        }
    };
        xmlhttp.open("GET", "https://api.coinmarketcap.com/v1/ticker/bitcoin/", true);
        xmlhttp.send();

        var xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
            var myArr = JSON.parse(this.responseText);
            var price = document.getElementById("neoPrice").innerHTML = myArr[0].price_usd; 
            var totalAmount = document.getElementById("neoTotalAmount").innerHTML = (price * 5).toFixed(2);
            num = parseInt(num) + parseInt(totalAmount);
           
            }
        };
        xmlhttp2.open("GET", "https://api.coinmarketcap.com/v1/ticker/neo/", true);
        xmlhttp2.send();