import "./OurService.css";
const Button = () => {
  return <button className="btn btn-outline-primary ">Read More</button>;
};
const OurService = () => {
  return (
    <div className="ParentContainer py-5">
      <div className=" upper-section ">
        <div className=" text-center py-5">
          <div>
            <div className="colorOrange text-uppercase">
              <li type="square">WHAT WE DO </li>
            </div>
            <h2 className="text-light">We High Service That Stand</h2>
          </div>
        </div>
      </div>
      <div className="lower-section position-relative container ">
        <div
          id="carouselExampleAutoplaying"
          className="carousel  slide movetocenter"
          data-bs-ride="carousel"
        >
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>

          <div className="carousel-inner  container position-relative ">
            <div className="carousel-item active">
              <div className="row ">
                <div className="col-md-4 col pb-5">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=7c625ea379640da3ef2e24f20df7ce8d"
                    />
                    <div className="card-body px-3">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <Button />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col pb-5">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=42b2d9ae6feb9c4ff98b9133addfb698"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>{" "}
                      <Button />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col pb-5">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3d2e8a2039c06dd26db977fe6ac6186a"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>{" "}
                      <Button />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 col  pb-5">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=3f317c1f7a16116dec454fbc267dd8e4"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>{" "}
                      <Button />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col pb-5">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ebadb044b374504ef8e81bdec4d0e840"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>{" "}
                      <Button />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col  pb-5">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=0754ab085804ae8a3b562548e6b4aa2e"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>{" "}
                      <Button />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 col pb-5">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=ee8417f0ea2a50d53a12665820b54e23"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>{" "}
                      <Button />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col pb-5">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=8ac55cf3a68785643998730839663129"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>{" "}
                      <Button />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col pb-5">
                  <div className="card">
                    <img
                      className="img-fluid"
                      alt="100%x280"
                      src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=5ee4fd5d19b40f93eadb21871757eda6"
                    />
                    <div className="card-body">
                      <h4 className="card-title">Special title treatment</h4>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>{" "}
                      <Button />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-indicators  ourserviceIndicators">
            <i
              color="red"
              // data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              aria-current="true"
              aria-label="Slide 1"
              className="px-1 active"
              size={30}
            ></i>
            <i
              // data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              size={30}
              className="px-1"
              aria-label="Slide 2"
            ></i>
            <i
              // data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              className="px-1"
              size={30}
              aria-label="Slide 3"
            ></i>
          </div>
          <div className="ring1 RingOnCenter Carts"></div>
          <div className="ring2 RingOnCenter Carts"></div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
