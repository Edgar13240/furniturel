import {createContext} from "react";
import {CarouselContextModel} from "@models/interfaces/context";

export const CarouselContext = createContext<CarouselContextModel>({} as CarouselContextModel);