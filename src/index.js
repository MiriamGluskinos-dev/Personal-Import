import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


<html lang="en">
<head>
<script src="http://localhost:3000"></script>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React App</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3pHsBHMibznE+/KOQ7pLThUhx4tY6C55zy7KEQzO2l6kGpd2tZ2jgMeY" crossorigin="anonymous" />
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXSqoH+L3o74ZjG134xyQOgPh+YMBW3lU6y9M9by6cG6y7vRO5VWH1553oX/T" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-kBNceforBpY42Y6TBz5tSk8WGlNsqQt6n/I5wW/x+q656x82C84K+Ta5t/5yG9" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-e4DfCweI772E9btz5A865265e5kKMgQkLAtwQzQjYfRV3aQ74TFCq2S0mjQjT" crossorigin="anonymous"></script>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@7.15.7/babel.min.js"></script>
  <script src="src/main.js"></script>
</body>
</html>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
