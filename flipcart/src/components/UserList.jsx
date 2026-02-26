
const UserList = ({users})=>{
    return(
        <div>
            <h1>User List</h1>
            {
               users.map((u,i)=>(
                    <div key={i}>
                        <h2>{u}</h2>
                    </div>
               )) 
            }
        </div>
    )
}
export default UserList;