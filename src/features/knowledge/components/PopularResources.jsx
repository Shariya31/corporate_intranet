
import { useSelector }
    from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const PopularResources = () => {

    const items =
        useSelector(
            state =>
                state.knowledge.data
                    ?.popularResources || []
        );

    return (
        <BaseCard>

            <h2
                className="
text-lg
font-semibold
mb-4
"
            >
                Popular Resources
            </h2>

            <div className="space-y-4">

                {
                    items.map(
                        item => (
                            <div
                                key={item.id}
                                className="
flex
justify-between
"
                            >
                                <p>
                                    {item.title}
                                </p>

                                <span>
                                    {item.views}
                                </span>
                            </div>
                        )
                    )
                }

            </div>

        </BaseCard>
    );
};

export default
    PopularResources;