import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchedAC, unfollowAC } from '../../../redux/usersReduser';
import Users from './Users';
import preloader from '../../../../src/assets/img/preloader.gif';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetched(true);  
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => { 
                this.props.toggleIsFetched(false);
                this.props.setUsers(response.data.items);

            }
            );
    }

    render() {
        return <>
            { this.props.isFetched ? <img src={ preloader } /> : <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            /> }

            
        </>
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

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        toggleIsFetched: (isFetched) => {
            dispatch(toggleIsFetchedAC(isFetched))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);