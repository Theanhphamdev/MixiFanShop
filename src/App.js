import { useState, useEffect } from "react";
import {getAll, remove, add, edit} from "./Api/ProductApi";
import {getAllCate, removeCate, addCate, editCate} from "./Api/CategoryApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from "./routes";
import './style.css';

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
      
    };
    getProducts();
  }, [])
  
  
  const onHandleDelete = async (id) => {
    try {
      await remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }
    
  }
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleEdit = async (item) => {
    try {
      const { data } = await edit(item);
      const newProducts = products.map((product)=>
        product.id == item.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }
  }
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getAllCate();
        setCategories(data)
      } catch (error) {
        console.log(error)
      }
      
    };
    getCategories();
  }, [])
  const onDeleteCate = async (id) => {
    try {
      await removeCate(id);
      const newCategories = categories.filter((item) => item.id !== id);
      setCategories(newCategories);
    } catch (error) {
      console.log(error)
    }
  }
  const onAddCate = async (item) => {
    try {
      const { data } = await addCate(item);
      setCategories([...categories, data]);
    } catch (error) {
      console.log(error)
    }
  }

  const onEditCate = async (item) => {
    try {
      const { data } = await editCate(item);
      const newCate = categories.map((categories)=>
      categories.id == item.id ? data : categories
      );
      setCategories(newCate);
    } catch (error) {
      console.log(error)
    }
  }
  


  return (
    <Routes
      products={products} 
      onDelete={onHandleDelete} 
      onAdd={onHandleAdd}
      onEdit={onHandleEdit}
      categories={categories}
      DeleteCate={onDeleteCate}
      AddCate={onAddCate}
      EditCate={onEditCate}
    />      
  );
}

export default App;
