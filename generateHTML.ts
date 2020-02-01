require('typescript-require');
import { UserDataType } from './index';

interface ColorsType {
  [key: string]: {
    [key: string]: string;
  };
}

const colors: ColorsType = {
  green: {
    wrapperBackground: '#E6E1C3',
    headerBackground: '#C1C72C',
    headerColor: 'black',
    photoBorderColor: '#black',
  },
  blue: {
    wrapperBackground: '#5F64D3',
    headerBackground: '#26175A',
    headerColor: 'white',
    photoBorderColor: '#73448C',
  },
  pink: {
    wrapperBackground: '#879CDF',
    headerBackground: '#FF8374',
    headerColor: 'white',
    photoBorderColor: '#FEE24C',
  },
  red: {
    wrapperBackground: '#DE9967',
    headerBackground: '#870603',
    headerColor: 'white',
    photoBorderColor: 'white',
  },
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
        body {
          height: 100%;
        }
        body {
          font-family: "Cabin", sans-serif;
          padding-top: 60px;
          background-color: ${colors[data.color].headerBackground};
        }
        figure img {
          width: 200px !important;
          border-radius: 50% !important;
          border: 1px solid ${colors[data.color].photoBorderColor};
        }
        figure span {
          display: block;
          text-align: center;
          margin-top: 10px;
          font-size: large;
        }
        .left-figure {
          float: left;
        }
        .right-figure {
          float: right;
        }
        .card {
          max-width: 956px;
          width: 100%;
          margin: 0 auto;
          max-height: 600px;
          height: auto !important;
          border-radius: 10px;
          background-color: ${colors[data.color].wrapperBackground};
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
            zoom: 0.80;
          }
        }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <!-- profile-page-header -->
        <div id="profile-page-header" class="card large">
          <div class="card-image">
            <figure class="card-profile-image left-figure">
              <img
                height="150"
                src=${data.avatar_url}
                alt="profile image"
                class="circle z-depth-2 responsive-img activator gradient-45deg-light-blue-cyan gradient-shadow"
              />
              <span>${data.login}</span>
            </figure>
            <figure class="card-profile-image right-figure">
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
                  ${data.public_repos}
                </h4>
              </div>
              <div class="col s12 center-align">
                <h4 class="card-title grey-text text-darken-4">
                  <a
                    href=${data.html_url}
                    class="medium-small black-text"
                    target="blank"
                    >${data.html_url}</a
                  >
                </h4>
              </div>
              <div class="col s12 center-align">
                <p class="medium-small black-text">Stars</p>
                <h4 class="card-title grey-text text-darken-4">
                  ${data.starred}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`;
};

module.exports = generateHTML;
