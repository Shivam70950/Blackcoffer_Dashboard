import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import './style.css'
import logo from '../../assets/logo2.png'
import Menusection from '../menuSection/Menusection'
import { AiOutlineMail } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import { SlCalender } from 'react-icons/sl'
import { TbFileInvoice } from 'react-icons/tb'
import { AiOutlineUser } from 'react-icons/ai'

import { TbClipboardTypography } from 'react-icons/tb'
import { AiOutlineEye } from 'react-icons/ai'
import { RxCardStack } from 'react-icons/rx'
import { RxComponentInstance } from 'react-icons/rx'

const Left = () => {
  const apps_arr = [
    [<AiOutlineMail />, 'Email'],
    [<BsChatDots />, 'Chat'],
    [<SlCalender />, 'Calender'],
    [<TbFileInvoice />, 'Invoice'],
    [<AiOutlineUser />, 'User'],
  ]
  const UI_arr = [
    [<TbClipboardTypography />, 'Typography'],
    [<AiOutlineEye />, 'Icon'],
    [<RxCardStack />, 'Cards'],
    [<RxComponentInstance />, 'Components'],
  ]
  return (

    <div className='left_section'>
      <div className="left_section_logo">
        <img src={logo} alt="" />
      </div>

      <div className="left_section_header">
        <RxDashboard />
        <span >Dashboard</span>
        <p><i className="arrow right" ></i></p>
      </div>
      <Menusection heading={'APPS & PAGES'} arr={apps_arr} />
      <Menusection heading={'UI ELEMENTS'} arr={UI_arr} />
      <Menusection heading={'UI ELEMENTS'} arr={UI_arr} />
    </div>
  )
}

export default Left
