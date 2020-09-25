import React, { useState } from 'react';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

const FeatureItem = ({ feature }) => {
    const { img, title, logo, description } = feature;
    const [descriptionCollapse, setDescriptionCollapse] = useState(false);


    const handleShowMore = () => {
        setDescriptionCollapse(true);
    }
    const handleShowLess = () => {
        setDescriptionCollapse(false);
    }

    return (
        <div className="col-md-6 col-lg-4">
            <div className="pdItem-style">
                <img className='img-fluid' style={{ height: '320px', width: '350px' }} src={img} alt="" />
                <div className="d-flex py-3">
                    <div>
                        <img style={{ marginRight: '8px' }} src={logo} alt="" />
                    </div>
                    <div>
                        <h4>{title}</h4>
                    </div>
                </div>
                <p>
                    {
                        descriptionCollapse ? description : description.substr(0, 110) + "..."
                    }
                </p>

                {
                    descriptionCollapse ?
                        <span className="collapse-btn" onClick={handleShowLess}> See less
                             <ArrowBackOutlinedIcon className="arrow-style" />
                        </span> :
                        <span className="collapse-btn" onClick={handleShowMore}>See More
                             <ArrowForwardOutlinedIcon className="arrow-style" />
                        </span>
                }
            </div>
        </div>
    );
};

export default FeatureItem;