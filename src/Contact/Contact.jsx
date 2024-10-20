import React from 'react'
import './Contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Contact = () => {
  return (
    <section>
        <div className="contact">
            <ul>
                <li>
                    <a href="https://github.com/Bebel132" about='_blank'>
                        <GitHubIcon className='icon' fontSize='large'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/bebenio132/" about='_blank'>
                        <InstagramIcon className='icon' fontSize='large'/>
                    </a>
                </li>
            </ul>
        </div>
    </section>
  )
}
