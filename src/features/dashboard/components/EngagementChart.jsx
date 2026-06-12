import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip} from "recharts";

import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const EngagementChart =
    () => {

        const analytics =
            useSelector(
                state =>
                    state.dashboard.data
                        ?.engagementAnalytics ||
                    []
            );

        return (
            <BaseCard>

                <h2
                    className="
text-lg
font-semibold
mb-6
"
                >
                    Employee Engagement
                </h2>

                <div
                    className="
h-[300px]
"
                >
                    <ResponsiveContainer>
                        <AreaChart
                            data={analytics}
                        >
                            <XAxis
                                dataKey="month"
                            />

                            <Tooltip />

                            <Area
                                dataKey="engagement"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </BaseCard>
        );
    };

export default
    EngagementChart;