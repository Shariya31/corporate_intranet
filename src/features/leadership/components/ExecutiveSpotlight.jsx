import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const ExecutiveSpotlight = () => {
    const executives = useSelector(
        (state) => state.leadership.data?.executives || [],
    );

    const ceo = executives[0];

    if (!ceo) return null;

    return (
        <BaseCard className=" bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
            <div className=" flex justify-between items-center ">
                <div>
                    <p>Executive Spotlight</p>

                    <h1 className=" text-4xl font-bold mt-3 ">{ceo.name}</h1>

                    <p className="mt-2">{ceo.designation}</p>

                    <p className=" mt-6 max-w-2xl ">{ceo.message}</p>
                </div>

                <img
                    src={ceo.image}
                    alt=""
                    className=" w-40 h-40 rounded-full border-4 border-white "
                />
            </div>
        </BaseCard>
    );
};

export default ExecutiveSpotlight;
