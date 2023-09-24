import React from 'react'

const Carousal = () => {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{ objectFit: "contain !important"  }}>
        <div className="carousel-inner" id='carousel'>
          <div className='carousel-caption' style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src="https://www.livemint.com/lm-img/img/2023/07/11/1600x900/Jawan_1689069088718_1689069098009.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.manoramaonline.com/content/dam/mm/mo/movies/movie-reviews/images/2023/8/25/rdx-review.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.hindustantimes.com/ht-img/img/2023/08/19/1600x900/jailer_box_office_tamil_nadu_1692416829885_1692416841022.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.cnbctv18.com/wp-content/uploads/2023/08/jawan-1019x573.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousal