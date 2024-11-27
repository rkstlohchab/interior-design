"use client";

import React from "react";

const GoogleForm = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf_JA1CRgLJJ3dqAuWtQNQqoWt-d33GbVO6pIabn_T2nZyXwQ/viewform?embedded=true"
                width="640"
                height="821"
                className="border-none"
                title="Google Form"
            >
                Loading…
            </iframe>
        </div>
    );
};

export default GoogleForm;
