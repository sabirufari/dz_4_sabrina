const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const euro = document.querySelector('#euro');
const japan = document.querySelector('#japan')

const handleConvert = (elements, target,target_1,target2) => {
    elements.addEventListener('input', () => {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.addEventListener("load", () => {     
            const response = JSON.parse(request.response);
            if (elements === som) {
                target.value = (elements.value / response.usd).toFixed(2);
                target_1.value = (elements.value / response.euro).toFixed(2);
                target2.value = ( elements.value / response.japan).toFixed(2)
            } else if (elements === usd) {
                target.value = (elements.value * response.usd).toFixed(2);
                target_1.value = (elements.value * response.usd / response.euro).toFixed(2);
                target2.value = ( elements.value * response.usd / response.euro/ response.japan).toFixed(2)
            }else if (elements === euro) {
                target.value = (elements.value * response.euro).toFixed(2);
                target_1.value = (elements.value * response.euro / response.usd).toFixed(2);
                target2.value = ( elements.value * response.euro * response. usd * response.japan).toFixed(2)
            }
            elements.value === "" && (target.value = ""); 
            elements.value === "" && (target_1.value = ""); 
            elements.value === "" && (target2.value = "");
        });
    });
};
handleConvert( usd,som,euro,japan );
handleConvert( som, usd, euro,japan);
handleConvert(euro,som,usd,japan);
handleConvert(japan,som,usd,euro);