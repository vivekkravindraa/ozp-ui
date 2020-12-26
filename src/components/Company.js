import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCompanies } from '../actions';

import { customHistory } from '../App';

class Company extends Component {
  componentDidMount() {
    Promise.allSettled([
      setTimeout(() => {
        this.props.getCompaniesAPI()
      }, 3000)
    ]);
  }

  render() {
    const { companies, loading, error } = this.props;

    if(loading) {
      return <p>Loading...</p>
    } else if(error) {
      return <p>{error}</p>
    } else {
      return (
        <div>
          <h1>Companies - {companies.length}</h1>
          {companies.map((item, index) => {
            return <div key={index}>
              <p onClick={() => customHistory.push(`/companies/${item.company.name}`)}>
                {item.company.name}
              </p>
            </div>
          })}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    companies: state.companies,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCompaniesAPI: getCompanies
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);
