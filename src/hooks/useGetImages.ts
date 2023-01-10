import { useEffect, useState } from "react";
import { RoverName } from "../roverContext";

const API = process.env.REACT_APP_ROVER_API;

interface ImageInfoType {
    camera: {
        full_name: string
        id: number
        name: string
        rover_id: number
    }
    earth_date: string
    id: number
    img_src: string
    rover: {
        id: number
        landing_date: string
        launch_date: string
        name: RoverName
        status: string
    }
    sol: number
}

export type imageDataType = ImageInfoType[]


// Convert [1,2,3,4] => [[1,2], [3,4]]
//
const arrayOfArrays: any = (anArray: any) => {
    const ARRAYLENGTHS = 2;

    if (anArray.length < 1)
        return [];

    const end = anArray.splice(ARRAYLENGTHS);

    return [anArray, ...arrayOfArrays(end)]
}


const useGetImages = (selectedRover: RoverName, sol: number, page: number) => {
    const [imageData, setImageData] = useState<imageDataType[]>()
    const [loading, setLoading] = useState(false);  //TODO: handle loading state
    const endpoint = '/imagedata'


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const response = await fetch(`${API}${endpoint}?rover=${selectedRover}&sol=${sol}&page=${page}`);
                const result = await response.json()
                const dataArray = result.photos;

                setImageData(arrayOfArrays(dataArray));
            } catch (error) {
                setImageData([])
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [selectedRover, sol, page]);

    return { imageData, loading }
}

export default useGetImages;