import { getLaunches } from "../services/ApiService";
import { ChartOne } from '../Charts/ChartOne';
import { ChartTwo } from '../Charts/ChartTwo';
import { Doughnut } from "react-chartjs-2";

export function OverviewPage() {
    return (
        <section>
            <h1>Space X: Overview</h1>
            <div>
                < ChartOne />
            </div>


        </section>
    )
}