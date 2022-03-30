import { getLaunches } from "../services/ApiService";
import { ChartOne } from '../Charts/ChartOne';
import { Doughnut } from "react-chartjs-2";

export function OverviewPage() {
    return (
        <section>
            <h1>Space X: Overview</h1>
            < ChartOne />
            <Doughnut />
        </section>
    )
}