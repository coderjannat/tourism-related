import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-5 .bg-dark">
    <hr />

      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h2 className="text-uppercase mb-4 font-weight-bold">
            <span className="text-warning fw-bolder fs-1">T</span>rAvilla
            </h2>
            <p>
            The journey may appear long and intimidating, but when you take one step with Travilla, it will manageable and enjoyable!!!
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h4 className="text-uppercase mb-4 font-weight-bold">Products</h4>
            <p>
              Tickets
            </p>
            <p>
             Hotels
            </p>
            <p>
              Shops
            </p>
            <p>
              SeightSeeingr
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              Your Account
            </p>
            <p>
              Become an Affiliate
            </p>
            <p>
              Shipping Rates
            </p>
            <p>
              Help
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> Bangladesh, Chittagong, New Market
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> coderjannat@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="align-items-center">
          <MDBCol >
            <p className="text-center grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
               Jannatul Fardous 
            </p>
          </MDBCol>
          {/* <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1">
                    <i className="fab fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-black-slight mx-1">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;