function ContactUs(){
    return(
        <div className="container bg-warning" style={{marginTop:"10px"}}>
          
            <div className="row ">
            <center>  <h2 style={{margin:"10px"}}>ContactUs</h2></center> 
                    <div className="col-md-6"><img src=" https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." height={400} style={{marginTop:"40px",paddingBottom:"15px"}} />
                    
                    </div>
                    <div className="col-md-6  bg-">
                    <form action="" method="post" >
                    <div className="form-group" >

                        <input type="text" className="form-control " id="InputName" aria-describedby="emailHelp" placeholder="Your name" name="name" required style={{marginTop:"50px"}}/>
                    </div>
                    <div className="form-group">

                        <input type="email" className="form-control " id="InputEmail1" aria-describedby="emailHelp" placeholder="Your email" name="email" required style={{margin:"2px"}} />
                    </div>
                    <div className="form-group">

                        <input type="tel" id="phone" class="form-control " placeholder="123-45-678" pattern="[0-9]{10}" name="mobile" required  style={{margin:"2px"}}/><br />
                        <small className="form-text text-muted">We'll never share your phone nummber with anyone else.</small>

                    </div>
                    <div className="form-group">

                        <textarea type="text" className="form-control" id="InputMessage" placeholder="Your Message" name="description" row="6" style={{margin:"2px"}} ></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary "style={{margin:"5px"}} >Submit</button>
                    </div>
                </form>

                    </div>
            </div>
        </div> 
    )
}

export default ContactUs;