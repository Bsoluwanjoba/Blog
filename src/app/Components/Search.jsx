"use client"
import React from 'react'

export default function Search() {
    const [searchFood, setSearchFood] = useState('')
    const [searchResults, setSearchResults] = useState([])

    function onSubmit(e){
        e.preventDefault()
        setSearchFood(e.target.search.value)
      }
   
      const handleSearch = (query) => {
       setSearchFood(query);
       const filteredResults = foods.filter(
         (food) =>
           food.title.toLowerCase().includes(query.toLowerCase()) ||
           food.category.toLowerCase().includes(query.toLowerCase())
       );
       setSearchResults(filteredResults);
     };
  return (
    <div>
       <section className='py-[6em]'>
           <form className='flex items-center justify-center py-[2em]' onSubmit={onSubmit}>
      <input type="search" name="search" id="search" placeholder='Search For Food & Categories' className={`w-3/5 outline-8 rounded-[40px] border-[3px] border-[red] border-solid my-5 m-auto focus:shadow-2xl p-[10px] ${styles.sear}`} defaultValue={searchFood} onChange={(e) => handleSearch(e.target.value)}/>
    </form>

    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 py-[10px] w-[95%] m-auto">
        {searchResults.length > 0 ? (
          // Display recipes if results are found
          recipeArray
        ) : (
          // Display "not found" message if no results are found
          <p className="text-center text-[red] font-bold">{`No recipes found for '${searchFood}'`}</p>
        )}
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-10 p-20 w-[95%] m-auto'>
        {recipeArray}
      </div>
    </section>

    </div>
  )
}
