import React from 'react'
import Card from '../Components/Card';
import '../styles/CulturePage.css'
import Carausel from '../Components/Carausel';
import PieChart from '../Components/PieChart';
// import ImageSlider from '../Components/ImageSlider';


const CulturePage = () => {




  return (
    <div className='page-content'>

      <div className="page-heading">
        <h1>Goan Culture</h1>
      </div>

    <div className="carausel-container">
          <Carausel />
    </div>


      <div className="language-section">
        <div className="language-content" style={{overflow:"hidden"}}>
          <h1>Language :</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptas incidunt iusto quod laudantium commodi, tenetur, tempora suscipit aliquam nihil quidem placeat. Possimus delectus hic recusandae ipsum dignissimos dicta! Debitis! aerum commodi tempora pariatdicta sed dolore repellendus earum facere provident dolorem, quos tempora ipsa, ducimus recusandae odio necessitatibus tenetur ex. Nisi itaque ratione voluptate iure, aliquid <br />Voluptates dolorum illum soluta veritatis mollitia officia! Esse maxime laboriosam, quasi eum corporis fugit aut nam modi unde praesentium nulla accusamus quae consectetur nihil totam eius! Nulla aut, cum architecto ea, porro repellendus modi, suscipit magnam nam rem perspiciatis. Facere iste pariatur doloremque veritatis nesciunt quisquam modi blanditiis iusto, repellendus, in voluptate numuam. Id officia totam, eligendi rem suscipit veritatis fugit deserunt doloribus delectus ratione ipsam laborum.</p>
        </div>
        <div className="graph">
          <PieChart />
        </div>
      </div>


      <div className="content-container"  style={{height:"fit-content"}}>
        <div className="inner-content">
          <h1>Dance</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aliquam deleniti placeat est provident possimus sunt obcaecati reprehenderit, voluptatibus cum a veritatis illo architecto alias, maiores necessitatibus exercitationem dolores<br /> animi vitae iste aspernatur culpa, incidunt sint quibusdam. Beatae saepe tempora, obcaecati accusantium modi cupiditate molestias recusandae repellat expedita quis suscipit?<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iste architecto mollitia possimus omnis minus temporibus quod, sit quidem voluptatem dicta facilis sunt perferendis. Accusantium nemo accusamus adipisci excepturi natus!</p>
        </div>
        <div className='card-box' style={{gap:"25px"}}>
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
        </div>
      </div>


      <div className="content-container" style={{height:"fit-content"}}>
        <div className="inner-content">
          <h1>Food</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aliquam deleniti placeat est provident possimus sunt obcaecati reprehenderit, voluptatibus cum a veritatis illo architecto alias, maiores necessitatibus exercitationem dolores<br /> animi vitae iste aspernatur culpa, incidunt sint quibusdam. Beatae saepe tempora, obcaecati accusantium modi cupiditate molestias recusandae repellat expedita quis suscipit?<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iste architecto mollitia possimus omnis minus temporibus quod, sit quidem voluptatem dicta facilis sunt perferendis. Accusantium nemo accusamus adipisci excepturi natus!</p>
        </div>
        <div className='card-box' style={{gap:"25px"}}>
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
        </div>
      </div>


      <div className="content-container" style={{height:"fit-content"}}>
        <div className="inner-content">
          <h1>Festival</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis aliquam deleniti placeat est provident possimus sunt obcaecati reprehenderit, voluptatibus cum a veritatis illo architecto alias, maiores necessitatibus exercitationem dolores<br /> animi vitae iste aspernatur culpa, incidunt sint quibusdam. Beatae saepe tempora, obcaecati accusantium modi cupiditate molestias recusandae repellat expedita quis suscipit?<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iste architecto mollitia possimus omnis minus temporibus quod, sit quidem voluptatem dicta facilis sunt perferendis. Accusantium nemo accusamus adipisci excepturi natus!</p>
        </div>
        <div className='card-box' style={{gap:"25px"}}>
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
          <Card 
            title='card-title'

            imageUrl='https://images.unsplash.com/photo-1694222368062-86cf645eeb19?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

            body='  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto perspiciatis minima necessitatibus    veritatis perferendis, harum incidunt quae facere hic reiciendis laboriosam quisquam, expedita doloribus! Cum iusto   esse   eum reprehenderit!'
          />
        </div>
      </div>


    </div>

  )
}

export default CulturePage