async function getRates() {
    const curr = ["USD","EUR","AUD","GBP","CAD"];
    let url = "https://v6.exchangerate-api.com/v6/2d734ce2d1971062c4c3f91d/latest/";
    let currency = document.getElementById("currency").value;
    console.log(currency);
    url += currency;
    //console.log(url)
    let response = await fetch(url);
    let tdata = "";

    if (response.ok){
    let res = await response.json();
    let rates = res.conversion_rates;
    for (let i = 0; i < curr.length; i++) {
      if (curr[i]!=currency){
        tdata += '<tr><td>'+curr[i]+'</td><td>'+rates[curr[i]]+'</td></tr><br>'
      }
    }
    let start = '<tr><th>Exchange Rates</th></tr><br>';
    document.getElementById("table").innerHTML = start + tdata;
    }
    return 0;

}
