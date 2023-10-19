import "./CategoryCreatePage.css";

import { useFormik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import { ICategoryCreate } from "./types";
import * as yup from "yup";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { ICategoryItem } from "../list/types";

import img_openfile from "../img/openfile.png";
import http from "../../../../http";


const CategoryCreatePage = () => {
  const navigator = useNavigate();

  const initValues: ICategoryCreate = {
    //id:0,
    name: "",
    // priority: null,
    image: "",
    description: "",
    parentId: null,
  };

  const createSchema = yup.object({
    name: yup.string().required("Вкажіть назву"),
    description: yup.string().required("Вкажіть опис"),
    image: yup.string().required("Додайте зображення"),
    priority: yup.string().required("Вкажіть пріоритет"),
  });

  const onSubmitFormikData = (values: ICategoryCreate) => {

  //   try {
  //     const resp = await http
  //         .post<ILoginResult>("api/Auth/login", values, {
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //         });
  //     const {token} = resp.data;
  //     const user = jwtDecode(token) as IUser;
  //     //console.log("User info", user);
  //     localStorage.token = token;
  //     http.defaults.headers.common[
  //         "Authorization"
  //         ] = `Bearer ${localStorage.token}`;
  //     dispatch({
  //         type: AuthUserActionType.LOGIN_USER,
  //         payload: {
  //             email: user.email,
  //             image: user.image,
  //             //roles: user.roles
  //         },
  //     });
  //     alert("Good");
  //     navigator("home");

  // } catch {
  //   setError("Дані вказано не вірно!");
  // }
  try{

    
    http.post("api/Categories/create", values, 
    { 
      headers: {
        //"Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
      },

      
    })
    .then((resp) => {
      console.log("Create date in server", resp);
      navigator("..");
    });
    console.log("Formik send data succses", values);
  }
  catch
  {
    console.log("Formik send data Error", values);
  }
   
   
   
  };

  const formik = useFormik({
     onSubmit: onSubmitFormikData,
    initialValues: initValues,
    validationSchema: createSchema,
   
  });

  const { values, errors, touched, handleSubmit, handleChange } = formik;

  const onImageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      const file = e.target.files[0];
      values.image = file.name;
      formik.setFieldValue(e.target.name, file);
    }
  };

  const [list, setList] = useState<ICategoryCreate[]>([]);

  useEffect(() => {
    http.get("api/Categories/list").then((resp) => { // remove list
      const data = resp.data;
      setList(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <h1 className="titlecategory">Додати категорію</h1>
      <form className="formcategory" onSubmit={formik.handleSubmit}>
        <div className="container-categorycreate">
          <label htmlFor="name" className="form-label">
            Назва
          </label>
          <input
            type="text"
            className={classNames("form-control", {
              "is-invalid": errors.name && touched.name,
            })}
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        <div className="container-categorycreate">
          <label htmlFor="image" className="form-label">
            Фото
          </label>
          <img src={img_openfile} alt="" />
          <input
            type="file"
            className={classNames("form-control", {
              "is-invalid": errors.image && touched.image,
            })}
            id="image"
            name="image"
            
            onChange={onImageChangeHandler}
          />
          {errors.image && touched.image && (
            <div className="invalid-feedback">{errors.image}</div>
          )}
        </div>

        <div className="container-categorycreate">
        <label htmlFor="description">Опис</label>
          <textarea
            className={classNames("form-control", {
              "is-invalid": errors.description && touched.description,
            })}
            placeholder="Вкажіть опис"
            id="description"
            name="description"
            style={{ height: "100px" }}
            value={values.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && touched.description && (
            <div className="invalid-feedback">{errors.description}</div>
          )}
          
        </div>

        {/* <div className="mb-3">
          <label htmlFor="priority" className="form-label">
            Пріоритет
          </label>
          <input
            type="number"
            className={classNames("form-control", {
              "is-invalid": errors.priority && touched.priority,
            })}
            id="priority"
            name="priority"
            onChange={handleChange}
          />
          {errors.priority && touched.priority && (
            <div className="invalid-feedback">{errors.priority}</div>
          )}
        </div> */}

        <div className="container-categorycreate">
          <label htmlFor="priority" className="form-label">
            Батьківська категорія (Не обовязково)
          </label>
          <select
  className="form-select"
  aria-label="Default select example"
  id="parentId"
  name="parentId"
  onChange={handleChange}
  value={values.parentId || ""} // Встановлюємо пустий рядок, якщо значення null або undefined
>
  <option value={0}>Обрати категорію</option>
  {list.map((category) => (
    <option
      key={category.name}
      value={category.name}
    >
      {category.name}
    </option>
  ))}
</select>

        </div>

        <button type="button" className="btn-categorycreate" onClick={() => onSubmitFormikData(values)}>
  Додати
</button>


    
      
      </form>
     
    </>
  );
};

export default CategoryCreatePage;