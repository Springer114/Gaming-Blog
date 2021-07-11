import { Link } from "@reach/router";
import Hamburger from "./HamburgerMenu";
import { ReactComponent as BellIcon } from "../icons/bell.svg";
import { ReactComponent as CastleIcon } from "../icons/castle.svg";
import { ReactComponent as MessengerIcon } from "../icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../icons/plus.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";

import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const Header = () => {
    return (
        <div>
            <Navbar>
                <li>
                    <Link to={"/about"} className="nav-link">
                        About
                    </Link>
                </li>
                <li>
                    <Link to={"/users/:id"} className="nav-link">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to={"/login"} className="nav-link">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to={"/register"} className="nav-link">
                        Register
                    </Link>
                </li>
                <NavItem icon={<Hamburger />}>
                    <DropdownMenu />
                </NavItem>
            </Navbar>
        </div>
    );
};

const ScrollEvent = () => {
    
}

const Navbar = (props) => {
    const [small, setSmall] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", () =>
          setSmall(window.pageYOffset > 200)
        );
      }
    }, []);

    return (
        <nav className={`navbar ${
            small ? "scroll" : ""
          }`}>
            <div className="site-name">
            <Link to={"/"} className="icon-button"><CastleIcon /></Link>
            <Link to={"/"}></Link><span className="title">A Gaming Space</span>
            </div>
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

const NavItem = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <span onClick={() => setOpen(!open)}>
                {props.icon}
            </span>

            {open && props.children}
        </li>
    );
}

const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const DropdownItem = (props) => {
        return (
            <span
                className="menu-item"
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
            >
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </span>
        );
    }

    return (
        <div
            className="dropdown"
            style={{ height: menuHeight }}
            ref={dropdownRef}
        >
            <CSSTransition
                in={activeMenu === "main"}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings"
                    >
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals"
                    >
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "settings"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h3>Main Menu</h3>
                    </DropdownItem>
                    <Link to=""><DropdownItem leftIcon={<BoltIcon />}>Test</DropdownItem></Link>
                    <Link to=""><DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem></Link>
                    <Link to=""><DropdownItem leftIcon={<BoltIcon />}>
                        JavaScript
                    </DropdownItem></Link>
                    <Link to=""><DropdownItem leftIcon={<BoltIcon />}>
                        Awesome!
                    </DropdownItem></Link>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "animals"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Header;
