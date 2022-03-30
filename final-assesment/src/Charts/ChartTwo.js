import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { getThrust } from "../services/ApiService";

export function getThrustData() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        Thrust.then(thrusts => {
            const seaLevelThrust = thrust.first_stage.thrust_sea_level(thrust => thrust.data)
            getThrust(thrust.data.seaLevelThrust).then(thrusts => {


                setChartData({
                    labels: ["thrust at sea level"],
                    datasets: [
                        {
                            label: '',
                            data: [],
                            backgroundColor: "#2b2b2b",
                        },
                        {
                            label: '',
                            data: [],
                            backgroundColor: "#22222",
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
                            text: `${thrust}`,
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
export default getThrustData;