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

        onSuggestSelectStart = async (place: Suggest) => {
          
          try {
            this.setState(prevState => ({
              start: {
                ...prevState.start,
                lat: place.location.lat,
                lng: place.location.lng
              }
            }))

            console.log(this.state, "<---- this . state start")
          } catch(err) {
            console.log(err, "<----- lat lng error")
          }

        };

        onSuggestSelectFinish = async (place: Suggest) => {
          
          try {
            this.setState(prevState => ({
              finish: {
                ...prevState.finish,
                lat: place.location.lat,
                lng: place.location.lng
              }
            }))

            console.log(this.state, "<---- this . state finish")
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

        <div className='start'>
          <Geosuggest
            placeholder="start"
            onSuggestSelect={this.onSuggestSelectStart}
            location={new google.maps.LatLng(53.558572, 9.9278215)}
            radius={20}
          />
        </div>
          <div className='finish'>
           <Geosuggest
            placeholder="finish"
            onSuggestSelect={this.onSuggestSelectFinish}
            location={new google.maps.LatLng(53.558572, 9.9278215)}
            radius={20}
          />
        </div>

      </div>

    );
	}

}


export default LocationField;