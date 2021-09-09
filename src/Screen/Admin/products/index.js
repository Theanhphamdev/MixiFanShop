import React from 'react'
import { Link } from 'react-router-dom'
const ListProducts = (props) => {
    return (
        <>   
          <h4>List product</h4>
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
                {props.products.map((item,index) =>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{new Intl.NumberFormat('vi', { style: 'currency', currency: 'VND' }).format(item.price)}</td>
                    <td><img src={item.image} width="150" /></td>
                    <td><p>{(item.status == 0) ? 'Hết hàng' : 'Còn hàng'}</p></td>
                    <td>
                      <button onClick={()=> props.onDelete(item.id)} className="btn btn-danger">Delete</button>
                      <Link to={`/admin/products/${item.id}/edit`} className="btn btn-warning ml-1">Edit</Link>
                    </td>
                  </tr>
                ))}
                
                </tbody>
            </table>
            <Link className="btn btn-primary" to="/admin/products/add">Create</Link>
          </div>
        </>
    )
}

export default ListProducts
