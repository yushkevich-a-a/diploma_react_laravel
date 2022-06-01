

export const getRequest = async (request) => {
  const response = await fetch(`${process.env.MIX_APP_URL}/api${request}`, {
    headers : {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
  },
  });
  if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
  }
  const data = await response.json();
  if (data.status === 'error') {
    throw new Error(data.data);
  }

  return data;
}

export const postRequest = async (request, dataRequest) => {
  const response = await fetch(`${process.env.MIX_APP_URL}/api${request}`, {
    method: 'POST',
    headers : {
      "Content-Type" : "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
  },
    body: JSON.stringify(dataRequest)
  });
  if (response.status === 422) {
    const errorMessages = await response.json()
    throw new Error(Object.values(errorMessages).join(' и '));
  }
  if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
  }
  const data = await response.json();
  if (data.status === 'error') {
    throw new Error(data.data);
  }
  return data;
}

export const postFormRequest = async (request, dataRequest) => {

  const response = await fetch(`${process.env.MIX_APP_URL}/api${request}`, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    body: dataRequest,
  });
  if (response.status === 422) {
    const errorMessages = await response.json()
    throw new Error(Object.values(errorMessages).join(' и '));
  }
  if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
  }
  const data = await response.json();

  if(data.status === 'error') {
    throw new Error(data.message);
  }

  return data;
}

export const putRequest = async (request, dataRequest) => {
  const response = await fetch(`${process.env.MIX_APP_URL}/api${request}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    body: JSON.stringify(dataRequest)
  });
  if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
  }
  const data = await response.json();
  if(data.status === 'error') {
    throw new Error(data.data);
  }

  return data;
}

export const deleteRequest = async (request) => {
  const response = await fetch(`${process.env.MIX_APP_URL}/api${request}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
  });
  if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
  }
  const data = await response.json();

  if(data.status === 'error') {
    throw new Error(data.message);
  }

  return data;
}