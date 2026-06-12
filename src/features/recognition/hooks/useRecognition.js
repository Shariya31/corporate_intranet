import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setRecognitionData, setRecognitionLoading } from "../slices/recognitionSlice";
import { getRecognitionData } from "../services/recognitionService";

const useRecognition = () => {
  const dispatch = useDispatch();

  const fetchRecognition =
    async () => {
      dispatch(
        setRecognitionLoading(true)
      );

      const data =
        await getRecognitionData();

        console.log(data, 'recognition')

      dispatch(
        setRecognitionData(data)
      );

      dispatch(
        setRecognitionLoading(false)
      );
    };

  useEffect(() => {
    fetchRecognition();
  }, []);
};

export default useRecognition;