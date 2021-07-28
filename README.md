1. create-react-app
2. npm install bootstrap --save, npm i reactstrap, npm i react-popper
3.  import bootstrap on index.js :     import 'bootstrap/dist/css/bootstrap.min.css';
4. import { Navbar, NavbarBrand } from 'reactstrap'; on app.js
5. update app.js
```
  <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristaurante Confusion</NavbarBrand>
          </div>
        </Navbar>
      
    </div>
```