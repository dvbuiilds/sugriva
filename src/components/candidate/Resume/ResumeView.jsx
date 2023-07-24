import React from "react";

const ResumeView = (props) => {
    const { pdf } = props;

    return (
        <>
            <object
            data={pdf}
            type="application/pdf"
            width="50%"
            style={{ height: '50vh' }}
            aria-label="This object displays an PDF file"
            />
        </>
    );
};

export default ResumeView;