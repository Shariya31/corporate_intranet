import { leadershipData } from "../../../shared/mock-data/leadershipData";

export const getLeadershipData =
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          leadershipData
        );
      }, 700);
    });