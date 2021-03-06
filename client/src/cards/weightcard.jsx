// for when we implement weight
import React from 'react';
import axios from 'axios';
import GenericCard from './genericcard'
// import Dialog from '../forms/weightdialog';
// import exerciseTarget from "../charts/exercisetarget";
// import exerciseConfigs from "../charts/exercise.jsx";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import widgets from "fusioncharts/fusioncharts.widgets";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme);
widgets(FusionCharts);

class WeightCard extends React.Component {
  state = {
    weight_entries: []
  }

    // this comment will be used for the map function listing elements of water data to the chart 
     // <div>
      //   <span>TESTING JSON RESPONSE</span>
      //   <ul>
      //   { this.state.exercise_entries.map(exercise => <li>{exercise_entries}</li>)}
      //   </ul>
      // </div> 

  // componentDidMount() {
  //   axios.get(`/api/v1/exercise_entries`)
  //     .then(res => {
  //       const exercise_entries = res.data;
  //       console.log(exercise_entries)
  //       this.setState({ exercise_entries });
  //     })
  //     .catch(error => console.log(error));
  // }

  render() {
    weightTarget.dataSource.data = this.props.weightType;
    const chart1 = <ReactFC {...weightTarget} />
    const dialog = <Dialog />

    return (
      <GenericCard type="weight" timePeriod={this.props.timePeriod} dialog={dialog} chart1={chart1} chart2={chart2}/>
    );
  }
}

export default ExerciseCard;