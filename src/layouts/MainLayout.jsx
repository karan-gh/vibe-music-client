import Navbar from "../components/Navbar";
import Player from "../components/Player";
import { Outlet } from "react-router-dom";

export default function MainLayout(){

    return(

        <>

            <Navbar />

            <Outlet />

            <Player />

        </>

    );

}