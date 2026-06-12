

import { useSelector }
    from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const RecentlyViewed = () => {

    const items =
        useSelector(
            state =>
                state.knowledge.data
                    ?.recentlyViewed || []
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
                Recently Viewed
            </h2>

            <div className="space-y-3">

                {
                    items.map(
                        item => (
                            <p
                                key={item.id}
                            >
                                {item.title}
                            </p>
                        )
                    )
                }

            </div>

        </BaseCard>
    );
};

export default
    RecentlyViewed;