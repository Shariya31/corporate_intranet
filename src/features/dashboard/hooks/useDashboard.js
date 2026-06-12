import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getDashboardData } from "../services/dashboardService";
import { setDashboardData, setLoading } from "../slilces/dashboardSlice";

const useDashboard = () => {
  const dispatch = useDispatch();

  const fetchDashboard =
    async () => {
      dispatch(
        setLoading(true)
      );

      const data =
        await getDashboardData();

      dispatch(
        setDashboardData(data)
      );

      dispatch(
        setLoading(false)
      );
    };

  useEffect(() => {
    fetchDashboard();
  }, []);
};

export default useDashboard;