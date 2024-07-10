import React from 'react'

function RejectList() {
  return (
    <div>
          <div className="request-item">
                  <div className="user-photo">
                    <img src="" alt="" />
                  </div>
                    <div className="user-details">
                   
                     <div>
                        <p>Name: Akash</p>
                        <p>Profession: BCA</p>
                     </div>
                      <div>
                        <p>Age: 21</p>
                        <p>Qualification: IT</p>
                      </div>
                     <div>
                        <p>Caste: Ezhava</p>
                        <p>Religion: Hindu</p>
                     </div>
                    </div>
                    <div className="actions">
                      <button className="danger-btn">Reject</button>
                    </div>
                  </div>
    </div>
  )
}

export default RejectList