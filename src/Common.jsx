import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/rightimage.jpg';
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
                <div className='row'>
                {/* LEFT */}
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                    <h1>
                        {props.name} <strong className='brand-name'>XYZCO</strong>
                    </h1>
                    <h2 className='my-3'>
                        We are the professional accountants.
                    </h2>
                    <div className='mt-3'>
                        <NavLink to={props.visit} className='btn-get-started'>{props.btnname}</NavLink>
                    </div>
                </div>
                {/* LEFT */}
                {/* RIGHT */}
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img src={web} alt='img' className='img-fluid animated' />
                </div>
                {/* RIGHT */}
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
