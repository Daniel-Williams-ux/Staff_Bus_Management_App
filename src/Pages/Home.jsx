import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import l1 from './l1.jpg'
import l2 from './l2.jpg'
import l3 from './l3.jpg'

const Home = () => {
    return (
        <div>
        <Carousel fade>
        <Carousel.Item>
        <img className = "d-block w-100 h-50 "
        src = { l1 }
        alt = "First slide"
        style = {
            { maxHeight: "700px" } }
        /> <Carousel.Caption >
        <h3 > First slide label </h3> <p > Nulla vitae elit libero, a pharetra augue mollis interdum. </p> </Carousel.Caption> </Carousel.Item> 
        <Carousel.Item>
        <img className = "d-block w-100 h-50"
        src = { l2 }
        alt = "Second slide"
        style = {
            { maxHeight: "700px" } }
        />

        <Carousel.Caption >
        <h3> Second slide label</h3> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> </Carousel.Caption> </Carousel.Item> 
        <Carousel.Item>
        <img className = "d-block w-100 h-50"
        src = { l3 }
        alt = "Third slide"
        style = {
            { maxHeight: "700px" } }
        />

        <Carousel.Caption>
        <h3 > Third slide label </h3> <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p> </Carousel.Caption> </Carousel.Item>
         </Carousel>

        </div>
    )
}

export default Home