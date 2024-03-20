import CarCatalog from "@/components/CarCatalog";
import getCars from "@/libs/getCars";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CarPanel from "@/components/CarPanel";

export default function Car(){
    const cars = getCars();
    
    return(
        <main className="text-xl text-center">
            <h1>Select Your Travel Partner</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <CarCatalog carJson={cars}/>
            </Suspense>
            
            <hr className="my-10"/>
            <h1 className="text-xl font-medium">Try Client-side Car Panel</h1>
            <CarPanel/>
        </main>
    )
} 