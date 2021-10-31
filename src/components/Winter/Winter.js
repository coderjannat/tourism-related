import React from 'react';
import img1 from '../../img/img1.png';
import img2 from '../../img/img2.png';
import img3 from '../../img/img3.png';
import img4 from '../../img/img4.png';
import './winter.css';

const Winter = () => {
    return (
        <div className="text-center winter">
            <h1>Winter Holiday</h1>
            <p> live in a wonderful world that is full of beauty, charm and adventure.</p>

            <div className="row border-0 w-40 p-4 m-2" >
                <div className="col-sm-3 p-4">
                   <img width="75" height="78" center src={img1} alt="" />
                    <div className="card border-0 justify-content-center">
                       <div className="card-body">
                            <h5 className="card-title">Restaurants</h5>
                            <p className="card-text">We require debit or credit card details to reserve a table. For the consideration of other guests.</p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-3 p-4">
                <img width="75" height="78" center src={img2} alt="" />
                    <div className="card border-0">
                    <div className="card-body">
                            <h5 className="card-title">Sightseeing</h5>
                            <p className="card-text">Sightseeing is the activity of visiting the interesting places that tourists usually visit and we help to do that.</p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-3 p-4">
                <img width="75" height="78" center src={img3} alt="" />
                    <div className="card border-0">
                     <div className="card-body">
                            <h5 className="card-title">Shops & Boutiques</h5>
                            <p className="card-text">We provide the best direction for the best shopping for you and your family.</p>

                        </div>
                    </div>
                </div>

                <div className="col-sm-3 p-4 ">
                    <img width="75" height="78" center src={img4} alt="" />
                    <div className="card border-0">
                    <div className="card-body">
                            <h5 className="card-title">Where to Stay</h5>
                            <p className="card-text">Booked today to stay in best place.We guid you the best hotels in the town.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Winter;