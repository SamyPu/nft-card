import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card-nft card p-4 m-0">
                <div className="card-img-top rounded position-relative">
                    <img src="./img/image-equilibrium.jpg" className="card-img-top rounded" alt='ETH'/>
                    <div className='position-absolute card-img-hover rounded d-flex justify-content-center align-items-center'>
                        <img src="./img/icon-view.svg" alt="" />
                    </div>
                </div>
                <div className="card-body p-0 pt-3">
                    <h5 className="card-title card-hover">Equilibrium #3429</h5>
                    <p className="card-text">Our Equilibrium collection promotes balance and calm.</p>
                </div>
                <div className="card-body p-0 d-flex py-3 justify-content-between">
                    <div className='d-flex align-items-center'>
                        <img src="./img/icon-ethereum.svg" alt="" className='me-2'/>
                        <span className='card-eth'>0.041 ETH</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src="./img/icon-clock.svg" alt="" className='me-1'/>
                        <p>3 day left</p>
                    </div>
                </div>
                <div className="card-body d-flex align-items-center p-0 pt-3 border-top border-primary">
                    <img src="./img/image-avatar.png" alt="" className='card-avatar me-3 border rounded-circle border-1 border-light' />
                    <p>Creation of <span className='card-name card-hover'>Julien Callens</span></p>
                </div>
            </div>
        )
    }
}

export default Card;