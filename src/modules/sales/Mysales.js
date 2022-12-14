import React, { Fragment } from 'react';
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
        id:1
    },
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
        id:1
    },
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
        id:1
    },
    {
        image:'image/img4.jpg',
        price:'20',
        itemcode:'20',
        id:1
    }
]




    return(
        <Fragment>
        <div className='myflex'>
            {Products.map( (e)=>(
                <section>
                    <a href='http://google.com' target="_blank"><img src={e.image} /></a>
                    <p>price: {e.price}</p>
                    <button className='btn btn-primary btn-sm'>Price: {e.price}</button>
                </section>
            ))}
        </div>
        
        </Fragment>
    )


}


