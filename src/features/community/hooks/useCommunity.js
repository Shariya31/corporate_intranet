import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setCommunityData, setCommunityLoading } from "../slices/communitySlice";
import { getCommunityData } from "../services/communityService";

const useCommunity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      dispatch(setCommunityLoading(true));

      const data = await getCommunityData();

      dispatch(setCommunityData(data));

      dispatch(setCommunityLoading(false));
    };

    load();
  }, []);
};

export default useCommunity;
