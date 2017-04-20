// import React from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { Redirect } from 'react-router-dom'
// import moment from 'moment'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import ConnectedAddFriend from './addFriend'
// import ConnectedGetLocation from './getLocation'
//
// class BrowseActivities extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       date: moment(),
//       lat: this.props.location.lat,
//       lng: this.props.location.lng,
//       rating: ,
//       address: ,
//       tripID: ,
//       redirect: false
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleClick = this.handleClick.bind(this)
//     this.handleRedirect = this.handleRedirect.bind(this)
//     this.handleDateStart = this.handleDateStart.bind(this)
//     this.handleDateEnd = this.handleDateEnd.bind(this)
//   }
//   handleChange(e) {
//     let target = e.target.name
//     this.setState({
//       [target]: e.target.value
//     })
//   }
//   handleClick(e) {
//     e.preventDefault()
//     let trip = {}
//     trip.formatted_name = this.props.location.formattedName
//     trip.lng = this.props.location.lng
//     trip.lat = this.props.location.lat
//     trip.name = this.state.name
//     trip.start_date = this.state.startDate.utc()
//     trip.end_date = this.state.endDate.utc()
//     let token = localStorage.getItem("token")
//     let friends = []
//     this.props.friends.forEach((friend) => {
//       friends.push(friend.id)
//     })
//     this.props.addTrip(trip, token, friends)
//     this.setState({
//       redirect: true
//     })
//   }
//   handleRedirect() {
//     return (
//       <Redirect to={'/mytrips'}/>
//     )
//   }
//   handleDateStart(date) {
//     this.setState({
//       startDate: date
//     })
//   }
//   handleDateEnd(date) {
//     this.setState({
//       endDate: date
//     })
//   }
//   render() {
//     return (
//       <div>
//         {this.state.redirect ? this.handleRedirect() : null}
//         <input type='text' placeholder='Trip Name' onChange={this.handleChange} name='name'/>
//         <DatePicker selected={this.state.startDate} onChange={this.handleDateStart}/>
//         <DatePicker selected={this.state.endDate} onChange={this.handleDateEnd}/>
//         <ConnectedGetLocation />
//         <ConnectedAddFriend />
//         <input type='submit' value='Create Trip' onClick={this.handleClick}/>
//       </div>
//     )
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     addTrip: addTrip
//   }, dispatch)
// }
//
// const mapStateToProps = (state) => {
//   return {
//     location: state.Location,
//     friends: state.Friends.addedFriends
//   }
// }
//
// const ConnectedAddTrip = connect(mapStateToProps, mapDispatchToProps)(AddTrip)
//
// export default ConnectedAddTrip