import React from 'react';
import './Feature.scss';
import FeatureItem from '../FeatureItem/FeatureItem';
import featuresData from '../../data/feature.json';

const Feature = () => {

    return (
        <section className="feature mt-5">
            <div className="container">
                <div className="row my-4">
                    <div className="col">
                        <h2>Why you choose us</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, repellat! Porro, delectus. Porro voluptate fuga, facere quod perferendis consequuntur dolores consequatur nemo provident doloremque nam enim magnam ipsam ullam aliquid?</p>
                    </div>
                </div>
                <div className="row">
                    {
                        featuresData.map(feature => <FeatureItem
                            key={feature.title}
                            feature={feature}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Feature;
