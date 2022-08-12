import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {

  return (
    <Layout home>
      <div className='home-img'>
        <Image alt="Fiona portrait" src="/images/Fiona-arms-crossed.jpg"  width={3700/3} height={2954/3}  /> 
     </div>
     <div className='home-qoute sm:hidden'>
      <p className='italic text-slate-900'>“impressive technique and elegant musicianship”.</p>
      <p className='non-italic self-end text-slate-900'>- New York Times</p>
     </div>
    </Layout>
  )
}
