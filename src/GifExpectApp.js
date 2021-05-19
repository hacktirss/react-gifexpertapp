import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
//import PropTypes from "prop-types";

const GifExpectApp = () => {
    
    const [categories, setCategories] = useState(["Goku"])

    /*const handleAdd = () => {
        setCategories([... categories, "Naruto"]);
    }*/

    return (
        <>
            <h2>GifExpectApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category}  category={category}/>
                    ))
                }
            </ol>
        </>
    );
}

GifExpectApp.prototype = {

}

GifExpectApp.default = {

}

export default GifExpectApp;