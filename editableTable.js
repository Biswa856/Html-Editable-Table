"use strict";
// import React from "React";
const e = React.createElement;

function EditableTable() {
    function setFormStateData(value, itemIndex, rowNumber) {
        const updatedObject = formData[rowNumber] ?? {};
        updatedObject[itemIndex] = value;

        const updatedData = formData;
        updatedData[rowNumber] = updatedObject;
        setFormData(updatedData);
    }

    const [data, setData] = React.useState([
        {
            title: "Onboarding Call",
        },
        {
            title: "Google Search Console Access",
        },
        {
            title: "Google Analytics Access",
        },
        {
            title: "Website Access",
        },
        {
            title: "Technical Audit",
        },
        {
            title: "Anchor Text and Symentic Analysis",
        },
        {
            title: "Competitor Analysis",
        },
        {
            title: "Anchor Text/URL Mapping",
        },
        {
            title: "Google Data Studio Report + Local Reporting Suite",
        },
        {
            title: "Site Level Optimization",
        },
        {
            title: "On Page Optimization",
        },
        {
            title: "Content Creation",
        },
        {
            title: "Content Publishing",
        },
        {
            title: "Premium Press Release",
        },
        {
            title: "Authority Niche Placements",
        },
        {
            title: "Review Management",
        },
        {
            title: "Index Links",
        },
        {
            title: "Video Recap",
        },
    ]);

    const [formData, setFormData] = React.useState({});

    return data.map((val, index) => {
        return e(
            "tr",
            { key: index },
            e("th", {}, val.title),
            e(
                "td",
                {},
                e("input", {
                    type: "text",
                    name: "col1",
                    onChange: (e) => {
                        setFormStateData(e.target.value, "col1", index);
                          console.log(formData) 
                    },
                })
            ),
            e(
                "td",
                {},
                e("input", {
                    type: "text",
                    name: "col2",
                    onChange: (e) => {
                        setFormStateData(e.target.value, "col2", index);
                          console.log(formData) 
                    },
                })
            ),
            e(
                "td",
                {},
                e("input", {
                    type: "text",
                    name: "col3",
                    onChange: (e) => {
                        setFormStateData(e.target.value, "col3", index);
                          console.log(formData) 
                    },
                })
            ),
            e(
                "td",
                {},
                e("input", {
                    type: "text",
                    name: "col4",
                    onChange: (e) => {
                        setFormStateData(e.target.value, "col4", index);
                          console.log(formData) 
                    },
                })
            ),
            e(
                "td",
                {},
                e("input", {
                    type: "text",
                    name: "col5",
                    onChange: (e) => {
                        setFormStateData(e.target.value, "col5", index); 
                        console.log(formData) 
                    },
                   
                    
                })
            ),

        // For Showing the table data in console log after clicking the save button and get the data is ready to post to the API
            // e(
            //     "td",
            //     {},
            //     e(
            //         "button",
            //         {
            //             type: "submit",
            //             onClick: (e) =>
            //                 formData[index]
            //                     ? console.log(`Row Number:- ${index + 1}`, formData[index])
            //                     : "",
            //         },
            //         "Save"
            //     )
            // )
        );
    });
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(e(EditableTable));