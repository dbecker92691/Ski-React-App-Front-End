import React, {Component} from 'react';
import { FieldProps } from "formik";
import Geosuggest from 'react-geosuggest';
import './geo.css'

const google = window.google;


class LocationField extends Component {

        constructor() {
          super()

          this.state = {
            start: {
              lat: null,
              lng: null
            },
            finish: {
              lat: null,
              lng: null
            }
          }
        }

        onSuggestSelect = async (place: Suggest) => {
          
          try {
            this.setState(prevState => ({
              start: {
                ...prevState.start,
                lat: place.location.lat,
                lng: place.location.lng
              }
            }))

            this.setState(prevState => ({
              finish: {
                ...prevState.finish,
                lat: place.location.lat,
                lng: place.location.lng

              }
            }))

            console.log(this.state, "<---- this . state start/finish")
          } catch(err) {
            console.log(err, "<----- lat lng error")
          }

        };

  render() {
    // const {
    //   form: { values } // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    // } = this.props;

    return (
      <div>
        <Geosuggest
          placeholder="Start typing!"
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius={20}
        />

      </div>

    );
	}

}


export default LocationField;