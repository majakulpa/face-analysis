import React, { Component } from "react";

import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import "./Ethnic";
import "./App.css";
import "tachyons";
import Ethnic from "./Ethnic";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Rank from "./components/Rank/Rank";

const initialState = {
  input: "",
  imageUrl: "",
  box: {},
  explore: {},
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  };

  exploreDemo = data => {
    const age =
      data.outputs[0].data.regions[0].data.face.age_appearance.concepts[0].name;
    const gender =
      data.outputs[0].data.regions[0].data.face.gender_appearance.concepts[0]
        .name;
    const race =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance
        .concepts[0].name;
    const racePerc =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[0].value.toFixed(
        2
      ) * 100;
    const race2 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance
        .concepts[1].name;
    const racePerc2 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[1].value.toFixed(
        2
      ) * 100;
    const race3 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance
        .concepts[2].name;
    const racePerc3 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[2].value.toFixed(
        2
      ) * 100;
    const race4 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance
        .concepts[3].name;
    const racePerc4 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[3].value.toFixed(
        2
      ) * 100;
    const race5 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance
        .concepts[4].name;
    const racePerc5 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[4].value.toFixed(
        2
      ) * 100;
    const race6 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance
        .concepts[5].name;
    const racePerc6 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[5].value.toFixed(
        2
      ) * 100;
    const race7 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance
        .concepts[6].name;
    const racePerc7 =
      data.outputs[0].data.regions[0].data.face.multicultural_appearance.concepts[6].value.toFixed(
        2
      ) * 100;

    return {
      age,
      gender,
      race,
      racePerc,
      race2,
      racePerc2,
      race3,
      racePerc3,
      race4,
      racePerc4,
      race5,
      racePerc5,
      race6,
      racePerc6,
      race7,
      racePerc7
    };
  };

  displayData = explore => {
    this.setState({ explore: explore });
  };

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = box => {
    this.setState({ box });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onBtnSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://face-analysis-api.herokuapp.com/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("https://face-analysis-api.herokuapp.com/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }));
            })
            .catch(console.log);
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
        this.displayData(this.exploreDemo(response));
      })
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: "true" });
    }
    this.setState({ route: route });
  };

  render() {
    const { imageUrl, isSignedIn, route, box } = this.state;
    return (
      <div className="app">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" && !imageUrl ? (
          <div className="wrap">
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onBtnSubmit={this.onBtnSubmit}
            />
            <h2 className="navy f3 mv3">Upload a photo...</h2>
          </div>
        ) : route === "home" && imageUrl ? (
          <div className="wrap">
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onBtnSubmit={this.onBtnSubmit}
            />

            <Ethnic
              age={this.state.explore.age}
              gender={this.state.explore.gender}
              race={this.state.explore.race}
              perc={this.state.explore.racePerc}
              race2={this.state.explore.race2}
              perc2={this.state.explore.racePerc2}
              race3={this.state.explore.race3}
              perc3={this.state.explore.racePerc3}
              race4={this.state.explore.race4}
              perc4={this.state.explore.racePerc4}
              race5={this.state.explore.race5}
              perc5={this.state.explore.racePerc5}
              race6={this.state.explore.race6}
              perc6={this.state.explore.racePerc6}
              race7={this.state.explore.race7}
              perc7={this.state.explore.racePerc7}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : this.state.route === "signin" ? (
          <div>
            <Signin
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          </div>
        ) : (
          <div>
            <Signup
              loadUser={this.loadUser}
              onRouteChange={this.onRouteChange}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
