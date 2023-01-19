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

export const jason = async (options={}) => {

  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    // 얕은 복사라 headers 전까지 복사 => 그래서 headers는 객체 안의 객체라 다시 얕복 진행
    headers: {...(defaultOptions.headers ?? {}), ...(options.headers ?? {})}
  }

  let response = await fetch(url, restOptions);
  
/*   let response = await fetch(
    'https://jsonplaceholder.typicode.com/users/1',
    {
      method:'GET',
      headers:{
        'Content-Type' : 'application/json'
      }
    }
  ) */


  // 성공 -> response.ok
  if (response.ok) {
    response.data = await response.json();
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