import fetch from "node-fetch";
import axios from "axios";
/*fetch("https://jsonplaceholder.typicode.com/users")
  .then(data => data.json())
  .then(users => {
    console.log("users Yüklendi", users);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(data => data.json())
      .then(post => console.log("Post yüklendi", post));
  });*/

/*async function getData(){
      const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");

       const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
       
        console.log("users",users);
        console.log("post1",post1);

  }
  getData();*/

const getComments = () => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users"
    );

    resolve(user);
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: post } = await axios(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    resolve(post);
  });
};

(async () => {
    try{
        const users = await getComments();
        const post = await getPost();
        console.log(users);
        console.log(post);
    }
    catch(e){
        console.log(e);
    }
  

})();
