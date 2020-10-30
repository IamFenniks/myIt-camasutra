import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetched, unfollow } from '../../../redux/usersReduser';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetched(true);  
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, { 
            withCredentials: true 
        })
            .then(response => {
                this.props.toggleIsFetched(false); 
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                 
            }
        );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        this.props.toggleIsFetched(true);  
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, { 
            withCredentials: true 
        })
            .then(response => { 
                this.props.toggleIsFetched(false);
                this.props.setUsers(response.data.items);

            }
            );
    }

    render() {
        return <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetched={this.props.isFetched}
            />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetched: state.usersPage.isFetched
    }
}
                    //     I      //
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         toggleIsFetched: (isFetched) => {
//             dispatch(toggleIsFetchedAC(isFetched))
//         }
//     }
// }

                   //    II    //
// export default connect(
//         mapStateToProps, 
//         {
    //         follow: followAC,
    //         unfollow: unfollowAC,
    //         setUsers: setUsersAC,
    //         setTotalUsersCount: setTotalUsersCountAC,
    //         setCurrentPage: setCurrentPageAC,
    //         toggleIsFetched: toggleIsFetchedAC
    //     }
//     )(UsersContainer);

                   //    III    //
//      Меняем в userReduser названия СА-ов
// import { followAC -> follow, setCurrentPageAC -> setCurrentPageAC,... } from '../../../redux/usersReduser';

// export default connect(
//         mapStateToProps, 
//         { follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetched }
//     )(UsersContainer);               

export default connect(
        mapStateToProps, 
        { follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetched }
    )(UsersContainer);