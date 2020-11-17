import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    //const categories = ['Lorem1', 'lorem2', 'lorem3'];

    const [categories, setcategory] = useState(['Devil may cry'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setcategory} />
            <hr></hr>



            <ol>
                {
                    categories.map((cat) => <GifGrid key={cat} category={cat} />)
                }
            </ol>

        </>

    )
}
