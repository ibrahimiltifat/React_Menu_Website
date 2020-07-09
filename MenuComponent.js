import React, {Component} from 'react';
import {Media} from "reactstrap";
import './MenuComponent.css';

class Menu extends Component{
    constructor(props){
        super(props);

        this.state={
            dishes: [
                {
                    id: 0,
                    name:'Juiy Burger',
                    image: 'assets/images/juicyburger',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/burger2.jpg',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
                {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/burger3.jpg',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
                {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/burger4.jpg',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
            ],
        };

    }


    render() {

       const menu= this.state.dishes.map((dish)=>{
            return(
                <div key={dish.id}  className="mt-5">
                    <Media tag="li">
                        <Media >
                            <Media className="img" object src={dish.image} alt={dish.name}/>
                        </Media>
                        <Media body className="">
                            <Media heading className="div">{dish.name}</Media>
                            <div className="clear" ></div>
                            <p className="div text-col" >{dish.price}</p>
                        </Media>
                    </Media>

                </div>

            );

           });

        return(
            <div className="container-fluid">
                <div className="row ">
                    <Media list>
                        {menu}

                    </Media>
                </div>
            </div>

        );

    }
}

export default Menu;