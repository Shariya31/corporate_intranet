import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getGalleryData } from "../services/galleryService";
import { setGalleryData, setGalleryLoading } from "../slices/gallerySlice";


const useGallery = () => {
    const dispatch = useDispatch();

    const fetchGallery = async () => {
        dispatch(setGalleryLoading(true));

        const data = await getGalleryData();

        dispatch(setGalleryData(data));

        dispatch(setGalleryLoading(false));
    }

    useEffect(() => {
        fetchGallery();
    }, []);
};

export default useGallery;
