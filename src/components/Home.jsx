import React from 'react'
import { Link } from 'react-router-dom';
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
      <div className="container-p">
        <p>Made with love by Abraham-Moreno 💙</p>
      </div>
    </>
  )
}

export default Home;