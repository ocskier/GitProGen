import { UserDataType } from ".";

const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

const generateHTML = (data: UserDataType) => {
  return `<!DOCTYPE html>
          <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
                <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
                <title>Document</title>
                <style>
                    @page {
                      margin: 0;
                    }
                  *,
                  *::after,
                  *::before {
                  box-sizing: border-box;
                  }
                  html, body {
                  padding: 0;
                  margin: 0;
                  }
                  html, body, .wrapper {
                  height: 100%;
                  }
                  .wrapper {
                  background-color: ${colors[data.color].wrapperBackground};
                  padding-top: 100px;
                  }
                  body {
                  background-color: white;
                  -webkit-print-color-adjust: exact !important;
                  font-family: 'Cabin', sans-serif;
                  }
                  main {
                  background-color: #E9EDEE;
                  height: auto;
                  padding-top: 30px;
                  }
                  h1, h2, h3, h4, h5, h6 {
                  font-family: 'BioRhyme', serif;
                  margin: 0;
                  }
                  h1 {
                  font-size: 3em;
                  }
                  h2 {
                  font-size: 2.5em;
                  }
                  h3 {
                  font-size: 2em;
                  }
                  h4 {
                  font-size: 1.5em;
                  }
                  h5 {
                  font-size: 1.3em;
                  }
                  h6 {
                  font-size: 1.2em;
                  }
                  .photo-header {
                  position: relative;
                  margin: 0 auto;
                  margin-bottom: -50px;
                  display: flex;
                  justify-content: center;
                  flex-wrap: wrap;
                  background-color: ${colors[data.color].headerBackground};
                  color: ${colors[data.color].headerColor};
                  padding: 10px;
                  width: 95%;
                  border-radius: 6px;
                  }
                  .photo-header img {
                  width: 250px;
                  height: 250px;
                  border-radius: 50%;
                  object-fit: cover;
                  margin-top: -75px;
                  border: 6px solid ${colors[data.color].photoBorderColor};
                  box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
                  }
                  .photo-header h1, .photo-header h2 {
                  width: 100%;
                  text-align: center;
                  }
                  .photo-header h1 {
                  margin-top: 10px;
                  }
                  .links-nav {
                  width: 100%;
                  text-align: center;
                  padding: 20px 0;
                  font-size: 1.1em;
                  }
                  .nav-link {
                  display: inline-block;
                  margin: 5px 10px;
                  }
                  .workExp-date {
                  font-style: italic;
                  font-size: .7em;
                  text-align: right;
                  margin-top: 10px;
                  }
                  .container {
                  padding: 50px;
                  padding-left: 100px;
                  padding-right: 100px;
                  }

                  .row {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin-top: 20px;
                    margin-bottom: 20px;
                  }

                  .card {
                    padding: 20px;
                    border-radius: 6px;
                    background-color: ${colors[data.color].headerBackground};
                    color: ${colors[data.color].headerColor};
                    margin: 20px;
                  }
                  
                  .col {
                  flex: 1;
                  text-align: center;
                  }

                  a, a:hover {
                  text-decoration: none;
                  color: inherit;
                  font-weight: bold;
                  }

                  @media print { 
                    body { 
                      zoom: .75; 
                    } 
                  }
                </style>
            </head>
            <body>
              <!-- profile-page-header -->
              <div id="profile-page-header" class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <!-- <img class="activator" src=${data.bio} alt="user background"> -->
                </div>
                <figure class="card-profile-image">
                  <img src="https://via.placeholder.com/150x150" alt="profile image" class="circle z-depth-2 responsive-img activator gradient-45deg-light-blue-cyan gradient-shadow">
                  <div style="top: 10%;right: 3%;position: absolute;"><g:sharetoclassroom url="http://url-to-share" size="48"></g:sharetoclassroom></div>
                </figure>
                <div class="card-content">
                  <div class="row pt-2">
                    <div class="col s12 center m3 offset-m2">
                      <h4 class="card-title grey-text text-darken-4">${data.login}</h4>
                      <p class="medium-small grey-text">Teacher</p>
                    </div>
                    <div class="col s12 m2 center-align">
                      <h4 class="card-title grey-text text-darken-4">${data.numRepos}</h4>
                      <p class="medium-small grey-text">Subject</p>
                    </div>
                    <div class="col s12 m2 center-align">
                      <h4 class="card-title grey-text text-darken-4">${data.starred}</h4>
                      <p class="medium-small grey-text">Grade Level</p>
                    </div>
                    <div class="col s12 m1 right-align">
                      <a class="btn-floating activator waves-effect waves-light rec accent-2 right">
                        <i class="material-icons">perm_identity</i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="row card-reveal">
                  <div class="col s12 m5">
                    <p>
                      <span class="card-title grey-text text-darken-4">${data.login}
                      </span>
                      <br>
                      <span>
                        <i class="material-icons cyan-text text-darken-2">perm_identity</i> Teacher</span>
                    </p>
                    <i class="card-title material-icons right" style="position:absolute;top:5%;right:2%">close</i>
                    <!-- <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p> -->
                    <p>
                      <i class="material-icons cyan-text text-darken-2">perm_phone_msg</i> +1 (555) 555 8989</p>
                    <p>
                      <i class="material-icons cyan-text text-darken-2">email</i> mail@domain.com</p>
                    <p>
                      <i class="material-icons cyan-text text-darken-2">cake</i> 18th June 1990</p>
                    <!-- <p>
                      <i class="material-icons cyan-text text-darken-2">airplanemode_active</i> BAR - AUS</p> -->
                  </div>
                  <div class="col s12 m6">
                    <br>
                      <div class="input-field col s12 m6">
                          <select id="change-subj-field" class="icons">
                            <option data-icon="images/sample-1.jpg" disabled selected>Change Subject</option>
                          </select>
                      </div>
                      <div class="input-field col s12 m6">
                          <select id="change-grade-field" class="icons">
                            <option data-icon="images/sample-1.jpg" class="left" disabled selected>Change Grade</option>
                          </select>
                      </div>
                      <br>
                      <button type="submit" class="btn btn-default blue-grey darken-1" id="submit-change-text">Submit Change</button>
                  </div>
                </div>
              </div>
            </body>
          </html>`;
}

module.exports = generateHTML;
