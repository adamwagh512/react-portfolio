import React from 'react';
import '../../styles/Resumestyle.css'
// import Resume from '../../Downloadable/resume.pdf'


export default function Resume() {
  return (
    <div className='resume'>
      <h1>Resume</h1>
        <h2>Education</h2>
          <h4>University of Texas at Austin (Jun 2022 - Sep 2022)</h4>
            <p>Full-Stack Developer Bootcamp</p>
          <h4>Austin Community College (Jan 2015 - July 2017)</h4>
            <p>Advanced EMT Certification</p>
            <p>A.A.S. in Emergency Medical Services</p>
          <h4>Training Division(Jun 2014 - Dec 2014)</h4>
            <p>EMT Basic Course</p>
          <h4>Kilgore College (Jun 2014 - Sept 2014)</h4>
            <p>Recruit Fire Academy</p>
          <h4>Concordia University (Jan 2009 - Dec 2010)</h4>
            <p>Bachelor of Arts Degree: Business and Psychology</p>
          <h4>Tarleton State University (Aug 2005 - Dec 2008)</h4>
            <p>Major: Criminal Justice</p>
        <h2>Professinal Accomplishments</h2>
          <h4>Methodist Stone Oak Emergency Room (Mar 2022 - Jun 2022)</h4>
            <h5>Advanced Parctice Paramedic</h5>
              <p>Obtained IV access and administered medications to incoming patients </p>
              <p>Assisted physicians and nursing staff in performing advanced procedures</p>
              <p>Responded to cardiac arrests throughout the hospital as part of the rapid response team</p>
          <h4> San Marcos Hays County EMS (Jan 2019 - Mar 2022)</h4>
            <h5>Lead Paramedic</h5>
              <p>Performed daily inventory and truck check</p>
              <p>Provided ALS capabilities on both emergency and transportation calls for service</p>
              <p>Coordinated with other first responder agencies at emergency scenes</p>
              <p>Awarded the Lifesaver Award by San Marcos Police Dept. </p>
          <h4> Acadian Ambulance Service (Sep 2017 - Mar 2019)</h4>
            <h5>Lead Paramedic</h5>
              <p>Performed daily inventory and truck check</p>
              <p>Provided ALS capabilities on both emergency and transportation calls for service</p>
              <p>Coordinated with other first responder agencies at emergency scenes</p>
          <h4>LifeStart Training and Consulting (Feb 2016 -Feb 2018)</h4>
            <h5>Instructor</h5>
              <p>Trained students to provide first aid and CPR</p>
              <p>Tested and certified students according to AHA guidelines</p>
              <p>Assisted with administrative duties</p>
          <h4>Captial Medical Service (Mar 2015 – Jan 2018)</h4>
            <h5>Medic</h5>
              <p>Coordinated with event staff and first responders to ensure prompt and effective incident management</p>
              <p>Provided medical attention to sick and injured patients</p>
              <p>Reported all patient contact activity to stakeholders in accordance with company/venue policy</p>
              <a href="../../Downloadable/resume.pdf" download><button className='btn' type="button">Download My Resume!</button></a>
    </div>
  );
}