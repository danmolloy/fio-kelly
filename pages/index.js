import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {

  return (
    <Layout home>
      <div className='home-img'>
        <Image src="/images/Fiona-arms-crossed.jpg"  width={3700/2} height={2954/2} /* layout="fill" objectFit='cover' *//> 
     </div>

    </Layout>
  )
}
