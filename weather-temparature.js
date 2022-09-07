
const citynameShow = document.getElementById("City-name-show");
const tempnameShow = document.getElementById("temparature-name-show");
const cloudnameShow = document.getElementById("cloud-name-show");
const API_key = `6dff3c9091f9acdec16ccd1ae1581bc8`;


const loadTemparature = city => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
        fetch(url)
                .then(res => res.json())
                .then(data => displyTemparature(data));
}

const displyTemparature = (data) => {
        console.log(data);       
        tempnameShow.innerText = data.main.temp;
        cloudnameShow.innerText = data.main.humidity;
}
const getinputvalue = () => {
	const cityinputid = document.getElementById("city-input-id");
	const cityinputidvalue = cityinputid.value;
	console.log(cityinputidvalue);
        
        citynameShow.innerText = cityinputidvalue;
        loadTemparature(cityinputidvalue);


cityinputid.value = "";




};