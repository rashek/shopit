
const Navbar = () => (
    <nav class="navbar navbar-expand  bg-light mb-1">
      <div class="container">
        <div class="row">
      
        <img src="static/Icons/banner.png" alt="my image" />
  
  <form class="form-inline ">
      <div class="input-group">
        <div class="input-group-prepend">
          <button class="btn  btn-outline-secondary" type="button">Item</button>
        </div>
        <input type="text" class="form-control" placeholder="" />
      </div>
      
      <button class="btn btn-outline-dark ml-2 px-4" type="button">
        <i class="fa fa-search"></i>
      </button>
    </form>
        </div>
  
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#"><button class="btn btn-outline-dark " type="button"> Login </button></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><button class="btn btn-outline-dark " type="button"> Signup </button></a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#"><button class="btn btn-outline-dark " type="button"> Sell </button></a>
            </li>
          </ul>
  
          
        </div>
      </div>
    </nav>
  );
  
  export default Navbar;