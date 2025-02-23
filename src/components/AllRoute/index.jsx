import { useRoutes } from "react-router-dom";
import {routes} from "../../routes"
//console.log("routes:",routes);
function AllRoute(){
    const elements=useRoutes(routes);
    return(
        <>
        {elements}
        </>
    )
}
export default AllRoute;