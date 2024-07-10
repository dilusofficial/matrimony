import React from 'react'
import Header from '../../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import RejectList from './RejectList'

function Reject() {
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
        <Header/>
        <div className='mainContainer'>
        <div className='subheaderMain'>
          <div className="subheader">
            <div className='subdiv'>
              <span onClick={onClickRequest}>Request</span>
            </div>
            <div>
              <span onClick={onClickSent}>Sent</span>
            </div>
            
            <div>
              <span onClick={onClickAccept}>Accepted</span>
            </div>
            <div>
              <span className='activeTag' onClick={onClickReject}>Reject</span>
            </div>
            <div>
              <span onClick={onClickChat}>Chat</span>
            </div>
          </div>
        </div>

        <div className="content-box">
          <div className='subContent-BoxContainer'>
            <div className='subContent-Box'>
              <RejectList/>
              <RejectList/>
              <RejectList/>
              <RejectList/>
              <RejectList/>
              <RejectList/>
              <RejectList/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Reject