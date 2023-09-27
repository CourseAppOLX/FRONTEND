import DefaultHeader from '../DefaultHeader';
import './ProductPage.css';
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


        
                <button className='addproduct'> Add Product </button>
        </div>
        </>
    )
}

export default ProductPage;