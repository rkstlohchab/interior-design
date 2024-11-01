import React from 'react';
import Image from 'next/image';

const logos = [
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
    // Add more logos as needed
];

const InfiniteSlider: React.FC = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap">
            <div className="flex animate-scroll">
                {logos.map((logo, index) => (
                    <div className="inline-block" key={index}>
                        <Image src={logo} alt={`Logo ${index + 1}`} width={20} height={20}/>
                    </div>
                ))}
                {logos.map((logo, index) => (
                    <div className="inline-block" key={index + logos.length}>
                        <Image src={logo} alt={`Logo ${index + 1}`} width={20} height={20}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;
