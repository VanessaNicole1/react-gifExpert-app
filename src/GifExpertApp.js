import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Animals']);

    // const handleAdd = () => {
    //     return setcategories( [...categories, 'Sasha']);
    // }


    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory  setCategories={setcategories} />
            <hr/>

            

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category } 
                            category={ category }/>
                    ))
                }
            </ol>
        </>
    )

}

export default GifExpertApp;