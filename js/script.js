let tempData;

const $description = $('#description');
const $feels_like = $('#feels_like');
const $temp_max = $('#temp_max');
const $temp_min = $('#temp_min');
const $humidity = $('#humidity');
const $input = $('input[type = "text"]');

function handleGetData(event){
    event.preventDefault();
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${$input.val()}&appid=f1837fd7a9fa0433e12e96a5ce117c33&units=imperial`
    }).then(function(data){
        console.log(data);
        tempData = data;
        render();
    }, 
    function(error){
        console.log('Error:', error);
    })
} 

function render(){
    $description.text(tempData.weather[0].description);
    $feels_like.text(tempData.main.feels_like);
    $temp_max.text(tempData.main.temp_max);
    $temp_min.text(tempData.main.temp_min);
    $humidity.text(tempData.main.humidity);
}

$('form').on('submit', handleGetData);
