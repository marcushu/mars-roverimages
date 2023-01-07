import { useEffect, useState } from "react";
import { RoverName } from "../roverContext";

const API = process.env.REACT_APP_ROVER_API;

interface PhotoManifestData {
    sol: number
    earth_date: string
    total_photos: number
    cameras: [string]
}

export type photoManifestArray = PhotoManifestData[];

const useGetMaifest = (rover: RoverName) => {
    const [roverManifest, setRoverManifest] = useState<photoManifestArray>([]);
    const endpoint = '/manifest'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API}${endpoint}?rover=${rover}`);
                const result = await response.json();

                setRoverManifest(result.photo_manifest.photos);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [rover]);

    return { roverManifest };
}

export default useGetMaifest;