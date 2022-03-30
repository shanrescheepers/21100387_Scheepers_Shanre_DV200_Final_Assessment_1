import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getLaunchesforEachYear, getLaunches, getThrust } from "../services/ApiService";
import '../styles/Timeline.css'



export function TotalLaunches() {
    const [totalLaunches, setTotalLaunches] = useState({});

    useEffect(() => {
        getLaunches().then(launches => {
            setTotalLaunches({
                count: launches.length
            });
        })
    }, [])
    setChartData({
        labels: launches,
        datasets: [
            {
                label: "Launches",
                data: launchPerYear,
                backgroundColor: "#E31C25",
            },
        ]
    });

    setChartOptions({
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Years",
            },
        },
    });


    return (
        <div>

            <div>
                <Line options={chartOptions} data={chartData} />
            </div>

        </div>
    )
}
export default TotalLaunches;