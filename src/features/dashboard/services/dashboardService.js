import { dashboardData } from "../../../shared/mock-data/dashboardData";

export const getDashboardData =
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(dashboardData);
      }, 800);
    });