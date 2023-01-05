import {Outlet, Link} from 'react-router-dom';

export const Navigation = () => {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/image_carousel'>Image Carousel</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}