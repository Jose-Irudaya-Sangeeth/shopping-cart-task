import './App.css';
import { useState } from 'react';

function App() {
    let [cart,setCart] = useState(0);
    let [special1Selected,setspecial1Selected] = useState(false);
    let [sale1Selected,setsale1Selected] = useState(false);
    let [popular1Selected,setpopular1Selected] = useState(false);
    let [sale2Selected,setsale2Selected] = useState(false);
    let [special2Selected,setspecial2Selected] = useState(false);
    let [popular2Selected,setpopular2Selected] = useState(false);
    let [total,setTotal] = useState(0);


    function handleAddCartSpecial(item){
        setCart(cart+1)
        setspecial1Selected(prev=>!prev)
        setTotal(prev=>prev+item.price)
    }
    function handleRemoveCartSpecial(value){
        setCart(cart-1)
        setspecial1Selected(prev=>!prev)
        setTotal(prev=>prev-value)
    }

    function handleAddCartSale(item){
        setCart(cart+1)
        setsale1Selected(prev=>!prev)
        setTotal(prev=>prev+item.price)
    }

    function handleRemoveCartSale(value){
        setCart(cart-1)
        setsale1Selected(prev=>!prev)
        setTotal(prev=>prev-value)
    }

    function handleAddCartPopular(item){
        setCart(cart+1)
        setpopular1Selected(prev=>!prev)
        setTotal(prev=>prev+item.price)
    }

    function handleRemoveCartPopular(value){
        setCart(cart-1)
        setpopular1Selected(prev=>!prev)
        setTotal(prev=>prev-value)
    }

    function handleAddCartSale2(item){
        setCart(cart+1)
        setsale2Selected(prev=>!prev)
        setTotal(prev=>prev+item.price)
    }

    function handleRemoveCartSale2(value){
        setCart(cart-1)
        setsale2Selected(prev=>!prev)
        setTotal(prev=>prev-value)
    }

    function handleAddCartSpecial2(item){
        setCart(cart+1)
        setspecial2Selected(prev=>!prev)
        setTotal(prev=>prev+item.price)
    }
    function handleRemoveCartSpecial2(value){
        setCart(cart-1)
        setspecial2Selected(prev=>!prev)
        setTotal(prev=>prev-value)
    }

    function handleAddCartPopular2(item){
        setCart(cart+1)
        setpopular2Selected(prev=>!prev)
        setTotal(prev=>prev+item.price)
    }

    function handleRemoveCartPopular2(value){
        setCart(cart-1)
        setpopular2Selected(prev=>!prev)
        setTotal(prev=>prev-value)
    }

  return (
    <div className="App">
              
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                    </li>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit" style={{marginLeft:"5px"}}>
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
                        </button>
                    </form>
                    <div style={{marginLeft:"10px"}}>
                        <h5>price:${total}</h5>
                    </div>  
                </ul>
            </div>
        </div>
    </nav>

    <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Shop in style</h1>
                <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
        </div>
    </header>


    <div className="Container-fluid cart-cont">
    
        <div className="card h-100 mt-3 mb-3">
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                         <h5 className="fw-bolder">Fancy Product</h5>
                          <span>$40.00 - $80.00</span>       
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">  
                        <br/>              
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" >View Options</button></div>
                </div>
            </div>    

        <div className="card h-100 mt-3 mb-3">
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                         <h5 className="fw-bolder">Special Item</h5>
                         <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                          </div>
                          <span className="text-muted text-decoration-line-through">$20.00 </span>
                                $18.00
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {
                    special1Selected?
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCartSpecial(18)}>Remove From cart</button></div>:
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddCartSpecial({name:"Special Item",price:18})}>Add To Cart</button></div>
                    }
                </div>
            </div>    


        <div className="card h-100 mt-3 mb-3">
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                         <h5 className="fw-bolder">Sale Item</h5>
                          <span className="text-muted text-decoration-line-through">$50.00 </span>
                                $25.00
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <br/>
                    {
                    sale1Selected?
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCartSale(25)}>Remove From cart</button></div>:
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddCartSale({name:"Sale Item",price:25})}>Add To Cart</button></div>
                    }
                </div>
            </div>

        <div className="card h-100 mt-3 mb-3">
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                         <h5 className="fw-bolder">Popular Item</h5>
                         <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                          </div>
                          <span>$40.00</span>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {
                    popular1Selected?
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCartPopular(40)}>Remove From cart</button></div>:
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddCartPopular({name:"Popular Item",price:40})}>Add To Cart</button></div>
                    }
                </div>
            </div>

            
            <div className="card h-100 mt-3 mb-3">
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                         <h5 className="fw-bolder">Sale Item</h5>
                          <span className="text-muted text-decoration-line-through">$50.00 </span>
                                $25.00
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <br/>
                    {
                    sale2Selected?
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCartSale2(25)}>Remove From cart</button></div>:
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddCartSale2({name:"Sale Item",price:25})}>Add To Cart</button></div>
                    }
                </div>
            </div>

            <div className="card h-100 mt-3 mb-3">
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                         <h5 className="fw-bolder">Fancy Product</h5>
                          <span>$40.00 - $80.00</span>       
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">  
                        <br/>              
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" >View Options</button></div>
                </div>
            </div>

            
            <div className="card h-100 mt-3 mb-3">
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                         <h5 className="fw-bolder">Special Item</h5>
                         <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                          </div>
                          <span className="text-muted text-decoration-line-through">$20.00 </span>
                                $18.00
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {
                    special2Selected?
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCartSpecial2(18)}>Remove From cart</button></div>:
                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddCartSpecial2({name:"Special Item",price:18})}>Add To Cart</button></div>
                    }
                </div>
            </div>


            <div className="card h-100 mt-3 mb-3">
            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                         <h5 className="fw-bolder">Popular Item</h5>
                         <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                          </div>
                          <span>$40.00</span>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {
                    popular2Selected?
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleRemoveCartPopular2(40)}>Remove From cart</button></div>:
                        <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>handleAddCartPopular2({name:"Popular Item",price:40})}>Add To Cart</button></div>
                    }
                </div>
            </div>


    </div>   
       
    <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
    </footer>
       

    </div>
  );
}

export default App;
