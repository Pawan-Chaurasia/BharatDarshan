import React from 'react'
import img4 from "./images/goan culture.jpg";
export default function BlogItem() {
    return (
        <div>
            <section class="big-feature-section">
                <div class="container big-feature-flex big-feature-container">
                    <div class="feature-desc">
                        <h4>Effortless validation for</h4>
                        <h5>Design profesionals</h5>
                        <p>Test interfaces, interaction flows, iconography and more, to help you create intuitive and delightful experiences for your users.</p>
                    </div>
                    <div class="feature-img flex-center ">
                        <img src={img4} alt="" />
                    </div>

                </div>
            </section>
        </div>
    )
}
