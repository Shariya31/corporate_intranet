import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setKnowledgeData, setKnowledgeLoading } from "../slices/knowledgeSlice";
import { getKnowledgeData } from "../services/knowledgeService";

const useKnowledge = () => {
  const dispatch = useDispatch();

  const fetchKnowledge =
    async () => {
      dispatch(
        setKnowledgeLoading(true)
      );

      const data =
        await getKnowledgeData();

      dispatch(
        setKnowledgeData(data)
      );

      dispatch(
        setKnowledgeLoading(false)
      );
    };

  useEffect(() => {
    fetchKnowledge();
  }, []);
};

export default useKnowledge;