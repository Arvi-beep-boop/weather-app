import { useSelector } from "react-redux";
import { weatherSlice } from "../store/weather.slice";

export function Units(){
    const units = useSelector(weatherSlice.selectors.selectUnits);
    return (units === "metric" ? "C" : "F");
}