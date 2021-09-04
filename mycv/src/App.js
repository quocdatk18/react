
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';
import Search from './components/Search';

var data = [
  {
    id: 1,
    name: "Iphone X",
    description: "Iphone X gia re",
    price: "12.000.000",
    img: "https://cdn.24h.com.vn/upload/4-2018/images/2018-11-01/1541059529-316-diem-danh-smartphone-chup-anh-dep-nhat-nam-2018-iphone-x-camera-1540506212-width660height440.jpg"
  },
  {
    id: 2,
    name: "Samsung",
    description: "Samsung gia re",
    price: "7.800.000",
    img: "https://cdn.24h.com.vn/upload/4-2018/images/2018-11-01/1541059530-815-diem-danh-smartphone-chup-anh-dep-nhat-nam-2018-galaxy-s9-s9-plus-camera-1540506687-width660height440.jpg"
  },
  {
    id: 3,
    name: "Huawei",
    description: "Huawei Pro",
    price: "6.800.000",
    img: "https://cdn.24h.com.vn/upload/4-2018/images/2018-11-01/1541059530-120-diem-danh-smartphone-chup-anh-dep-nhat-nam-2018-huawei-p20-pro-camera-1540506212-width660height440.jpg"
  },
  {
    id: 4,
    name: "Iphone 11",
    description: "Iphone 11 nice",
    price: "10.800.000",
    img: "https://vn-test-11.slatic.net/p/mdc/ee8a19f7e31ca0137f76adb7661266d5.jpg"
  },
  {
    id: 5,
    name: "Iphone 12",
    description: "Iphone 12 Pro",
    price: "15.800.000",
    img: "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg"
  },
  {
    id: 6,
    name: "Iphone 13",
    description: "Iphone 13 Pro",
    price: "15.800.000",
    img: "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg"
  }
];
function App() {
  const [products, setProducts] = useState(data);

  const handleSearch = (keyword) => {
    var filterArr = data.filter(item => {
      return item.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setProducts(filterArr);
  }


  return (
    <Router>
      <div className="App">
        <Header parentCallback={handleSearch} />


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product">
            <div className="container">
              <div className="row">
                {products.map(product => {
                  return <Product item={product} key={product.id} />
                })}
              </div>
            </div>
          </Route>
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>

      <Footer />

    </Router>
  );
}

export default App;
