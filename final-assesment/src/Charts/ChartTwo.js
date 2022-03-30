import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { getLaunches, getThrust } from "../services/ApiService";

export function ThrustData() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        getThrust().then(rocket => {

            const seaLevelThrust = rocket.filter(events => events.thrust_sea_level)
            const vacuumThrust = rocket.filter(events => events.thrust_vacuum)
            getThrust().then(event => {


                setChartData({
                    labels: ["Sea Level Thrust"],
                    datasets: [
                        {
                            label: event,
                            data: [event.data],
                            backgroundColor: "#2b2b2b",
                        },
                        {
                            label: [event.data.vacuumThrust],
                            data: [event.data.vacuumThrust],
                            backgroundColor: "#222222",
                        },
                    ]
                });

                setChartOptions({
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "bottom",
                        },
                        title: {
                            display: true,
                            text: `${event.getThrust}`,
                        },
                    },
                });
            })
        })
    }, []);

    return (
        <Bar options={chartOptions} data={chartData} />
    );
}
export default ThrustData;