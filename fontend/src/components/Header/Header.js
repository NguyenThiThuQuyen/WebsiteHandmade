import React from 'react'
import { IconContext } from 'react-icons';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import './Header.css'

function Header() {
  return (
    <div className='bg-navbar'>
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ul-font-header">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Trở thành người bán</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-light" href="#">Kênh người bán</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Tải ứng dụng</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-light" href="#">
                                Kết nối
                                <BsIcons.BsFacebook/>
                                <BsIcons.BsInstagram/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ul-font-header">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">
                                <AiIcons.AiOutlineBell/>
                                Thông báo
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-light" href="#">
                                <AiIcons.AiOutlineQuestionCircle/>
                                Hỗ trợ
                                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">
                                <RiIcons.RiEarthLine/>
                                <select name="" id="">
                                    <option value="">Tiếng Việt</option>
                                    <option value="">Tiếng Anh</option>
                                </select>
                                </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Đăng ký</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Đăng nhập</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
        <div className="container">
             <div className="row">
                <div className="col-2 mt-4">
                        <div className="logo">
                        <h1>Logo</h1>
                    </div>
                </div>
                <div className="col-8 mt-4">
                    <div className="form-search">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-contr mr-sm-2" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                            <button className="btn2 btn-outline my-2 text-light mx-2 my-sm-0" type="submit">Tìm kiếm</button>
                        </form>
                    </div>
                </div>
                <div className="col-2 mt-4">
                    <IconContext.Provider value={{color: "white", size: "1.8em"}}>
                        <div className="cart">
                            <BsIcons.BsCartCheck/>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header