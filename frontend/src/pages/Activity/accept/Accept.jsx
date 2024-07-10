import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../../components/header/Header'
import AcceptList from './AcceptList'

function Accept() {
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
              <span className='activeTag' onClick={onClickAccept}>Accepted</span>
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
              <AcceptList/>
              <AcceptList/>
              <AcceptList/>
              <AcceptList/>
              <AcceptList/>
              <AcceptList/>
              <AcceptList/>
              <AcceptList/>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Accept