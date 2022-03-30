import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { getLaunches } from "../services/ApiService";
import { axios } from "axios";



export function ChartOne() {

    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({
        datasets: [],
    });
    useEffect(() => {
        getLaunches().then(launches => {
            const success = launches.filter(links => links.succes === "true")
            getStatus(success[0].success).then(links => {
                const successLaunch = links.success.lenght
                const failedLaunch = links.success.lenght

                // useEffect(() => {

                //     getLaunches()
                //         .then((response) => {
                //             const launches = (data.success)
                //             console.log(response.data.success);
                //             console.log(launches.data)
                //             console.log(getLaunches)
                //         })
            }, []);
            setChartData({
                labels: launches(success => response.data.succes.length),
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

        }
        ), []
    }
    )
    return (
        <div>
            <Doughnut options={successLaunches} data={failedLaunches} />
        </div>
    )
}
export default ChartOne;
