export const getWeatherData = async (city) => {

try {
        const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2695a3783a8cc06ea970ea980f601eff&lang=ru&units=metric`
    );

return await response.json();

} catch (error) {
    console.error(error);
    }
}