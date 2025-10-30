import React from 'react'

const searchBar = ({value,onChange,submit,isLoading}) => {
  return (
    <form onSubmit={submit}>
        <input value={value} placeholder='Enter an ingredient' onChange={onChange} className='form-control' disabled={isLoading}/>
        <input type="submit" className='btn' value='Search' disabled={isLoading || !value}/>
    </form>
  )
}

export default searchBar
