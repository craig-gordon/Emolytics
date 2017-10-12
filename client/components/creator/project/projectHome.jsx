import React from 'react';
import {Link} from 'react-router-dom';
import SectionList from './SectionList.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ChangeActions from '../../../actions'
import axios from 'axios';


class ProjectHome extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
    this.onSectionClick = this.onSectionClick.bind(this);
  }

  onSectionClick(obj, options) {
    obj['options'] = options;
    this.props.actions.changeCurrentSection(obj, options);
  }
  

  render() {
    return (
      <div>
        <h2>{this.props.currentProject.name}</h2>
        <p>{this.props.currentProject.description}</p>
        <Link to="/projectCreate">Add option</Link>
        {this.props.currentProject.sections.map((section, i) => (
          <SectionList 
            onSectionClick={this.onSectionClick}
            section={section}
            key={i}
          />
        ))}
      </div>
    );
  }

};


const mapStateToProps = (state) => {
  // console.log('LOG WITHIN PROJECTHOME', state);
  return ({
    currentProject: state.currentProject
  });
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ChangeActions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
  ) (ProjectHome)