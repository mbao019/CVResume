import React from 'react'
import '../App.css'

import LinearProgress from '@mui/material/LinearProgress';

function SchoolProjects() {

    return (

        <div className='projectsContainer'>


            // SPLITTERS?
            // DIVIDERS?


            <h1>School Projects</h1>

            <h2>Covid Database</h2>
            <p>
                <ul>
                    <li>Designed a star schema based on the data gathered to create a data warehouse by identifying 2 fact tables and 8 dimension tables with its appropriate attributes</li>
                    <li>Developed a web application that utilizes Azure cloud services, such as serverless computing to portray the number of covid cases in Canada in which data can be sorted</li>
                    <li>Implemented a pipeline to make it automated so that it can continually obtain updated data</li>
                    <li>Presented the database using PowerBI as a visualization of the covid statistics that allows the data to be filtered by date, province, age range, gender, recovered, and deaths</li>
                </ul>
            </p>

            <h2>Covid Database</h2>
            <p>
                <ul>
                    <li>Designed a star schema based on the data gathered to create a data warehouse by identifying 2 fact tables and 8 dimension tables with its appropriate attributes</li>
                    <li>Developed a web application that utilizes Azure cloud services, such as serverless computing to portray the number of covid cases in Canada in which data can be sorted</li>
                    <li>Implemented a pipeline to make it automated so that it can continually obtain updated data</li>
                    <li>Presented the database using PowerBI as a visualization of the covid statistics that allows the data to be filtered by date, province, age range, gender, recovered, and deaths</li>
                </ul>
            </p>

            <h2>System Analysis</h2>
            <p>
                <ul>
                    <li>Created a Team Configuration and Management Document, Project Charter, Project Scope, and Problem Opportunity Statement that outlines each member’s role, project definition, problem, objectives, and constraints</li>
                    <li>Tooked on the role as the Project Manager, duties include developing a project plan, managing deliverables, led and manage the project team, established project schedule, and assigned tasks to project team members</li>
                    <li>Created a Use Case Diagram to identify the functional requirements, features, and interactions between the user and the system </li>
                    <li>Conducted an interview with a stakeholder to gather requirements about their system regarding acquisition of eBook licenses and how they are being stored and tracked in their database, and what the stakeholder’s desirable solutions may be</li>
                    <li>Developed Use Case Narratives to identify opportunities for improvement of the current system</li>
                    <li>Conducted a feasibility analysis by assessing the 3 alternative solutions based on the findings and requirements gathered on their operational, technical, and economic feasibility to provide a recommendation to the stakeholder</li>
                </ul>
            </p>

            <h2>Avenger Collection</h2>
            <p>
                <ul>
                    <li>Created different programs that utilizes data structures, such as arrays, linked lists, binary search trees, and hash tables, that can read an input file, and sorts the Avengers mentioned into different lists according to the order of when they were mentioned, alphabetically, and which Avenger was most favorable and least favorable depending on its frequency</li>
                    <li>Developed comprehensive knowledge on object - oriented design (OOD) when creating classes that involves abstraction, encapsulation, and inheritance</li>
                    <li>Ability to successfully identify the problem and breaking it down into smaller incremental tasks with a deadline to maintain continuous progress towards the target completion date</li>
                </ul>
            </p>

            <LinearProgress color="success" />

        </div>

    )
}

export default SchoolProjects