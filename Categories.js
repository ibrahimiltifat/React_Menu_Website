import React, {Component} from 'react';
import {Media} from "reactstrap";

class Categories extends Component{
    constructor(props){
        super(props);

        this.state={
            dishes: [
                {
                    id: 0,
                    name:'burgerler',
                    image: 'assets/images/burgerler',
                       },
                {
                    id: 1,
                    name: 'kizartmalar',
                    image: 'assets/images/kizart.jpg',
                },
                {
                    id: 2,
                    name: 'milkshakes',
                    image: 'assets/images/milkshakes.jpg',
                },
                {
                    id: 3,
                    name: 'icecekler',
                    image: 'assets/images/icecekler.jpg',
                },

                          ],
        };

    }


    render() {

        const menu= this.state.dishes.map((dish)=>{
            return(
                <div key={dish.id} >


                        <Media body >
                            <Media object src={dish.image} alt={dish.name}/>
                            <Media heading>{dish.name}</Media>
                        </Media>


                </div>

            );

        });

        return(
            <div className="container-fluid">



                        {menu}



            </div>

        );

    }
}

export default Categories;