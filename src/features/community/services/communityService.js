import { communityData } from "../../../shared/mock-data/communityData";

export const getCommunityData =
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(communityData);
            }, 600);
        });