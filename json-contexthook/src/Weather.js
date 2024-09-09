import React, { useState } from 'react'

const Weather = () => {
    const [weather, setWeather] = useState({})
    const searchData = (e) => {

        if (e.key == 'Enter') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${'3b10cafef201e950474223e27b2951a6'}`).then((result) => {
                return result.json()
            }).then((result) => {
                console.log(result);
                if (result.cod == 200) {
                    setWeather(result)
                } else {
                    setWeather({})
                }

            })
        }
    }
    return (
        <>
            <div class="input-group mt-5" >
                <input type="search" class="form-control rounded w-60" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onKeyPress={searchData} />
            </div>

            {Object.keys(weather).length !== 0 && <div className="row d-flex justify-content-center py-5">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card text-body" style={{ borderRadius: 35 }}>
                        <div className="card-body p-4">
                            <div className="d-flex">
                                <h6 className="flex-grow-1">{weather.name}</h6>
                                <h6>15:07</h6>
                            </div>
                            <div className="d-flex flex-column text-center mt-5 mb-4">
                                <h6 className="display-4 mb-0 font-weight-bold"> {Math.round((weather.main.temp - 273.15) * 100) / 100}°C </h6>
                                <span className="small" style={{ color: "#868B94" }}>
                                    {weather.weather.main}
                                </span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                                    <div>
                                        <i className="fas fa-wind fa-fw" style={{ color: "#868B94" }} />{" "}
                                        <span className="ms-1"> 40 km/h</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-tint fa-fw" style={{ color: "#868B94" }} />{" "}
                                        <span className="ms-1"> 84%</span>
                                    </div>
                                    <div>
                                        <i className="fas fa-sun fa-fw" style={{ color: "#868B94" }} />{" "}
                                        <span className="ms-1"> 0.2h</span>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                                        width="100px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            {Object.keys(weather).length == 0 && <div class="row d-flex justify-content-center py-5">
                <div class="col-md-8 col-lg-6 col-xl-5">

                    <div class="card text-body" style={{ borderRadius: 35 }}>
                        <div class="card-body p-4">
                            <h1>City Not Found </h1>


                        </div>
                    </div>

                </div>
            </div>}




        </>
    )
}

export default Weather