// import Container from'bootstrap/dist/css/
import React, { useState } from 'react';
import Header from '../components/Header'
export const Home = ({ onSearch }) => {

  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
};
  return (
    <>
        <Header/>

      <section id='Home'>
      <h1>Food is not just fuel it's an Experience.</h1>
        <div className='input-group'>

            <form onSubmit={handleSubmit} className="text-center">
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Enter a recipe "
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button style={{ backgroundColor: 'tomato' }} className="btn">
                    Get Started
                </button>
            </form>
       </div>
      </section>
    
    </>
        
      )
}
