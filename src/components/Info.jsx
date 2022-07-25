import React from 'react'
import '../../styles/Info.css'

const Info = () => {
  return (
    <>
      <div className="container">
        <div className="container-info">
          <div className="header-container">
            <img src="https://thumbs.dreamstime.com/b/d%C3%ADa-del-medio-ambiente-en-tierra-manos-de-%C3%A1rboles-cultivando-pl%C3%A1ntulas-fondo-verde-bokeh-hembra-sujetando-un-%C3%A1rbol-el-campo-la-130247647.jpg" alt="" />
            <div className="title">
              <h2>Abraham-Maker</h2>
              <p>Frontend Developer</p>
              <p>20/06/2003</p>
            </div>
          </div>
        </div>
        <div className="container-desc">
          <div className="conatiner-">
            <p>Repos: <span>2</span></p>
            <p>Followers: <span>12</span></p>
            <p>Following: <span>15</span></p>
          </div>
          <div className="container-card">
            <div className="cards">
              <p>Nombre</p>
            </div>
            <div className="cards">
              <p>Nombre</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info