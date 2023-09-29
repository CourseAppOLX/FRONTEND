import { Link } from 'react-router-dom';
import DefaultHeader from '../DefaultHeader';
import './CategoryPage.css';
import img from './img/car.jpeg';

const ProductPage = () => {


    return(

        <>
        <DefaultHeader/>
        <div className='productmain'>

       
            <div className='box'>

                <span className="my-span">
                    <h4>Cars</h4>
                    <img src={img} alt="Background" />
                </span>

            </div>


            <Link  aria-current="page" to="/category/create">
                    <button className='addproduct'> Add Product </button>
            </Link>
                
        </div>
        </>
    )
}

export default ProductPage;