import React from 'react'
import Imagecard from "../Imagecard"

const Template = (props) => {
    return (
        <div>
            <div className="container mx-auto my-6 text-center place-items-center md:place-items-stretch ">
                <div className="grid lg:grid-cols-3 gap-6 text-center text-lg md:grid-cols-2 sm:grid-cols-1 md:place-items-stretch  place-items-center">

                    {(() => {
                        let imageCards = [];
                        for (let i = 0; i < props.name.length; i++) {
                            imageCards.push(
                                <Imagecard
                                    key={i}
                                    name={props.name[i]}
                                    yr={props.yr[i]}
                                    url={props.url[i]}
                                />
                            );
                        }
                        return imageCards;
                    })()}
                </div>
            </div>
        </div>
    )
}

export default Template
