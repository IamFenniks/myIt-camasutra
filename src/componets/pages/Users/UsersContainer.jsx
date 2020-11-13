import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, toggleFollowInProgress, getUsers } from '../../../redux/usersReduser';
import Users from './Users';

class UsersContainer extends React.Component {
    
    componentDidMount() {
        // debugger;
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            setCurrentPage={this.props.setCurrentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            isFetched={this.props.isFetched}
            toggleFollowInProgress={this.props.toggleFollowInProgress}
            followInProgress={this.props.followInProgress}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetched: state.usersPage.isFetched,
        followInProgress: state.usersPage.followInProgress
    }
}

export default connect(
    mapStateToProps,
    { follow, unfollow, setCurrentPage, toggleFollowInProgress, getUsers }
)(UsersContainer);