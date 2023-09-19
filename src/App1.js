import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function App1() {

  const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

  const toggler = () => {
    if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
    }
    else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  }

  const sideToggle = () => {
    if (style === 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion') {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
    }
    else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  }
  return (
    <div>
        <div id="page-top">

          {/* <!-- Page Wrapper --> */}
          <div id="wrapper">

            {/* <!-- Sidebar --> */}
            <ul className={style} id="accordionSidebar">

              {/* <!-- Sidebar - Brand --> */}
              <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                  <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
              </Link>

              {/* <!-- Divider --> */}
              <hr className="sidebar-divider my-0" />

              {/* <!-- Nav Item - Dashboard --> */}
              <li className="nav-item active">
                <Link className="nav-link" to='/'>
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </Link>
              </li>

              {/* <!-- Divider --> */}
              <hr className="sidebar-divider" />

              {/* <!-- Heading --> */}
              <div className="sidebar-heading">
                Interface
              </div>

              {/* <!-- Nav Item - Pages Collapse Menu --> */}
              <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                  aria-expanded="true" aria-controls="collapseTwo">
                  <i className="fas fa-fw fa-cog"></i>
                  <span>Components</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Components:</h6>
                    <Link className="collapse-item" to="Buttons">Buttons</Link>
                    <Link className="collapse-item" to="cards">Cards</Link>
                  </div>
                </div>
              </li>

              {/* <!-- Nav Item - Utilities Collapse Menu --> */}
              <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseUtilities"
                  aria-expanded="true" aria-controls="collapseUtilities">
                  <i className="fas fa-fw fa-wrench"></i>
                  <span>Utilities</span>
                </Link>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Custom Utilities:</h6>
                    <Link className="collapse-item" to="Colors">Colors</Link>
                    <Link className="collapse-item" to="Borders">Borders</Link>
                    <Link className="collapse-item" to="Animations">Animations</Link>
                    <Link className="collapse-item" to="Others">Other</Link>
                  </div>
                </div>
              </li>

              {/* <!-- Divider --> */}
              <hr className="sidebar-divider" />

              {/* <!-- Heading --> */}
              <div className="sidebar-heading">
                Addons
              </div>

              {/* <!-- Nav Item - Pages Collapse Menu --> */}
              <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages"
                  aria-expanded="true" aria-controls="collapsePages">
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Pages</span>
                </Link>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <Link className="collapse-item" to="login">Login</Link>
                    <Link className="collapse-item" to="register">Register</Link>
                    <Link className="collapse-item" to="forgot-password">Forgot Password</Link>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <Link className="collapse-item" to="404 Page">404 Page</Link>
                    <Link className="collapse-item" to="blank">Blank Page</Link>
                  </div>
                </div>
              </li>

              {/* <!-- Nav Item - Charts --> */}
              <li className="nav-item">
                <Link className="nav-link" to="Charts">{/*href="/Charts"*/}
                  <i className="fas fa-fw fa-chart-area"></i>
                  <span>Charts</span></Link>
              </li>

              {/* <!-- Nav Item - Tables --> */}
              <li className="nav-item">
                <Link className="nav-link" to="tables">
                  <i className="fas fa-fw fa-table"></i>
                  <span>Tables</span></Link>
              </li>

              {/* <!-- Divider --> */}
              <hr className="sidebar-divider d-none d-md-block" />

              {/* <!-- Sidebar Toggler (Sidebar) --> */}
              <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" onClick={toggler} id="sidebarToggle"></button>
              </div>

              {/* <!-- Sidebar Message --> */}
              <div className="sidebar-card d-none d-lg-flex">
                <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..." />
                <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
              </div>

            </ul>
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

              {/* <!-- Main Content --> */}
              <div id="content">

                {/* <!-- Topbar --> */}
                <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                  {/* <!-- Sidebar Toggle (Topbar) --> */}
                  <button id="sidebarToggleTop" onClick={sideToggle} className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                  </button>

                  {/* <!-- Topbar Search --> */}
                  <form
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                      <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                        aria-label="Search" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* <!-- Topbar Navbar --> */}
                  <ul className="navbar-nav ml-auto">

                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                      <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-search fa-fw"></i>
                      </a>
                      {/* <!-- Dropdown - Messages --> */}
                      <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                          <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small"
                              placeholder="Search for..." aria-label="Search"
                              aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                <i className="fas fa-search fa-sm"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>

                    {/* <!-- Nav Item - Alerts --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                      <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw"></i>
                        {/* <!-- Counter - Alerts --> */}
                        <span className="badge badge-danger badge-counter">3+</span>
                      </a>
                      {/* <!-- Dropdown - Alerts --> */}
                      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="alertsDropdown">
                        <h6 className="dropdown-header">
                          Alerts Center
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="mr-3">
                            <div className="icon-circle bg-primary">
                              <i className="fas fa-file-alt text-white"></i>
                            </div>
                          </div>
                          <div>
                            <div className="small text-gray-500">December 12, 2019</div>
                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                          </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="mr-3">
                            <div className="icon-circle bg-success">
                              <i className="fas fa-donate text-white"></i>
                            </div>
                          </div>
                          <div>
                            <div className="small text-gray-500">December 7, 2019</div>
                            $290.29 has been deposited into your account!
                          </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="mr-3">
                            <div className="icon-circle bg-warning">
                              <i className="fas fa-exclamation-triangle text-white"></i>
                            </div>
                          </div>
                          <div>
                            <div className="small text-gray-500">December 2, 2019</div>
                            Spending Alert: We've noticed unusually high spending for your account.
                          </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                      </div>
                    </li>

                    {/* <!-- Nav Item - Messages --> */}
                    <li className="nav-item dropdown no-arrow mx-1">
                      <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw"></i>
                        {/* <!-- Counter - Messages --> */}
                        <span className="badge badge-danger badge-counter">7</span>
                      </a>
                      {/* <!-- Dropdown - Messages --> */}
                      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="messagesDropdown">
                        <h6 className="dropdown-header">
                          Message Center
                        </h6>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_1.svg"
                              alt="..." />
                            <div className="status-indicator bg-success"></div>
                          </div>
                          <div className="font-weight-bold">
                            <div className="text-truncate">Hi there! I am wondering if you can help me with a
                              problem I've been having.</div>
                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                          </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_2.svg"
                              alt="..." />
                            <div className="status-indicator"></div>
                          </div>
                          <div>
                            <div className="text-truncate">I have the photos that you ordered last month, how
                              would you like them sent to you?</div>
                            <div className="small text-gray-500">Jae Chun · 1d</div>
                          </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_3.svg"
                              alt="..." />
                            <div className="status-indicator bg-warning"></div>
                          </div>
                          <div>
                            <div className="text-truncate">Last month's report looks great, I am very happy with
                              the progress so far, keep up the good work!</div>
                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                          </div>
                        </a>
                        <a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                              alt="..." />
                            <div className="status-indicator bg-success"></div>
                          </div>
                          <div>
                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                              told me that people say this to all dogs, even if they aren't good...</div>
                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                          </div>
                        </a>
                        <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                      </div>
                    </li>
                    <div className="topbar-divider d-none d-sm-block"></div>

                    {/* <!-- Nav Item - User Information --> */}
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                        <img className="img-profile rounded-circle"
                          src="img/undraw_profile.svg" />
                      </a>
                      {/* <!-- Dropdown - User Information --> */}
                      <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                          Settings
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                          Activity Log
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
                {/* <!-- End of Topbar --> */}
                <Outlet />
               
              </div>
              {/* <!-- End of Content Wrapper --> */}

              {/* <!-- Footer --> */}
              <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2021</span>
                  </div>
                </div>
              </footer>
              {/* <!-- End of Footer --> */}


            </div>
            {/* <!-- End of Page Wrapper --> */}

            {/* <!-- Scroll to Top Button--> */}
            <a className="scroll-to-top rounded" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>

            {/* <!-- Logout Modal--> */}
            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a className="btn btn-primary" href="login">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
    </div>
  );
}

export default App1;
