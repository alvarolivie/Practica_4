async function getRates () {
let url = "https://v6.exchangerate-api.com/v6/2d734ce2d1971062c4c3f91d/latest/"
let currency = document.getElementById("currency").value
url.append(currency)
let response = await fetch(url);

if (response.ok){
    let res = await response.json();
    document.getElementById("tablita").write(res.conversion_rates);
}