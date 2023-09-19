import React, { useEffect } from 'react'

const ModalContent = (props) => {
    const { value, hideModal } = props
    if (value === "frontend") {
        return (
            <>
                <div className="services__modal  " >

                    <div className="serviceModalContent overlay">
                        <div className="modalHeading"><h4 className='highlightHeading'>Frontend Developer</h4>   <span onClick={hideModal}  ><i class='bx bx-x modalClose' ></i></span></div>
                        <div className="modalContent">
                            <ul>
                                <li><i class='bx bx-badge-check' ></i>Creating reusable and efficient React components.</li>
                                <li><i class='bx bx-badge-check' ></i>Translating UI/UX designs into functional React components.</li>
                                <li><i class='bx bx-badge-check' ></i>Implementing state management solutions like Redux or React Context API.</li>
                                <li><i class='bx bx-badge-check' ></i>Setting up client-side routing using React Router.</li>
                                <li><i class='bx bx-badge-check' ></i>Integrating with backend services through API requests.</li>
                                <li><i class='bx bx-badge-check' ></i>Optimizing performance through code splitting and lazy loading.</li>
                                <li><i class='bx bx-badge-check' ></i>Ensuring responsiveness across devices and screen sizes.</li>
                                <li><i class='bx bx-badge-check' ></i>Implementing accessibility best practices for all users.</li>
                                <li><i class='bx bx-badge-check' ></i>Writing unit and integration tests for code reliability.</li>
                                <li><i class='bx bx-badge-check' ></i>Debugging and troubleshooting frontend issues.</li>
                                <li><i class='bx bx-badge-check' ></i>Using Git for version control and collaboration.</li>
                                <li><i class='bx bx-badge-check' ></i>Setting up CI/CD pipelines for automation.</li>
                                <li><i class='bx bx-badge-check' ></i>Profiling and optimizing application performance.</li>
                                <li><i class='bx bx-badge-check' ></i>Implementing security measures to protect against vulnerabilities.</li>
                                <li><i class='bx bx-badge-check' ></i>Creating comprehensive documentation for the codebase.</li>
                                <li><i class='bx bx-badge-check' ></i>Collaborating with backend developers and designers.</li>
                                <li><i class='bx bx-badge-check' ></i>Participating in code reviews for code quality.</li>
                                <li><i class='bx bx-badge-check' ></i>Monitoring application performance in production.</li>
                                <li><i class='bx bx-badge-check' ></i>Handling upgrades and ongoing maintenance.</li>
                                <li><i class='bx bx-badge-check' ></i>Providing responsive support for users and addres</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    if (value === "ui") {
        return (
            <>
                <div className="services__modal  " >

                    <div className="serviceModalContent overlay">
                        <div className="modalHeading"><h4 className='highlightHeading'>Ui/Ux Designer</h4>   <span onClick={hideModal}  ><i class='bx bx-x modalClose' ></i></span></div>
                        <div className="modalContent">
                            <ul>
                                <li><i class='bx bx-badge-check' ></i>Conducting user research to understand the target audience.</li>
                                <li><i class='bx bx-badge-check' ></i>Creating wireframes for basic interface structure.</li>
                                <li><i class='bx bx-badge-check' ></i>Building interactive prototypes for testing and validation.</li>
                                <li><i class='bx bx-badge-check' ></i>Designing the visual elements of the user interface (UI).</li>
                                <li><i class='bx bx-badge-check' ></i>Focusing on overall user experience (UX), including navigation and accessibility.</li>
                                <li><i class='bx bx-badge-check' ></i>Structuring information for user-friendly content organization.</li>
                                <li><i class='bx bx-badge-check' ></i>Usability testing to gather feedback and improve UI/UX.</li>
                                <li><i class='bx bx-badge-check' ></i>Defining user interactions, animations, and gestures.</li>
                                <li><i class='bx bx-badge-check' ></i>Ensuring responsive design for various devices.</li>
                                <li><i class='bx bx-badge-check' ></i>Implementing accessibility standards (e.g., WCAG).</li>
                                <li><i class='bx bx-badge-check' ></i>Crafting a visually appealing and consistent design language.</li>
                                <li><i class='bx bx-badge-check' ></i>Selecting and styling fonts for readability.</li>
                                <li><i class='bx bx-badge-check' ></i>Choosing appropriate color schemes for mood and branding.</li>
                                <li><i class='bx bx-badge-check' ></i>Gathering user feedback and making data-driven improvements.</li>
                                <li><i class='bx bx-badge-check' ></i>Collaborating with cross-functional teams and stakeholders.</li>
                                <li><i class='bx bx-badge-check' ></i>Creating and maintaining design systems for consistency.</li>
                                <li><i class='bx bx-badge-check' ></i>Developing UI kits or design libraries for reuse.</li>
                                <li><i class='bx bx-badge-check' ></i>Communicating design concepts to non-design team members.</li>
                                <li><i class='bx bx-badge-check' ></i>Incorporating feedback and iterating on designs.</li>
                                <li><i class='bx bx-badge-check' ></i>Staying updated with design trends and technologies.</li>
                                <li><i class='bx bx-badge-check' ></i>Documenting designs for developers.</li>
                                <li><i class='bx bx-badge-check' ></i>Ensuring brand consistency in design.</li>
                                <li><i class='bx bx-badge-check' ></i>Conducting A/B tests for better engagement.</li>
                                <li><i class='bx bx-badge-check' ></i>Prioritizing user needs and preferences.</li>
                                <li><i class='bx bx-badge-check' ></i>Identifying design challenges and proposing solutions.</li> </ul>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return (
        <>
            <div className="services__modal  " >

                <div className="serviceModalContent overlay">
                    <div className="modalHeading"><h4 className='highlightHeading'>Backend Developer</h4>   <span onClick={hideModal}  ><i class='bx bx-x modalClose' ></i></span></div>
                    <div className="modalContent">
                        <ul>
                            <li><i class='bx bx-badge-check' ></i>Backend Development using Node.js, Express.js, or similar frameworks.</li>
                            <li><i class='bx bx-badge-check' ></i>Implementing user authentication and authorization.</li>
                            <li><i class='bx bx-badge-check' ></i>Implementing state management solutions like Redux or React Context API.</li>
                            <li><i class='bx bx-badge-check' ></i>Creating API documentation for frontend integration.</li>
                            <li><i class='bx bx-badge-check' ></i>Integrating with backend services through API requests.</li>
                            <li><i class='bx bx-badge-check' ></i>Handling error management and providing error messages.</li>
                            <li><i class='bx bx-badge-check' ></i>Collaborating with frontend developers.</li>
                            <li><i class='bx bx-badge-check' ></i>Continuously learning and improving skills.</li>
                            <li><i class='bx bx-badge-check' ></i>Debugging and troubleshooting frontend issues.</li>
                            <li><i class='bx bx-badge-check' ></i>Using Git for version control and collaboration.</li>
                            <li><i class='bx bx-badge-check' ></i>Effective communication within the development team.</li>
                            <li><i class='bx bx-badge-check' ></i>Profiling and optimizing application performance.</li>
                            <li><i class='bx bx-badge-check' ></i>Implementing security measures to protect against vulnerabilities.</li>
                            <li><i class='bx bx-badge-check' ></i>Creating comprehensive documentation for the codebase.</li>
                            <li><i class='bx bx-badge-check' ></i>Collaborating with backend developers and designers.</li>
                            <li><i class='bx bx-badge-check' ></i>Participating in code reviews for code quality.</li>
                            <li><i class='bx bx-badge-check' ></i>Providing responsive support for users.</li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ModalContent
