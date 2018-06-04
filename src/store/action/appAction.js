import { browserStore } from '../../helper/collection'
import { makeRequest } from '../../helper/internet'
import { history } from '../../route/history'
//export all actions here

/*
* LOGIN actions
*/

export const loginRequest = () => ({ type: "LOGIN_REQUEST" });
export const loginSuccess = (payload) => ({ type: "LOGIN_SUCCESS", ...payload });
export const loginFail = (errMessage) => ({ type: "LOGIN_FAIL", errMessage });
export const resetLoginError = () => ({
  type: "LOGIN_ERR_RESET"
})

export const logout = () => {
  localStorage.clear();
  history.push("/");
  location.reload()
}

export const login = (email, password) => {
  return async dispatch => {
    try {
      dispatch(loginRequest());
      let { data } = await makeRequest('/login', "POST", null, { email, password });
      dispatch(loginSuccess(data));

      await browserStore.set("userName", data.userName);
      await browserStore.set("email", data.email);
      await browserStore.set("token", data.token);
      await browserStore.set("userId", data.userId);
      await browserStore.set("temp","GuvfVfOvyyvbaQbyyneOnol");
      
    } catch (e) {
      console.log(e)
      dispatch(loginFail(e.message));
    }
  }

}

/*
* REPOSITORY actions
*/

export const repositoryRequest = () => ({ type: "REPOSITORY_REQUEST" });
export const repositorySuccess = (payload) => ({ type: "REPOSITORY_SUCCESS", ...payload });
export const repositoryFail = (errMessage) => ({ type: "REPOSITORY_FAIL", errMessage });

export const resetRepositoryError = () => ({
  type: "REPOSITORY_ERR_RESET"
})


export const setCurrentRepository = (currentRepository) => ({
  type: "SET_CURRENT_REPOSITORY",
  currentRepository: currentRepository
})

export const getRepositoryContainerInfo = (repositoryContainerInfo) => ({
  type: "REPOSITORY_CONTAINER_INFO",
  repositoryContainerInfo: repositoryContainerInfo
});

export const clearRepositoryLogs = () => ({ type: "CLEAR_REPOSITORY_CONTAINER_LOGS" });

export const getRepositoryContainerLogs = (logs) => ({
  type: "REPOSITORY_CONTAINER_LOGS",
  logs: logs
});

export const manualDeploy = (repositoryName, projectPath) => {
  return async dispatch => {
    try {
      dispatch(repositoryRequest());
      let { data } = await makeRequest('/rebuildcontainer', "POST", null, { repositoryName, projectPath });
      console.log(data)
    } catch (e) {
      dispatch(repositoryFail(e.message));
    }
  }
}


export const createRepository = (payload) => {
  return async dispatch => {
    try {
      dispatch(repositoryRequest());
      let { data } = await makeRequest('/createrepository', "POST", null, payload);
    } catch (e) {
      dispatch(repositoryFail(e.message));
    }
  }
}

export const deleteRepository = (id, repositoryName) => {
  return async dispatch => {
    try {
      dispatch(repositoryRequest());
      let { data } = await makeRequest(`/deleterepository/${id}`, "POST", null, { repositoryName });
      console.log(data)
    } catch (e) {
      dispatch(repositoryFail(e.message));
    }
  }
}



export const getRepositories = () => {
  return async dispatch => {
    try {
      dispatch(repositoryRequest());
      let { data } = await makeRequest('/repositories', "GET", null, null);
      dispatch(repositorySuccess(data));
    } catch (e) {
      dispatch(repositoryFail(e.message));
    }
  }
}

export const getRepositoriesInfo = repositoryName => {
  return async dispatch => {
    try {
      dispatch(repositoryRequest());
      let { data } = await makeRequest(`/monitorcontainer?containerName=${repositoryName}docker_web_1`, "GET", null, null);
      dispatch(getRepositoryContainerInfo(data.info));
    } catch (e) {
      dispatch(repositoryFail(e.message));
    }
  }
}

export const getRepositoryLogs = repositoryName => {
  return async dispatch => {
    try {
      dispatch(repositoryRequest());
      let { data } = await makeRequest(`/fetchlogs/${repositoryName}docker_web_1`, "GET", null, null);
      console.log(data)
      dispatch(getRepositoryContainerLogs(data.logs));
    } catch (e) {
      dispatch(repositoryFail(e.message));
    }
  }
}
