import Image from "next/image";
import React from "react";


const WeatherWidget = async() => {
    const key = 'db534b4bae79aedbe44a2d071231cf88';
    const lat = 7.291418;
    const lan = 80.636696;
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={key}');
    const wData = await res.json();

    return (
        <>
        { console.log(wData) }
        </>
    );
}
export default WeatherWidget