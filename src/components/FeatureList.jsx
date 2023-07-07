import React from 'react'
import FeatureBox from './FeatureBox'
import AnywhereIcon from '../assets/images/icon-access-anywhere.svg'
import SecurityIcon from '../assets/images/icon-security.svg'
import CollaborationIcon from '../assets/images/icon-collaboration.svg'
import AnyFileIcon from '../assets/images/icon-any-file.svg'
function FeatureList() {
    const features = [
        {   id: 1,
            image: AnywhereIcon,
            title: 'Access your files, anywhere',
            description: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
        },
        {
            id: 2,
            image: SecurityIcon,
            title: 'Security you can trust',
            description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
        },
        {
            id: 3,
            image: CollaborationIcon,
            title: 'Real-time collaboration',
            description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
        },
        {
            id: 4,
            image: AnyFileIcon,
            title: 'Store any type of file',
            description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        },
    ]
  return (
    
    <div className=' mx-[20px] lg:mx-[17.5rem] mt-[7.5rem] mb-[10rem]'>
        <FeatureBox features={features} />
    </div>
  )
}

export default FeatureList