import React, {useEffect} from "react";

const Nav = (props) => {
    const {
        pages,
        currentSectionState,
        setCurrentSectionState
    } = props; 

    const handleClickEvent = (e) => {
        setCurrentSectionState({
            name: e.target.getAttribute('data-section-name'),
            text: e.target.getAttribute('data-section-text')
        });
    }

    useEffect(() => {
        document.title =  `${currentSectionState.text} - Majdy Jamal`;
      }, [currentSectionState]);
    
   
    return (
        <nav className="container">
            <ul className="row ">
                { pages.map((page) => {
                    return (
                        <li className="col-12 col-xs-6 col-sm-3" key={page.name}>
                            <span  
                                data-section-name={page.name} 
                                data-section-text={page.text} 
                                onClick={handleClickEvent}
                                className={` ${page.name === currentSectionState.name && "navActive"}`}
                                style={{left: 5}}>
                                    {page.text}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Nav;