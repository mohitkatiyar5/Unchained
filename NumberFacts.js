<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <style>
    #fact{
      display:none;
    }
  </style>
  <title>Number Facts</title>
</head>
<body class="bg-dark">
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card bg-primary text-white mt-5 p-4">
          <h1>Number Facts</h1>
          <p>Enter a number and get a random fact</p>
          <input type="number" class="form-control form-control-lg" id="numberInput" placeholder="Enter any number...">
          <div id="fact" class="card-body">
            <h4 class="card-title">
              Number Fact
            </h4>
            <p id="factText" class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    let fact = document.querySelector('#fact');
    let factText = document.querySelector('#factText');

    let numberInput = document.querySelector('#numberInput');
    numberInput.addEventListener('input', getFactAjax);

    // Fetch with XHR
    function getFactAjax(){
      let number = numberInput.value;
      if(number != ''){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/'+number);

        xhr.onload = function(){
          if(this.status == 200){
            fact.style.display = 'block';
            factText.innerText = this.responseText;
          }
        }

        xhr.send();
        }
    }

    // Fetch with Fetch API
    function getFactFetch(){
      let number = numberInput.value;

      if(number != ''){
        fetch('http://numbersapi.com/'+number)
        .then(response => response.text())
        .then(data => {
          fact.style.display = 'block';
          factText.innerText = data;
        })
        .catch(err => console.log(err));
      }
    }

  </script>
</body>
</html>
