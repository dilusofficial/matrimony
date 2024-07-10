import React, { useContext } from 'react'
import Header from '../../components/header/Header';
import { AuthContext } from '../../context/customHooks/AuthContext';
import './activity.css'
import RequestList from './RequestList';
import { useNavigate } from 'react-router-dom';

function Activity() {
  const navigate = useNavigate()
  const onClickRequest =()=>{
    navigate('/activities')
  }

  const onClickSent = ()=>{
    navigate('/sent')
  }

  const onClickAccept =()=>{
    navigate('/accept')
  }

  const onClickReject = ()=>{
    navigate('/reject')
  }

  const onClickChat=()=>{
    navigate('/chat')
  }
  return (
    <div>
      <Header />
      <div className='mainContainer'>
        <div className='subheaderMain'>
          <div className="subheader">
            <div className='subdiv'>
              <span className='activeTag' onClick={onClickRequest}>Request</span>
            </div>
            <div>
              <span onClick={onClickSent}>Sent</span>
            </div>
            <div>
              <span onClick={onClickAccept}>Accepted</span>
            </div>
            <div>
              <span onClick={onClickReject}>Reject</span>
            </div>
            <div>
              <span onClick={onClickChat}>Chat</span>
            </div>
          </div>
        </div>

        <div className="content-box">
          <div className='subContent-BoxContainer'>
            <div className='subContent-Box'>
              <RequestList />
              <RequestList />
              <RequestList />
              <RequestList />
              <RequestList />
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Activity