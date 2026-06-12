import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setLeadershipData, setLeadershipLoading } from "../slices/leadershipSlice";
import { getLeadershipData } from "../services/leadershipService";

const useLeadership = () => {
  const dispatch = useDispatch();

  const fetchLeadership =
    async () => {
      dispatch(
        setLeadershipLoading(true)
      );

      const data =
        await getLeadershipData();

      dispatch(
        setLeadershipData(data)
      );

      dispatch(
        setLeadershipLoading(false)
      );
    };

  useEffect(() => {
    fetchLeadership();
  }, []);
};

export default useLeadership;