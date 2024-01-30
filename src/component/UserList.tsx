
type UserListProps={
    isLoading:boolean,
    error:boolean,
    data:Array<{id:number, name:string}>
}

const UserList = ({isLoading, error, data}:UserListProps) => {
    if(isLoading && !error){
        <p>Loading....</p>
      }
    return (
        <div>
           <div className="text-blue-500 font-bold">
           <h3 >User List component is called presentational component</h3>
            <h3>User container component called is Container component</h3>
           </div>
            {data.map(item=>(
        <div key={item.id}> 
        <p>{item.name}</p>
    </div>
     ))}
        </div>
    );
};

export default UserList;