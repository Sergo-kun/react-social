import React, {useState} from 'react'
import classes from "../../components/Users/Users.module.css";



let Paginator = ({totalCount, usersCount, activePage, clickPage, portionSize = 10}) => {

    let pageCount = Math.ceil(totalCount / usersCount)

    let pages = [];

    for (let i=1; i <= pageCount ; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize



    return (
        <div className={classes.paginator}>
            { portionNumber > 1 &&
            <span><button>TO START</button>
                <button onClick={() => setPortionNumber(portionNumber-1)}>PREVIOUS</button>
            </span>
            }

        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span onClick={() => {clickPage(p)}}
                             className={activePage === p ? classes.selectedPage : p}>{p} </span>
            })}
            {  portionCount > portionNumber  &&
           <span> <button onClick={() => setPortionNumber(portionNumber+1)}>NEXT</button>
               <button onClick={() => clickPage(pageCount)}>TO END</button></span>//костыль

            }
        </div>
    )
}


export default Paginator