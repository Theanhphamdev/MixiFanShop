import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useParams } from 'react-router'
import { getProductLimit } from '../../../Api/ProductApi'
import { useState, useEffect } from "react";
const ListProducts = (props) => {
  const CountPage = Math.round((props.products.length) / 4)
  console.log(CountPage)
  let arr = Array.apply(null, { length: CountPage }).map(Number.call, Number);
  const { page } = useParams();

  console.log(page)

  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (page) {
      const getProducts = async () => {
        try {
          const { data } = await getProductLimit(page);
          setProducts(data)
        } catch (error) {
          console.log(error)
        }
      };
      getProducts();
    } else {
      const getProducts = async () => {
        try {
          const { data } = await getProductLimit(1);
          setProducts(data)
        } catch (error) {
          console.log(error)
        }
      };
      getProducts();
    }

  }, [page]);
  return (
    <>
      <h4>List product</h4>
      <div className="row">
        <div className="col-11">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex={-1}>Previous</a>
            </li>
            {arr.map((item, index) => (
              <li key={index}>
                <NavLink to={`/admin/products/${item + 1}`} className="page-link" activeClassName="bg-primary text-light">{item + 1}</NavLink>
              </li>
            ))}
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
        </div>
        <div className="col-1">
        <Link className="btn btn-primary my-2 my-lg-0" to="/admin/products/add">Create</Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name Product</th>
              <th>Price</th>
              <th>image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(item.price)}</td>
                <td><img src={item.image} width="150" /></td>
                <td><p>{(item.status == 0) ? 'Hết hàng' : 'Còn hàng'}</p></td>
                <td>
                  <button onClick={() => props.onDelete(item.id)} className="btn btn-danger">Delete</button>
                  <Link to={`/admin/products/${item.id}/edit`} className="btn btn-warning ml-1">Edit</Link>
                </td>
              </tr>
            ))}

          </tbody>
        </table>



      </div>
    </>
  )
}

export default ListProducts
