import { getLaunches } from "../services/ApiService";
import SuccesFailureLaunches from '../Charts/ChartOne';
import ThrustData from '../Charts/ChartTwo';



export function OverviewPage() {
    return (
        <section>
            <h1>Space X: Overview</h1>
            <div>
                < SuccesFailureLaunches />

                <ThrustData />

                <TotalLaunches />
                <div>
                    <div className="missions"></div>
                </div>

            </div>


        </section>
    )
}