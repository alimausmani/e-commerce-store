import React from 'react';


const Image = () => {
  return (
    <>
    <div className='row2'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.create.vista.com/api/media/small/574930976/stock-photo-modern-household-appliances-pink-wall-room" className="d-block w-100" alt="First slide" width="100" height="400" style={{ padding: '50px' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.india.com/wp-content/uploads/2022/09/Collage-Maker-11-Sep-2022-03.11-PM.jpg" className="d-block w-100" alt="Second slide" width="100" height="400" style={{ padding: '50px' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.thespruce.com/thmb/5uG2OtIfeJHsXKwv9itYRsrUBMA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/clean-small-kitchen-appliances-4153520-Hero-01-ae5afbe704c14967902cc06f2055734c.jpg" className="d-block w-100" alt="Third slide" width="100" height="400" style={{ padding: '50px' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div> 
    </>
  );
};

export default Image;
