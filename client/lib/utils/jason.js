// fetch() 비동기 통신을 위한 것 -> XMLHttpRequest보다 편리해서 많은 사람들이 사용

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}

/* const jason = () => {
  fetch(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      method:'GET',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:null // JSON.stringify() 시켜주어여 한다.
    }
  )
} */

export const jason = async (options={}) => {

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    // 얕은 복사라 headers 전까지 복사 => 그래서 headers는 객체 안의 객체라 다시 얕복 진행
    headers: {...(defaultOptions.headers ?? {}), ...(options.headers ?? {})}
  }

  let response = await fetch(url, restOptions); // fetch는 url을 제외하고 작동!!!! 그래서 restParameter로 사용
  
/*   let response = await fetch(
    'https://jsonplaceholder.typicode.com/users/1', // url
    // restOptions
    {
      method:'GET',
      headers:{
        'Content-Type' : 'application/json'
      }
    }
  ) */


  // 성공 확인 -> response.ok (xhr에서는 status로 판)
  if (response.ok) {
    response.data = await response.json(); // 응답을 JSON 형태로 파싱
  }

/*   response.then((res) => {
    console.log(res);
  }) */

  // console.log(response);
  return response;
}

//  jason({})


jason.get = (url, options) => {
  return jason({url, ...options})
}

jason.post = (url, body, options) => {
  return jason({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

jason.put = (url, body, options) => {
  return jason({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

jason.delete = (url, options) => {
  return jason({
    method: 'DELETE',
    url,
    ...options
  })
}

jason.post('wwww.naver.com', {name:'jason'},
// ...options로 들어간 후, restOptions으로 받아진다.
{
  mode: 'cors',
  cache: 'no-cache',
  credential: 'same-origin',
  headers: {}
}
)