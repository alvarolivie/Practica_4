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
        tdata += '<tr><td><h3 class="fw-bolder text-white">'+curr[i]+'</h3></td><td><h3 class="text-white">'+rates[curr[i]]+'</h3></td></tr><br>'
      }
    }
    let start = '<tr><th><h2 class="fw-bolder text-white">Exchange Rates</h2></th></tr><br>';
    document.getElementById("table").innerHTML = start + tdata;
    }
    return 0;

}
