import UserCard from './UserCard'
import Search from './Search'

export default function UserList({users, fetchRandomUser, fetchAllUsers}) {

    return (
        <>
            <Search fetchRandomUser={fetchRandomUser} fetchAllUsers={fetchAllUsers}/>
            <div className="user-list">
                {users.map((user) => UserCard(user))}
            </div>
        </>
    )
}
