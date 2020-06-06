import React from 'react'
import './Features.css'

interface Props {
    setFeatures: (features: string) => void
}

const Features = (props: Props) => {
    // const feature

    return (
        <section className="features-section">
            <h5>Features</h5>
            <section className="feature-option">
                <input type="checkbox" id="patio" name="patio" onChange={e => props.setFeatures(e.target.name)}/>
                <label htmlFor="patio">Patio</label>
            </section>
            <section className="feature-option">
                <input type="checkbox" id="dog-friendly" name="dog-friendly" onChange={e => props.setFeatures(e.target.name)}/>
                <label htmlFor="dog-friendly">Dog-friendly</label>
            </section>
            <section className="feature-option">
                <input type="checkbox" id="Kid-friendly" name="Kid-friendly" onChange={e => props.setFeatures(e.target.name)}/>
                <label htmlFor="Kid-friendly">Kid-friendly</label>
            </section>
            <section className="feature-option">
                <input type="checkbox" id="kitchen" name="kitchen" onChange={e => props.setFeatures(e.target.name)}/>
                <label htmlFor="kitchen">Kitchen</label>
            </section>
            <section className="feature-option">
                <input type="checkbox" id="food-trucks" name="food-trucks" onChange={e => props.setFeatures(e.target.name)}/>
                <label htmlFor="food-trucks">Food Trucks</label>
            </section>
            <section className="feature-option">
                <input type="checkbox" id="wine" name="wine" onChange={e => props.setFeatures(e.target.name)}/>
                <label htmlFor="wine">Wine</label>
            </section>
            <section className="feature-option">
                <input type="checkbox" id="cider" name="cider" onChange={e => props.setFeatures(e.target.name)}/>
                <label htmlFor="cider">Cider</label>
            </section>
            <section className="feature-option">
                <input type="checkbox" id="full-bar" name="full-bar" onChange={e => props.setFeatures(e.target.name)}/>
                <label htmlFor="full-bar">Full Bar</label>
            </section>
        </section>
    )
}

export default Features