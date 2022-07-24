import React from 'react'
import '../../styles/Home.css';
import Logo from '../assets/github-logo.png';
import Github from '../assets/github.png';

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='container-img'>
          <img src={Logo} alt="Logo-github" width={400} />
          <img src={Github} alt="" width={300} />
        </div>
        <form className="container-form">
          <input
            name="UserName GitHub"
            type="text"
            className="form-control input"
            placeholder='Search User-GitHub'
          />
        </form>
      </div>
    </>
  )
}

export default Home;