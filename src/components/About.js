import React from "react";

function About( {image = "https://via.placeholder.com/215", about} ) {
    //console.log(image)

    return (
        <aside id="about">
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}

export default About;