import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import AboutUs from "../aboutUs/AboutUs";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Layout from "../layout/Layout";


export default function RoutePath(){
    return(
        <div>
            <Routes>
                {/* Parent Route Components */}
                <Route path="/" element={<Layout/>}>
                {/* Child Route Components */}
                <Route index element={<Home/>}/>
                <Route path="/about-us" element={<AboutUs/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact-us" element={<Contact/>}/>
                </Route>
            </Routes>
        </div>
    );
}