import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getLaunchesforEachYear } from "../services/ApiService";
import '../styles/Timeline.css'
export function Timeline() {
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        var launchPerYear = [];
        var year = [];
        var launches = 0;
        getLaunchesforEachYear().then(launches => {
            getLaunchTotal(launches.lenght).then(launches => {
                launches.year.forEach(year => {
                    launches++;
                    year.push(`Year: ${launches}`);
                    launchPerYear.push();
                });

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
            })
        })
    }, [])

    return (
        <div>

            <div className="linechart">
                <Line options={chartOptions} data={chartData} />
            </div>

        </div>
    )
}