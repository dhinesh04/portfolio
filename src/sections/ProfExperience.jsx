import React from 'react';
import "../App.css";
function ProfExperience(){
    return (
        <div className='heading'>
            <h1>
            Professional Experience
            </h1>
            <div className='subheading'>
                <h2>Software Engineer Intern at Nference | July 2022 - June 2024 </h2>
                <ul>
                    <li> Contributed to the Knowledge Graph team and was responsible for failure statistics formulation for the
                    healthcare data which improvised and reduced redundancy of the current data using Python </li>
                    <li> Maintained and solved multiple infrastructure issues in the Crawling Infrastructure Service of the company
                    which was hosted on Kubernetes </li>
                    <li> Worked on crawling and integrating cellXgene, a single-cell data repository for advanced biomedical
                    research to the existing Nferx platform.</li>
                    <li> Implemented an automated solution for the Unstructured De-IDentification pipeline for Academic Medical
                    Centers Personal Information Healthcare database for the NSights platform </li>
                </ul>
                <p className='skills'>Skills: Python, Go, Flask, SQL, MongoDB, ArangoDB, Docker, Kubernetes, Bash, Git, GCP </p>
            </div>
        </div>
    )
}

export default ProfExperience;