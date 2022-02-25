async function getRates() {
    const curr = ["USD","EUR","AUD","GBP","CAD"];
    let price = new Array(4);
    let url = "https://v6.exchangerate-api.com/v6/2d734ce2d1971062c4c3f91d/latest/";
    let currency = document.getElementById("currency").value;
    console.log(currency);
    url += currency;
    //console.log(url)
    let response = await fetch(url);

    if (response.ok){
    let res = await response.json();
    let rates = res.conversion_rates;
    for (let i = 0; i < price.length; i++) {
      if (curr[i]!=currency){
        price[i] = rates[curr[i]];
        var d1 = document.getElementById('one');
        d1.insertAdjacentHTML('beforeend', <div id="two">two</div>);
      }
    }
    console.log(price);
    }
    return 0;

}
