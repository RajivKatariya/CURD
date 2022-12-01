import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4 mt-4'>
                    <Link to="traval">
                    <div className="card">
                        <img src="image/img2.jpg" className="card-img-top" alt="eduction" />
                        <div className="card-body">
                            <p className="card-text"><h1>about Traval</h1></p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className='col-4 mt-4'>
                    <Link to="education">
                    <div className="card">
                        <img src="image/img2.jpg" className="card-img-top" alt="eduction" />
                        <div className="card-body">
                            <p className="card-text"><h1>about you education tab</h1></p>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className='col-4 mt-4'>
                    <div className="card">
                        <img src="image/img2.jpg" className="card-img-top" alt="eduction" />
                        <div className="card-body">
                            <p className="card-text">about you education tab</p>
                        </div>
                    </div>
                </div>
                <div className='col-4 mt-4'>
                    <div className="card">
                        <img src="image/img2.jpg" className="card-img-top" alt="eduction" />
                        <div className="card-body">
                            <p className="card-text">about you education tab</p>
                        </div>
                    </div>
                </div>
                <div className='col-4 mt-4'>
                    <div className="card">
                        <img src="image/img2.jpg" className="card-img-top" alt="eduction" />
                        <div className="card-body">
                            <p className="card-text">about you education tab</p>
                        </div>
                    </div>
                </div>
                <div className='col-4 mt-4'>
                    <div className="card">
                        <img src="image/img2.jpg" className="card-img-top" alt="eduction" />
                        <div className="card-body">
                            <p className="card-text">about you education tab</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome