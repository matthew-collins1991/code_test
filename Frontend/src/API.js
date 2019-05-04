const baseUrl = "http://localhost:3000/api/v1/users"

function JSON_to_URLEncoded(element,key,list){
    var list = list || [];
    if(typeof(element)=='object'){
      for (var idx in element)
        JSON_to_URLEncoded(element[idx],key?key+'['+idx+']':idx,list);
    } else {
      list.push(key+'='+encodeURIComponent(element));
    }
    return list.join('&');
  }


class API {

  static createUser(user){
    return fetch(`${baseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(response => response.json());
  }


  static createSwaggerUser(user){
    return fetch(`http://mic-leads.dev-test.makeiteasy.com/api/v1/create`, {
        mode: 'no-cors',
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON_to_URLEncoded(user)
    }).then(resp => console.log(resp));
  }

}


window.API = API;

export default API; 