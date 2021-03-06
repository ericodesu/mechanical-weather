import { Link } from 'react-router-dom';

//Services
import { getSplitIndex } from '../services';

const NavLink = (props) => {
    const currentPage = getSplitIndex(getSplitIndex(window.location.hash, '#', 1), '/', 1);

    if(props.dummy){
        return(
            <li className="navbar__link-dummy"/>
        );
    }else{
        return(
            <li className={"navbar__link --smooth-transition" + (currentPage === getSplitIndex(props.href, '/', 1) ? ' --active' : '')}>
                <Link
                    className="--full-width --full-height --flex --centralize"
                    to={props.href}
                    rel="noreferrer"
                    target={props.isAnotherWindow ? '_blank' : null}
                    title={props.title ? props.title : null}
                >
                    {props.content}
                </Link>
            </li>
        );
    };
};

export default NavLink;