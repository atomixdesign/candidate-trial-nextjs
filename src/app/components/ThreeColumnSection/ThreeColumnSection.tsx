import Image from "next/image";
import React from "react";


const ThreeColumnSection = () => {
    return (
        <div className="main-content">
            <div className="content-title">
                <h2>Three column with image</h2>
            </div>
            <div className="column-content">
                <div className="main-col-3">
                    <p><strong>Lorem ipsum dolor sit amet conse tetur sadipiscing elite dolore.</strong></p>
                    <Image
                        src="/Image25.png"
                        width={408}
                        height={254}
                        alt="Lorem"
                        className="content-image" />
                </div>
                <div className="main-col-3">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.</p>
                    <p>Et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur.</p>
                </div>
                <div className="main-col-3 column-last">
                    <ul>
                        <li><i className="fa fa-angle-right" aria-hidden="true"></i>Lorem ipsum dolor sit amet, consetetur</li>
                        <li><i className="fa fa-angle-right" aria-hidden="true"></i>Sadipscing elitr, sed diam nonumy</li>
                        <li><i className="fa fa-angle-right" aria-hidden="true"></i>Eirmod tempor invidunt ut labore et dolore</li>
                        <li><i className="fa fa-angle-right" aria-hidden="true"></i>magna aliquyam erat, sed diam voluptua</li>
                    </ul>
                    <p>Et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit amet, consetetur.</p>
                </div>
            </div>
        </div>
    );
}

export default ThreeColumnSection