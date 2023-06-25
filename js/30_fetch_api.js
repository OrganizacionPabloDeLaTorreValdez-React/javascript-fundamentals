// Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments';

const  consultarApi = () => {
  fetch(url).then(res => res.json())
    .then(res => res.forEach(comment => {
      console.log(comment);
    }));
};

consultarApi();



