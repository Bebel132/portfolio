import React from 'react'
import './Contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from "@mui/icons-material/LinkedIn"

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
                <li title="emanuel2005batista@gmail.com" onClick={() => navigator.clipboard.writeText("emanuel2005batista@gmail.com").then(() => alert('email copiado! ✅'))}>
                    <EmailIcon className='icon' fontSize='large'/>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/emanuel-ferreira-8170a1245/" target='_blank'>
                        <LinkedInIcon className='icon' fontSize='large'/>
                    </a>
                </li>
            </ul>
        </div>
    </section>
  )
}
