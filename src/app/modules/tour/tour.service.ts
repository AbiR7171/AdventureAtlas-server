import { TTour } from "./tour.interface";
import { Tour } from "./tour.model";

const createTourIntoDB = async(tour: TTour) =>{
    
          const result = await Tour.create(tour);
          return result
}


export const tourServices = {
    createTourIntoDB
}