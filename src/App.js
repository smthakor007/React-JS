import React, { useState ,useEffect} from 'react';
// import { WithLoading } from './Component/Userlist';
// import UserList from './Component/Withloading';
// import Timer from './Component/Timer';
// import Fetch from './Component/Fetch';
// import Toddoo from './Component/Toddoo'
// import Counter from './Component/Counter';
// import Counter1 from './Component/Counter';
// import Input from'./Component/Input';
// import Todo2 from './Component/Todo2';
// import Todo from './Component/Todo';
import Tabale from './Component/Tabale';
// const UserWihComp = WithLoading(UserList);

export default function App() {
  // const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setUser([
  //       { id: 1, name: "sun" },
  //       { id: 2, name: "Anu" },
  //       { id: 3, name: "ss" }
  //     ]);
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div>
      <Tabale/>
      {/* <UserWihComp isLoading={loading} user={user} /> */}
    </div>
  );
}
