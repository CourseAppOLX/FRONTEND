// import { Link } from 'react-router-dom';
// import DefaultHeader from '../DefaultHeader';
// import './CategoryPage.css';
// import img from './img/car.jpeg';
// import { useEffect, useState } from 'react';
// import { ICategoryListItem } from './types';
// import http from '../../../http';
// import { APP_ENV } from '../../../env';

// const ProductPage = () => {
//     const [list, setList] = useState<ICategoryListItem[]>([]);

//     useEffect(() => {
//         http.get("api/Categories/list")
//             .then(resp => {
//                 const data = resp.data;
//                 setList(data);
//             });
//     }, []);

//     const onDelete = async (id: number) => {
//         try {
//             await http.delete(`api/categories/delete/${id}`);
//             setList(list.filter(x => x.id !== id));
//         } catch {
//             console.log("Delete bad request");
//         }
//     }

//     const mapList = list.map(category => (
//         // <tr key={category.id}>
//         //     <td>
//         //         <img src={`${APP_ENV.BASE_URL}images/50_${category.image}`} alt="фото" width={50}/>
//         //     </td>
//         //     <td>{category.name}</td>
//         //     <td>{category.parentName}</td>
//         //     <td>{category.description}</td>
//         //     {/* <td>
//         //         <ModalDelete id={category.id} text={category.name} deleteFunc={onDelete}/>
//         //         &nbsp;&nbsp;
//         //         <Link to={`edit/${category.id}`} className={"btn btn-info"}>Змінить</Link>
//         //     </td> */}
//         // </tr>
//         <div className='box'>

//             <span className="my-span">
//             <h4>{category.name}</h4>
//             <img src={category.image} alt="Background" />
//             <h5>{category.description}</h5>
//             </span>

//         </div>
//     ));
//      const value = "";
//      const onChange = () =>
//      {

//      }
//     return(

//         <>
//         <DefaultHeader/>
//         <div className='productmain'>
//             {/* <h1 className='title-categorypage'>Welcome</h1> */}
//             <div className='search-container'>
           
//           <input type="text" placeholder="Пошук" className="search-input"/>
//           <div className='submit-icon-search'>
//           <img src="https://img.icons8.com/color/search"/>
//           </div>
//           {/* {errors.name && touched.name && (
//             <div className="invalid-feedback">{errors.name}</div>
//           )} */}
//             </div>
//             {mapList}
          
//             <Link  aria-current="page" to="/category/create">
//                 <button className='addproduct'> Add Product </button>
//             </Link>
//         </div>
       
//         </>
//     )
// }

// export default ProductPage;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Імпортуємо Link
import DefaultHeader from '../DefaultHeader';
import './CategoryPage.css';
import img from './img/car.jpeg';
import { ICategoryListItem } from './types';
import http from '../../../http';
import { APP_ENV } from '../../../env';

const ProductPage = () => {
    const [list, setList] = useState<ICategoryListItem[]>([]);

    useEffect(() => {
        http.get("api/Categories/list")
            .then(resp => {
                const data = resp.data;
                setList(data);
            });
    }, []);

    const onDelete = async (id: number) => {
        try {
            await http.delete(`api/categories/delete/${id}`);
            setList(list.filter(x => x.id !== id));
        } catch {
            console.log("Delete bad request");
        }
    }

    const mapList = list.map(category => (
        <Link to={`/category/${category.id}`} key={category.id}>
            <div className='box'>
                <span className="my-span">
                    <h4>{category.name}</h4>
                    <img src={category.image} alt="Background" />
                    <h5>{category.description}</h5>
                </span>
            </div>
        </Link>
    ));

    const value = "";
    const onChange = () => {}

    return (
        <>
            <DefaultHeader />
            <div className='productmain'>
                <div className='search-container'>
                    <input type="text" placeholder="Пошук" className="search-input" />
                    <div className='submit-icon-search'>
                        <img src="https://img.icons8.com/color/search" />
                    </div>
                </div>
                {mapList}
                <Link to="/category/create">
                    <button className='addproduct'> Add Product </button>
                </Link>
            </div>
        </>
    )
}

export default ProductPage;
