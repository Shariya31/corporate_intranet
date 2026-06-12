
import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const StrategicPriorities = () => {
    const priorities = useSelector(
        (state) => state.leadership.data?.priorities || [],
    );

    return (
        <BaseCard>
            <h2
                className=" text-xl font-semibold mb-6 "
            >
                Strategic Priorities
            </h2>

            <div className="space-y-5">
                {priorities.map((priority) => (
                    <div key={priority.id}>
                        <div
                            className=" flex justify-between mb-2 "
                        >
                            <span>{priority.title}</span>

                            <span>{priority.progress}%</span>
                        </div>

                        <div
                            className=" w-full h-3 bg-slate-100 rounded-full overflow-hidden "
                        >
                            <div
                                className="h-full bg-indigo-600"
                                style={{
                                    width: `${priority.progress}%`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </BaseCard>
    );
};

export default StrategicPriorities;
