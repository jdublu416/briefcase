import React, { Fragment } from 'react';
// import { Card } from 'materialize-css';

const DashboardList = () => {
  return (
    <Fragment>
      
        <div className='row'>
          <div className='col s12 m6'>
            <div className='card blue-grey darken-1'>
              <div className='card-content white-text'>
                <span className='card-title'>Job Title</span>
                <p>
                  I am a very simple card. I will contain information about the
                  latest jobs
                </p>
              </div>
              <div className='card-action'>
                <a href='#'>Add Note</a>
                <a href='#'>Edit Job</a>
              </div>
            </div>
          </div>
        </div>
     
    </Fragment>
  );
};

export default DashboardList;
