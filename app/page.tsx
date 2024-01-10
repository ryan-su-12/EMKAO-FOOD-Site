import Image from 'next/image'
import Link from 'next/link'
import Footer from './components/Footer'
import EMKAO from "./assets/EMKAO.png"




import './global.scss';


export default function Home() {
  return (
    <main>
      <div className="main-header">
        <Image
         src={EMKAO}
         width={300}
         height={75}
         alt="Picture of the author"

        />
      </div>
      <div className="main-container">
        <div>
          <h1>Premium Quality Organic Coca Products</h1>
          <p>A family farm, a love for chocolate, and a passion for sustainability.</p>
        </div>
      <div className="homepage">
        {/*use this to create the consumer vs business buttons */}
        <div className="option-container">
          
              
        <Link href="/Business">
          <div>Are you a business?</div>
          <div className="button">
            Click Here
          </div>
        </Link>
        </div>



        <div className="option-container">
          <Link href="/pages">
          <div>Are you a consumer?</div>
          
          <div className="button">
            Click Here
          </div>
        </Link>

        
         
        </div>
      </div>
      </div>




      {/*<Footer />*/}
    
     
     

     
    </main>
  )
}
