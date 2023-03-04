import { NavLink } from "react-router-dom"


function Nav() {
  return (
    <div className="navBar">

        <NavLink to='/'>
            <img src="https://cdn.onlinewebfonts.com/svg/img_269712.png" alt="House icon" width='50px' />
        </NavLink>

    </div>
  )
}

export default Nav