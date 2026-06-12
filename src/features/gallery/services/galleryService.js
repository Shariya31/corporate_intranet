import { galleryData } from "../../../shared/mock-data/galleryData";

export const getGalleryData =
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(galleryData);
            }, 600);
        });