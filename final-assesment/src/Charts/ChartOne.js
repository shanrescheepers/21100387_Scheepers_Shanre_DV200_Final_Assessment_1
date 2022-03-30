import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import { getLaunches, getLaunchesforEachYear } from "../services/ApiService";
import { axios } from "axios";




export function SuccesFailureLaunches() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({});
    const [totalLaunches, setTotalLaunches] = useState({});

    let launches = (Response.data)
    let successLaunches = (Response.data.success);
    var failedLaunches = !(Response.data.success);
    useEffect(() => {
        getLaunches().then(launches => {
            SuccesFailureLaunches({
                launches: launches.length
            })

            const successLaunches = launches.success(launch => Response.Status === "true").length;
            const failedLaunches = launches.success(launch => Response.Status === "false").length;
            console.log(getLaunches)
        })

    }, [])

    setChartData({
        labels: launches(success => launches.data.succes.length),
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
export default SuccesFailureLaunches;
