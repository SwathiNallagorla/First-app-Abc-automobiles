import {Component} from 'react';


class About extends Component{
    render(){
      
        return (
            <div data-testid="about-content">
             <h2>About Us</h2> 

               <p style={{textAlign:"justify"}}>A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo.Cars have controls for driving, parking, passenger comfort, and a variety of lamps. Over the decades, additional features and controls have been added to vehicles, making them progressively more complex. These include rear-reversing cameras, air conditioning, navigation systems, and in-car entertainment. Most cars in use in the early 2020s are propelled by an internal combustion engine, fueled by the combustion of fossil fuels. Electric cars, which were invented early in the history of the car, became commercially available in the 2000s and are predicted to cost less to buy than petrol-driven cars before 2025.The costs to society include maintaining roads, land-use, road congestion, air pollution, noise pollution, public health, and disposing of the vehicle at the end of its life. Traffic collisions are the largest cause of injury-related deaths worldwide. Personal benefits include on-demand transportation, mobility, independence, and convenience.</p>
                <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Vehicles</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact US</button>
        </div>
      </div>
    </div>
  </div>






  <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" height={300} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}
export default About;

























// import {Component} from 'react';

// import car from './images/car.jpg';
// class About extends Component(){
//     render(){

//     return (
//     <>
//         <div className='container' data-testid="about-content">
            // <div className='row'>
            //     <h1>About Us</h1>
            //     <p style={{textAlign:"justify"}}>A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. The Toyota Corolla, which has been in production since 1966, is the best-selling series of automobile in history.A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. The Toyota Corolla, which has been in production since 1966, is the best-selling series of automobile in history.A car, or an automobile, is a motor vehicle with wheels. </p>                
                
            //     <div className='col-md-4'>
            //     <div style={{padding:'10px',margin:'10px'}}>    
            //         <img src={car} alt="" width={300} height={300}/>
            //     </div>
            //     </div>
            //     <div className='col-md-4'>
            //     <div style={{padding:'10px',margin:'10px'}}>    
            //         <img src={car} alt="" width={300} height={300}/>
            //     </div>
            //     </div>
            //     <div className='col-md-4'>
            //     <div style={{padding:'10px',margin:'10px'}}>    
            //         <img src={car} alt="" width={300} height={300}/>
            //     </div>
            //     </div>

            // </div>
            // <div className='row'>
            // <div className='col-md-4'>
            //         <div style={{padding:'10px',margin:'10px'}}>
            //         <div className="card" >
            //             <div className="card-body" >
            //                 <h5 className="card-title">Bently</h5>
            //                 <h6 className="card-subtitle mb-2 text-body-secondary">Car Brand</h6>
            //                 <p className="card-text">A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. .</p>
            //             </div>
            //         </div>
            //         </div>
            //     </div>
            //     <div className='col-md-4'>
            //         <div style={{padding:'10px',margin:'10px'}}>
            //         <div className="card" >
            //             <div className="card-body" >
            //                 <h5 className="card-title">Dodge</h5>
            //                 <h6 className="card-subtitle mb-2 text-body-secondary">car Brand</h6>
            //                 <p className="card-text">A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. </p>                           
            //             </div>
            //         </div>
            //         </div>
            //     </div>
            //     <div className='col-md-4'>
            //         <div style={{padding:'10px',margin:'10px'}}>
            //         <div className="card" >
            //             <div className="card-body" >
            //                 <h5 className="card-title">Audi</h5>
            //                 <h6 className="card-subtitle mb-2 text-body-secondary">car Brand</h6>
            //                 <p className="card-text">A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people over cargo. </p>                          
            //             </div>
            //         </div>
            //         </div>
            //     </div>
                
            // </div>
//         </div>
//     </>
      

//     )
//   }

// }
// export default About;

{/* <button type="button" onClick={() => setCount(count + 1)} className="btn btn-danger" style={{marginTop:"10px"}}>+</button>
               <button type="button" onClick={() => setCount(count - 1)} className="btn btn-primary" style={{marginTop:"10px"}}>-</button> */}
