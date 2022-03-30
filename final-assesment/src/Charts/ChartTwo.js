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
            const seaLevelThrust = rocket.filter(events => events.first_stage[0])
            const vacuumThrust = rocket.filter(events => events.first_stage[2])
            getThrust(first_stage[0]).then(event => {


                setChartData({
                    labels: ["Sea Level"],
                    datasets: [
                        {
                            label: event.first_stage[0],
                            data: [event.first_stage[0].seaLevelThrust],
                            backgroundColor: "#2b2b2b",
                        },
                        {
                            label: first_stage[1].vacuumThrust,
                            data: [event.first_stage[1].vacuumThrust],
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
                            text: `${event.Name}`,
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