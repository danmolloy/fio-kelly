import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {

  return (
    <Layout home>
      <div className='home-img'>
        <Image alt="Fiona portrait" src="/images/Fiona-arms-crossed.jpg"  width={3700/2} height={2954/2} /* layout="fill" objectFit='cover' *//> 
     </div>
     <div className='home-qoute'>
      <p>“impressive technique and elegant musicianship”.</p>
      <p>- New York Times</p>
     </div>
    </Layout>
  )
}
