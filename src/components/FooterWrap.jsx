import EarlyAccess from './EarlyAccess'
import FooterInnerWrap from './FooterInnerWrap'

function FooterWrap() {
  return (
    <div className='flex flex-col bg-dark-blue-footer w-full mt-[21.06rem]'>
        <EarlyAccess />
        <FooterInnerWrap />
    </div>
  )
}

export default FooterWrap