import axios from 'axios';

const URL = 'http://localhost:3001';

export const validateUser = userInfo => axios.post(`${URL}/auth`, userInfo);

export const getimageEndpoint = imageBlob => axios.post(`${URL}/image`, imageBlob);

export const registHomeWork = homework => axios.post(`${URL}/homework`, homework)
  .then(({ data }) => {
    data.result ? alert(data.msg) : alert('등록 실패! 개발자에게 문의하세요');
  })
  .catch((err) => {
    console.error(err);
    alert('등록 실패! 개발자에게 문의하세요');
  });
