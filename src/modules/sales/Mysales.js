import React, { Fragment } from 'react';
import { Link,useParams } from 'react-router-dom';
import '../../style.css';

export const Myprodut = ()=> {

const Products = [
    {
        image:'image/img2.jpg',
        price:'20',
        itemcode:'20',
        id:1
    },
    {
        image:'image/img2.jpg',
        price:'20',
        itemcode:'20',
        id:2
    },
    {
        image:'image/img2.jpg',
        price:'20',
        itemcode:'20',
        id:3
    },
    {
        image:'image/img2.jpg',
        price:'20',
        itemcode:'20',
        id:4
    },
    {
        image:'image/img2.jpg',
        price:'20',
        itemcode:'20',
        id:5
    },
    {
        image:'image/img2.jpg',
        price:'20',
        itemcode:'20',
        id:6
    },
    {
        image:'image/img4.jpg',
        price:'20',
        itemcode:'20',
        id:7
    },
    {
        image:'image/img5.jpg',
        price:'20',
        itemcode:'20',
        id:8
    }
];

let { id } = useParams(); 


    return(
        <Fragment>
        <div className='myflex'>
            {Products.map( (e)=>(
                <Link to={`/sales/${e.id}`}>
                <section>
                    <a href='http://google.com' target="_blank"><img src={e.image} /></a>
                    <p>price  : {e.price}</p>
                    <button className='btn btn-primary btn-sm'>Price: {e.price}</button>
                </section>
                </Link>
            ))}
        </div>
        
        </Fragment>
    )


}


