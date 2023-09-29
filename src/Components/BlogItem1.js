import React from 'react'
import img5 from "./images/heri.jpg";

export default function BlogItem1() {
    return (
        <div>
            <section class="big-feature-section">
                <div class="container big-feature-flex big-feature-container">
                    <div class="feature-img">
                        <img src={img5} alt="" />
                    </div>
                    <div class="feature-desc flex-center">
                        <h4>Effortless validation for</h4>
                        <h5>Design profesionals</h5>
                        <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
                    </div>

                </div>
            </section>
        </div>
    )
}
