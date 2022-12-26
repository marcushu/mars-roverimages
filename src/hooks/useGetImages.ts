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

type imageDataType = ImageInfoType[]

const useGetImages = () => {
    const [imageData, setImageData] = useState<imageDataType>()
    const endpoint = '/imagedata'
    //TODO: dynamicly add these with argument
    const rovername = 'spirit';
    const sol = 4;
    const page = 1;

    useEffect(() => {
        const fetchData = async () => {
            var requestHeaders = new Headers();
            requestHeaders.append("Content-Type", "application/json");

            let raw = JSON.stringify({
                "rover": rovername,
                "sol": sol,
                "page": page
            });

            let requestOptions = {
                method: 'POST',
                headers: requestHeaders,
                body: raw
            };

            try {
                const response = await fetch(API + endpoint, requestOptions);
                const result = await response.json()

                console.log(result.photos);
                setImageData(result.photos);
            } catch (error) {
                setImageData([])
                console.log(error);
            }

        }

        fetchData();
    }, []);

    return imageData;
}

export default useGetImages;