const generateHTML = (data) => {
     const internInfo= [];
     const engineerInfo= [];
     const managerInfo = [];
     for(let i = 0; i < data.length; i++){
         if (data[i].getRole() === "Manager"){
             managerInfo.push(managerHTML(data[i]));
             
         }
         if (data[i].getRole() === "Engineer"){
             engineerInfo.push(engineerHTML(data[i]))
         }
         if (data[i].getRole() === "Intern"){
             internInfo.push(internHTML(data[i]))
         }
     }
     engineerInfo.join('');
     internInfo.join('');
     managerInfo.join('');
     return `
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
         <link rel="stylesheet" href="./dist/style.css">
         <title>Team Member Portfolio</title>
         <script
             src="https://code.jquery.com/jquery-3.5.0.min.js"
              integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ="
              crossorigin="anonymous">
         </script>
         <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
             integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
         </script>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" 
             integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous">
         </script>
         <script src="https://kit.fontawesome.com/c349b716f3.js" crossorigin="anonymous"></script>
     </head>
     <body>
        <div class="jumbotron jumbotron-fluid jumbo" style="height: 10 rem;">
            <div class="container">
                <h1 class="Title"> My Team </h1>
            </div>
        </div>
        <main>
            <div class="employees col-12-md row">
                ${managerInfo}
                ${engineerInfo}
                ${internInfo}
            </div>
        </main>
    </body>
    </html>
    `;
}


function managerHTML(manager){
    let managerCard =
    `
    <div class="card contents" style="width:22rem; height: 15rem;">
        <div class="manager">
            <div class="card-header">
                <h3> ${manager.name} </h4>
                <h4> <i class= "fa-solid fa-mug-hot"></i> Manager </h4>
            </div>

            <div style="padding-left: 10px;">
                <div class= "info">
                    <p> ID: ${manager.emplID} </p>
                    <p> Email: <a href="mailto: ${manager.email}">${manager.email}</a></p>
                    <p> Office Number: ${manager.officeNum}</p>
                </div>
            </div>
        </div>
    </div>
    `
    return managerCard;
}

function engineerHTML(engineer){
    let engineerCard =
    `
    <div class="card contents" style="width:22rem; height: 15rem;">
        <div class="engineer">
            <div class="card-header">
                <h3> ${engineer.name} </h4>
                <h4> <i class="fa-solid fa-briefcase"></i> Engineer </h4>
            </div>

            <div style="padding-left: 10px;">
                <div class= "info">
                    <p> ID: ${engineer.emplID} </p>
                    <p> Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
                    <p> Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
        </div>
    </div>
    `
    return engineerCard;
}

function internHTML(intern) {
    let internCard =
    `
    <div class="card contents" style="width:22rem; height: 15rem;">
        <div class="intern">
            <div class="card-header">
                <h3> ${intern.name} </h4>
                <h4> <i class="fa-solid fa-graduation-cap"></i> Intern </h4>
            </div>

            <div style="padding-left: 10px;">
                <div class= "info">
                    <p> ID: ${intern.emplID} </p>
                    <p> Email: <a href="mailto: ${intern.email}">${intern.email}</a></p>
                    <p> Office Number: ${intern.school}</p>
                </div>
            </div>
        </div>
    </div>
    `
    return internCard;
}
module.exports = generateHTML;