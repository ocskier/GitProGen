require("typescript-require");
import { UserDataType } from "./index";

interface ColorsType {
  [key: string]: {
    [key: string]: string;
  };
}

const colors: ColorsType = {
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
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap"
        rel="stylesheet"
      />
      <title>Document</title>
      <style>
        html,
        body {
          padding: 0;
          margin: 0;
        }
        html,
        body,
        .wrapper {
          height: 100%;
        }
        .wrapper {
          background-color: ${colors[data.color].wrapperBackground};
          padding-top: 60px;
        }
        body {
          background-color: white;
          -webkit-print-color-adjust: exact !important;
          font-family: "Cabin", sans-serif;
        }
        main {
          background-color: #e9edee;
          height: auto;
          padding-top: 30px;
        }
        figure {
          display: flex;
          flex-direction: column;
        }
        figure img {
          width: 200px !important;
          border-radius: 50% !important;
          border: 1px solid ${colors[data.color].photoBorderColor};
        }
        figure span {
          text-align: center;
          margin-top: 10px;
          font-size: large;
        }
        .card {
          max-width: 956px;
          width: 100%;
          margin: 0 auto;
          max-height: 600px;
          height: auto !important;
        }
        .card-image {
          display: flex;
          justify-content: space-between;
        }
        h4 {
          font-family: "BioRhyme", serif;
          margin: 0;
          font-size: 1.5em;
        }
        a,
        a:hover {
          text-decoration: none;
          color: inherit;
          font-weight: bold;
        }
        @media print {
          body {
            zoom: 0.75;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <!-- profile-page-header -->
        <div id="profile-page-header" class="card large">
          <div class="card-image waves-effect waves-block waves-light">
            <!-- <img class="activator" src="" alt="user background"> -->
            <figure class="card-profile-image">
              <img
                height="150"
                src=${data.pic}
                alt="profile image"
                class="circle z-depth-2 responsive-img activator gradient-45deg-light-blue-cyan gradient-shadow"
              />
              <span>${data.location}</span>
            </figure>
            <figure class="card-profile-image">
              <img
                height="150"
                src="https://maps.googleapis.com/maps/api/staticmap?center=${
                  data.location
                }&zoom=14&size=400x400&key=${process.env.CLIENT_ID}"
                alt="map location"
                class="z-depth-2 responsive-img activator
              gradient-45deg-light-blue-cyan gradient-shadow"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="row pt-2">
              <div class="col s12 center">
                <h4 class="card-title grey-text text-darken-4">${data.name}</h4>
              </div>
              <div class="col s12 center-align">
                <p class="medium-small black-text">Repos</p>
                <h4 class="card-title grey-text text-darken-4">
                  ${data.numRepos}
                </h4>
              </div>
              <div class="col s12 center-align">
                <h4 class="card-title grey-text text-darken-4">
                  <a
                    href=${data.profile}
                    class="medium-small black-text"
                    target="blank"
                    >${data.profile}</a
                  >
                </h4>
              </div>
              <div class="col s12 right-align">
                <a
                  class="btn-floating activator waves-effect waves-light rec accent-2 right"
                >
                  <i class="material-icons">perm_identity</i>
                </a>
              </div>
            </div>
          </div>
          <div class="row card-reveal">
            <div class="col s12 m5">
              <p>
                <span class="card-title grey-text text-darken-4">
                  ${data.login}
                </span>
                <br />
                <span>
                  <i class="material-icons cyan-text text-darken-2"
                    >perm_identity</i
                  >
                  Teacher</span
                >
              </p>
              <i
                class="card-title material-icons right"
                style="position:absolute;top:5%;right:2%"
                >close</i
              >
              <p>
                <i class="material-icons cyan-text text-darken-2"
                  >perm_phone_msg</i
                >
                +1 (555) 555 8989
              </p>
              <p>
                <i class="material-icons cyan-text text-darken-2">email</i>
                mail@domain.com
              </p>
              <p>
                <i class="material-icons cyan-text text-darken-2">cake</i> 18th
                June 1990
              </p>
            </div>
            <div class="col s12 m6">
              <br />
              <div class="input-field col s12 m6">
                <select id="change-subj-field" class="icons">
                  <option data-icon="images/sample-1.jpg" disabled selected
                    >Change Subject</option
                  >
                </select>
              </div>
              <br />
              <button
                type="submit"
                class="btn btn-default blue-grey darken-1"
                id="submit-change-text"
              >
                Submit Change
              </button>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
  </html>`;
};

module.exports = generateHTML;
