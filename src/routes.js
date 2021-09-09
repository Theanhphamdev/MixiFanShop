
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./Screen/Admin/home";
import AddForm from "./Screen/Admin/products/add";
import ListProducts from "./Screen/Admin/products";
import EditForm from "./Screen/Admin/products/edit";
import AdminLayout from "./Layout/adminLayout";
import ClientLayout from "./Layout/clientLayout";
import Signin from "./Screen/Client/signin";
import Signup from "./Screen/Client/signup";
import HomePage from "./Screen/Client/homepage";
import ListCategory from "./Screen/Admin/category/list";
import FormAddCate from "./Screen/Admin/category/add";
import About from "./Screen/Client/about";
import Contact from "./Screen/Client/contact";
import ProductDetail from "./Screen/Client/detail";
import Shop from "./Screen/Client/shop";
import FormEditCate from "./Screen/Admin/category/edit";

const Routes = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin/:path?/:path?/:path?" >
                    <AdminLayout>
                        <Switch>
                            <Route exact path="/admin/dashboars">
                                <DashBoard/>
                            </Route>
                            <Route exact path="/admin">
                                <DashBoard/>
                            </Route>
                            <Route exact path="/admin/products">
                                <ListProducts {...props} />
                            </Route>
                            <Route exact path="/admin/products/add">
                                <AddForm {...props} />
                            </Route>
                            <Route exact path="/admin/products/:id/edit">
                                <EditForm {...props} />
                            </Route>
                            <Route exact path="/admin/categories">
                                <ListCategory {...props} />
                            </Route>
                            <Route exact path="/admin/categories/add">
                                <FormAddCate {...props} />
                            </Route>
                            <Route exact path="/admin/categories/:id/edit">
                                <FormEditCate {...props} />
                            </Route>
                        </Switch>
                    </AdminLayout>
                </Route>
                <Route>
                    <ClientLayout>
                        <Route exact path="/">
                            <HomePage {...props}/>
                        </Route>
                        <Route exact path="/home">
                            <HomePage {...props}/>
                        </Route>
                        <Route exact path="/home/:page">
                            <HomePage {...props}/>
                        </Route>
                        <Route exact path="/about-us">
                            <About/>
                        </Route>
                        <Route exact path="/contact-us">
                            <Contact/>
                        </Route>
                        <Route exact path="/products/:id/detail">
                            <ProductDetail {...props} />
                        </Route>
                        <Route exact path="/shops">
                            <Shop/>
                        </Route>
                        <Route exact path="/shops/:id/category">
                            <Shop/>
                        </Route>
                        <Route exact path="/signup">
                            <Signup/>
                        </Route>
                        <Route exact path="/signin">
                            <Signin/>
                        </Route>
                    </ClientLayout>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
