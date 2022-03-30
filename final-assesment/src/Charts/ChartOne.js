import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { getLaunches } from "../services/ApiService";
import { Axios } from "axios";
import '../styles/ChartOne.css'


export function ChartOne() {

    const [chartData, setChartData] = useState({});
    const [status, setSatus] = useState({});

    useEffect(() => {
        getLaunches('https://api.spacexdata.com/v5/launches')
            .then((response) => {
                const setData = (response.data);
                const failedLaunches = (response.data.succes);
                const successLaunches = (response.data.succes);
                let launches = (response.data)
                console.log(response.data.success);
                console.log(launches.data)
                console.log(getLaunches)
            })
    }, [])
    setChartData({
        labels: launches(success => response.data.succes),
        datasets: [
            {
                label: "Failed Launches",
                data: [failedLaunches, successLaunches],
                backgroundColor: ["#2b2b2b", "#222222"],
            },
        ]
    });

    setChartOptions({
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Success Launches",
            },
        },
    });
    return (
        <div>
            <Doughnut options={successLaunches} data={failedLaunches} />
        </div>


    )

}
export default ChartOne;